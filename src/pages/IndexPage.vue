<script setup>
import { ref, onMounted } from "vue";

import FullScreenCam from "src/components/FullScreenCam.vue";

const pictureTaken = ref(false);
const pictureData = ref(null);
</script>

<template>
  <full-screen-cam
    v-model="pictureData"
    @update:modelValue="pictureTaken = true"
  />
  <div class="q-mx-md">
    <div class="q-mt-lg" v-if="pictureTaken">
      <q-img
        :src="pictureData"
        :fit="scale - down"
        :ratio="4 / 3"
        spinner-color="white"
        style="max-width: 100%"
      />
    </div>
  </div>
</template>
