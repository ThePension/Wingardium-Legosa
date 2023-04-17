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

const processImage = () => {
  // Read image from src
  const mat = cv.imread(imgSrcElement.value);

  // Process the image
  const gray = grayscale(mat);
  const edges = laplacian(gray, cv.CV_8U, 5, 1);
  const tresh = thresholdBinary(edges, 200, 255);
  //onst close = closing(tresh, 3);
  const open = opening(tresh, 2);

  //const gray = grayscale(mat);
  //const tresh = thresholdBinary(gray, 150, 255);
  const borders = findBorders(open);
  const img_borders = displayBorders(mat, borders);

  // Show the image using the canvas
  cv.imshow(resultImgRef.value, img_borders);

  // Release memory
  mat.delete();
  gray.delete();
  tresh.delete();
  borders.delete();
  img_borders.delete();
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
