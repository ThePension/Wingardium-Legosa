<script setup>
import { ref } from "vue";
import { grayscale } from "../services/LegoAnalyzer.js";

const pictureData = ref(grayscale());
</script>

<template>
  <h1>ResultPage</h1>
  <img :src="pictureData" />
</template>
