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
  display_convex_hull,
} from "../services/LegoAnalyzer.js";

const imgSrcElement = ref(null);
const resultImgRef = ref(null);

const cameraActive = ref(true);
const cam = ref(null);

const updateSrcImage = (event) => {
  imgSrcElement.value.src = URL.createObjectURL(event.target.files[0]);

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

const convexEnvelopeDetection = (mat) => {
  const borders = findBorders(mat);
  const contours_mat = display_convex_hull(mat, borders);

  borders.contours.delete();
  borders.hierarchy.delete();

  return contours_mat;
};

const processImage = () => {
  // Read image from src
  const mat = cv.imread(imgSrcElement.value);

  // Processing
  const processed_mat = edgesLaplacian(mat);
  const contours_mat = convexEnvelopeDetection(processed_mat);

  // Show the image using the canvas
  cv.imshow(resultImgRef.value, contours_mat);

  // Release memory
  processed_mat.delete();
  contours_mat.delete();
  mat.delete();
};

const startCamera = () => {
  // Hide the image
  imgSrcElement.value.style.display = "none";
  resultImgRef.value.style.display = "none";

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
    processImage();
  };
};
</script>

<template>
  <h1>ResultPage</h1>

  <input type="file" accept="image/*" @change="updateSrcImage" />

  <img id="imgSrc" style="width: 30%; height: 30%" ref="imgSrcElement" />
  <canvas id="resultImg" ref="resultImgRef" />

  <button @click="startCamera" v-if="!cameraActive">Démarrer la caméra</button>

  <button @click="takePicture" v-if="cameraActive">Prendre une photo</button>
  <camera
    v-if="cameraActive"
    :resolution="{ width: 375, height: 812 }"
    ref="cam"
  ></camera>
</template>
