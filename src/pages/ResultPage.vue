<script setup>
import { ref, onMounted } from "vue";
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

import FullScreenCam from "src/components/FullScreenCam.vue";

const imgSrcElement = ref(null);
const resultImgRef = ref(null);

const existingFile = ref(null);

const onImgUpdate = (img) => {
  pictureUrl.value = URL.createObjectURL(img);
  pictureData.value = img;

  imgSrcElement.value.src = URL.createObjectURL(img);

  takingPicture.value = false;
  pictureTaken.value = true;

  legoCounter.value = 0;

  // When image is loaded, process it
  imgSrcElement.value.onload = () => {
    processImage();
  };
};

const takingPicture = ref(false); // User is taking a picture
const pictureTaken = ref(false); // Picture has been taken
const pictureUrl = ref(null); // Picture url
const pictureData = ref(null);
const pictureWidth = ref(null);
const pictureHeight = ref(null);

const legoCounter = ref(0);
const legoNumber = ref(0);
const caracteristic = ref(null);

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

const updateSrcImage = () => {
  imgSrcElement.value.src = URL.createObjectURL(existingFile.value);

  legoCounter.value = 0;
  pictureTaken.value = true;

  // When image is loaded, process it
  imgSrcElement.value.onload = () => {
    pictureWidth.value = imgSrcElement.value.width;
    pictureHeight.value = imgSrcElement.value.height;
    
    processImage();
  };
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

  // Set the number of lego
  legoNumber.value = convex_hulls.size();

  return singleLegoBorder_mat;
};

const processImage = () => {
  // Read image from src
  const source = cv.imread(imgSrcElement.value); // imgSrcElement

  // Processing
  const processed_mat = edgesLaplacian(source);

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
  // Erase previous datas
  caracteristic.value = null;

  takingPicture.value = true;
};
</script>

<template>

  <div class="q-pa-md q-gutter-sm row"
    v-if="!takingPicture"
  >
    <q-btn color="primary" outline icon-right="photo_camera" label="Take picture"
      class="col-12"
      size="lg"
      align="between"
      @click="startCamera"
    />
    <q-file color="primary" outlined label-color="primary" v-model="existingFile" label="Existing picture"
      @update:model-value="updateSrcImage"
      class="col-12"
    >
      <template v-slot:append>
        <q-icon name="attachment" color="primary" />
      </template>
    </q-file>
  </div>

  <img id="imgSrc" style="display: none;"  ref="imgSrcElement" />

  <canvas id="resultImg"
    v-if="!takingPicture"
    :style="{ height: pictureWidth / pictureHeight * 100 + '%', width: '100%' }"
    ref="resultImgRef" />

  <div v-if="pictureTaken && !takingPicture" class="row justify-between q-px-md">
    <q-btn @click="previousLego" push color="white" text-color="primary" label="Previous"
      :disable="legoCounter == 0"
    />
    <q-btn @click="nextLego" push color="white" text-color="primary" label="Next"
      :disable="legoCounter == legoNumber - 1"
    />
  </div>

  <div v-if="caracteristic" class="q-pa-md">
    <q-list bordered separator>
      <q-item v-if="caracteristic.class">
        <q-item-section>
          <q-item-label overline>Class</q-item-label>
          <q-item-label>{{ caracteristic.class }}</q-item-label>
        </q-item-section>
      </q-item>
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
    </q-list>
  </div>

  <full-screen-cam
    v-if="takingPicture"
    v-model="pictureData"
    @update:img="onImgUpdate"
  />
</template>
