<script setup>
import { ref, onMounted } from "vue";
import Camera from "simple-vue-camera";
import cv from "@techstark/opencv-js";
import {
  gaussianBlur,
  grayscale,
  splitColors,
  canny,
  laplacian,
  thresholdBinary,
  opening,
  closing,
  findBorders,
  displayBorders,
  find_convex_hull,
  display_convex_hull,
  caracterise,
  caracterise_hulls,
  draw_hulls_on_image,
} from "../services/LegoAnalyzer.js";

const imgSrcElement = ref(null);
const resultImgRef = ref(null);

const cameraActive = ref(true);
const cam = ref(null);

const legoCounter = ref(0);
const caracteristic = ref(null);

const updateSrcImage = (event) => {
  imgSrcElement.value.src = URL.createObjectURL(event.target.files[0]);

  legoCounter.value = 0;

  // When image is loaded, process it
  imgSrcElement.value.onload = () => {
    processImage();
  };
};

const edgesLaplacian = (mat) => {
  const mat_blurred = gaussianBlur(mat, 5);
  const gray = grayscale(mat_blurred);
  const edges = laplacian(gray, cv.CV_8U, 5, 1);
  const tresh = thresholdBinary(edges, 200, 255);

  mat_blurred.delete();
  gray.delete();
  edges.delete();

  return tresh;
};

const edgesCanny = (mat) => {
  const gray = grayscale(mat);
  const canny_edges = canny(gray);

  gray.delete();

  return canny_edges;
};

const contourDetection = (mat) => {
  const borders = findBorders(mat);
  const contours_mat = displayBorders(mat, borders);

  borders.contours.delete();
  borders.hierarchy.delete();

  return contours_mat;
};

const convexEnvelopeDetection = (mat, source) => {
  const borders = findBorders(mat);
  const convex_hulls = find_convex_hull(borders);
  caracterise_hulls(convex_hulls);

  const contours_mat = draw_hulls_on_image(source, convex_hulls);

  borders.contours.delete();
  borders.hierarchy.delete();
  convex_hulls.delete();

  return contours_mat;
};

const legoCaracterise = (processed_mat, source_mat, i) => {
  const borders = findBorders(processed_mat);
  const convex_hulls = find_convex_hull(borders);

  let hull = convex_hulls.get(i);
  caracteristic.value = caracterise(hull);
  let color = new cv.Scalar(255, 255, 255);
  let singleLegoBorder_mat = source_mat.clone();
  cv.drawContours(singleLegoBorder_mat, convex_hulls, i, color, 2, cv.LINE_8);
  return singleLegoBorder_mat;
};

const processImage = () => {
  // Read image from src
  const source = cv.imread(imgSrcElement.value);

  // Processing
  const processed_mat = edgesLaplacian(source);
  //const contours_mat = convexEnvelopeDetection(processed_mat, source);

  const singleLegoBorder_mat = legoCaracterise(
    processed_mat,
    source,
    legoCounter.value
  );

  // Show the image using the canvas
  resultImgRef.value.style.height = null;
  cv.imshow(resultImgRef.value, singleLegoBorder_mat);

  // Release memory
  processed_mat.delete();
  singleLegoBorder_mat.delete();
  //mat.delete();
};

const nextLego = () => {
  legoCounter.value += 1;
  processImage();
};

const previousLego = () => {
  legoCounter.value -= 1;
  processImage();
};

const startCamera = () => {
  // Hide the image
  imgSrcElement.value.style.display = "none";
  resultImgRef.value.style.display = "none";

  // Erase previous datas
  caracteristic.value = null;

  cameraActive.value = true;
  // cam.value.start();
};

const takePicture = async () => {
  const picture = await cam.value.snapshot();
  imgSrcElement.value.src = URL.createObjectURL(picture);

  // Stop the camera
  cam.value.stop();
  cameraActive.value = false;

  // Display the image
  imgSrcElement.value.style.display = "inline-block";
  resultImgRef.value.style.display = "inline-block";

  // When image is loaded, process it
  imgSrcElement.value.onload = () => {
    legoCounter.value = 0;
    processImage();
  };
};
</script>

<template>
  <h1>ResultPage</h1>

  <div class="q-pa-lg">
    <input type="file" accept="image/*" @change="updateSrcImage" />
  </div>

  <div v-if="caracteristic" class="q-pa-lg">
    <q-list bordered separator>
      <q-item v-if="caracteristic.gcx">
        <q-item-section>
          <q-item-label overline>Gravity Center X</q-item-label>
          <q-item-label>{{ caracteristic.gcx }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item v-if="caracteristic.gcy">
        <q-item-section>
          <q-item-label overline>Gravity Center Y</q-item-label>
          <q-item-label>{{ caracteristic.gcy }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item v-if="caracteristic.circularity">
        <q-item-section>
          <q-item-label overline>Circularity</q-item-label>
          <q-item-label>{{ caracteristic.circularity }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item v-if="caracteristic.allongement">
        <q-item-section>
          <q-item-label overline>Allongement</q-item-label>
          <q-item-label>{{ caracteristic.allongement }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item v-if="caracteristic.excentricity">
        <q-item-section>
          <q-item-label overline>Eccentricity</q-item-label>
          <q-item-label>{{ caracteristic.excentricity }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item v-if="caracteristic.area">
        <q-item-section>
          <q-item-label overline>Area</q-item-label>
          <q-item-label>{{ caracteristic.area }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item v-if="caracteristic.perimeter">
        <q-item-section>
          <q-item-label overline>Perimeter</q-item-label>
          <q-item-label>{{ caracteristic.perimeter }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item v-if="caracteristic.class">
        <q-item-section>
          <q-item-label overline>Class</q-item-label>
          <q-item-label>{{ caracteristic.class }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>

  <div class="flex q-pa-lg">
    <q-space />
    <img id="imgSrc" style="width: 30%; height: 30%" ref="imgSrcElement" />
    <q-space />
    <canvas id="resultImg" ref="resultImgRef" />
    <q-space />
  </div>

  <div class="flex q-pa-lg">
    <q-space />
    <q-btn
      @click="previousLego"
      outline
      rounded
      color="secondary"
      label="Previous"
    />

    <q-btn
      @click="takePicture"
      v-if="cameraActive"
      outline
      rounded
      color="standard"
      label="Prendre une photo"
    />

    <q-btn
      @click="startCamera"
      v-if="!cameraActive"
      outline
      rounded
      color="standard"
      label="Démarrer la caméra"
    />

    <q-btn @click="nextLego" outline rounded color="primary" label="Next" />
    <q-space />
  </div>

  <div class="flex q-pa-lg">
    <q-space />
    <camera
      v-if="cameraActive"
      :resolution="{ width: 375, height: 812 }"
      ref="cam"
    ></camera>
    <q-space />
  </div>
</template>
