<script setup>
import { ref, onMounted } from "vue";
import { grayscale } from "../services/LegoAnalyzer.js";
import cv from "@techstark/opencv-js";

// Load image from file as a cv Mat
const mat = cv.imread("../data/legos.jpg");

const pictureData = ref(null);

onMounted(() => {
  pictureData.value = grayscale(mat);
});
</script>

<template>
  <h1>ResultPage</h1>
  <img :src="pictureData" />
</template>
