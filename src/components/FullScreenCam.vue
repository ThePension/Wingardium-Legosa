<script setup>
import { ref, onMounted } from "vue";

import Camera from "simple-vue-camera";

// Get front and back camera ids
const frontCamId = ref(null);
const backCamId = ref(null);

const currentCamId = ref(null);

const cameraActive = ref(true);
const cam = ref(null);
const modelValue = ref(null);

const img = ref(null);
const img_url = ref(null);

const screenWidth = ref(null);
const screenHeight = ref(null);
const screenRatio = ref(null);

const startCamera = () => {
  cameraActive.value = true;
  cam.value.start();
};

const takePicture = async () => {
  img.value = await cam.value.snapshot();

  cameraActive.value = false;

  img_url.value = URL.createObjectURL(img.value);
};

const acceptPicture = () => {
  modelValue.value = img.value.src;

  $emit("update:modelValue", modelValue.value);
};

const retakePicture = () => {
  cameraActive.value = true;
  // cam.value.start();
};

const switchCamera = () => {
  if (currentCamId.value == frontCamId.value) {
    currentCamId.value = backCamId.value;
  } else {
    currentCamId.value = frontCamId.value;
  }

  cam.value.changeCamera(currentCamId.value);
};

onMounted(() => {
  // Devices is a promise, so we need to wait for it to resolve
  cam.value.devices().then((devices) => {
    // Get the cameras ids from the camera component
    const frontCam = devices.find((device) => device.label.includes("front"));
    const backCam = devices.find((device) => device.label.includes("back"));

    if (frontCam) frontCamId.value = frontCam.deviceId;
    else frontCamId.value = null;
    if (backCam) backCamId.value = backCam.deviceId;
    else backCamId.value = null;

    currentCamId.value = backCamId.value;
  });

  // Get screen size
  screenWidth.value = window.innerWidth;
  screenHeight.value = window.innerHeight;

  // Get screen ratio
  screenRatio.value = screenWidth.value / screenHeight.value;

  startCamera();
});
</script>

<template>
  <camera v-if="cameraActive" ref="cam"></camera>

  <!-- Take picture button -->
  <q-btn
    class="absolute-bottom-right"
    color="primary"
    icon="camera"
    @click="takePicture"
  />

  <!-- Accept picture button -->
  <!-- <q-btn
    class="absolute-bottom-left"
    color="primary"
    icon="check"
    @click="acceptPicture"
  /> -->

  <!-- Switch camera button -->
  <q-btn
    class="absolute-bottom-left"
    color="primary"
    icon="cameraswitch"
    @click="switchCamera"
    v-if="frontCamId && backCamId"
  />

  <q-img
    v-if="img_url"
    :src="img_url"
    :ratio="screenRatio"
    :fit="screenRatio - 0.1"
  />
</template>

<script>
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
};
</script>
