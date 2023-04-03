<script setup>
import { ref, onMounted } from "vue";
import { grayscale } from "../services/LegoAnalyzer.js";
import cv from "@techstark/opencv-js";

const imgSrcElement = ref(null);
const resultImgRef = ref(null);

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

const updateSrcImage = (event) => {
  imgSrcElement.value.src = URL.createObjectURL(event.target.files[0]);

  // When image is loaded, process it
  imgSrcElement.value.onload = () => {
    processImage();
  };
};
</script>

<template>
  <h1>ResultPage</h1>
  <img id="imgSrc" style="width: 30%; height: 30%" ref="imgSrcElement" />
  <canvas id="resultImg" ref="resultImgRef" />

  <!-- Image Input, that call updateMatFromUrl onchange -->
  <input type="file" accept="image/*" @change="updateSrcImage" />
</template>
