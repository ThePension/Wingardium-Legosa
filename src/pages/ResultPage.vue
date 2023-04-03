<script setup>
import { ref, onMounted } from "vue";
import { grayscale } from "../services/LegoAnalyzer.js";
import cv from "@techstark/opencv-js";
import Camera from "simple-vue-camera";

const imgSrcElement = ref(null);
const resultImgRef = ref(null);

const cameraActive = ref(true);
const cam = ref(null);

const processImage = () => {
  // Read image from src
  const mat = cv.imread(imgSrcElement.value);

  // Process the image
  const gray_mat = grayscale(mat);

  // Show the image using the canvas
  cv.imshow(resultImgRef.value, gray_mat);

  // Release memory
  mat.delete();
  gray_mat.delete();
};

const startCamera = () => {
  cameraActive.value = true;
  cam.value.start();
};

const takePicture = async () => {
  const picture = await cam.value.snapshot();
  imgSrcElement.value.src = URL.createObjectURL(picture);

  // Stop the camera
  cam.value.stop();
  cameraActive.value = false;

  // When image is loaded, process it
  imgSrcElement.value.onload = () => {
    processImage();
  };
};
</script>

<template>
  <h1>ResultPage</h1>

  <!-- <input type="file" accept="image/*" @change="updateSrcImage" /> -->

  <img id="imgSrc" style="width: 30%; height: 30%" ref="imgSrcElement" />
  <canvas id="resultImg" ref="resultImgRef" />

  <button @click="takePicture">Prendre une photo</button>
  <camera
    v-if="cameraActive"
    :resolution="{ width: 375, height: 812 }"
    ref="cam"
  ></camera>
</template>
