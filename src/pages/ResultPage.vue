<script setup>
import { ref, onMounted } from "vue";
import { grayscale } from "../services/LegoAnalyzer.js";
import cv from "@techstark/opencv-js";

const imgUrl = ref(null);
const img = ref(null);

const pictureData = ref(null);

const processImage = () => {
  const mat = cv.imread(img);
  pictureData.value = grayscale(mat);
};

const updateMatFromUrl = (event) => {
  img.value = event.target.files[0];

  imgUrl.value = URL.createObjectURL(img.value);

  processImage();
};

// onMounted(() => {
//   pictureData.value = grayscale(mat);
// });
</script>

<template>
  <h1>ResultPage</h1>
  <img :src="imgUrl" style="width: 30%; height: 30%" />
  <img :src="pictureData" />
  <!-- Image Input, that call updateMatFromUrl onchange -->
  <input type="file" accept="image/*" @change="updateMatFromUrl" />
</template>
