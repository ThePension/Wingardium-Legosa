<script setup>
import { ref, onMounted } from "vue";

import Camera from "simple-vue-camera";

const emit = defineEmits(["update:img"]);
const props = defineProps({
  img: {
    default: null,
  },
});

// Get front and back camera ids
const frontCamId = ref(null);
const backCamId = ref(null);

const currentCamId = ref(null);

const cameraActive = ref(true);
const pictureTaken = ref(false);

const cam = ref(null);

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
  pictureTaken.value = true;

  img_url.value = URL.createObjectURL(img.value);
};

const acceptPicture = () => {
  // Emit the picture data
  emit("update:img", img.value);
};

const retakePicture = () => {
  cameraActive.value = true;
  pictureTaken.value = false;
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

    // Set the default camera to the back one
    currentCamId.value = backCamId.value;
  });

  // Get screen size
  screenWidth.value = window.innerWidth;
  screenHeight.value = window.innerHeight;

  // Get screen ratio
  screenRatio.value = 1; screenWidth.value / screenHeight.value;

  startCamera();
});
</script>

<template>
  <camera v-if="cameraActive" ref="cam"></camera>

  <!-- Take picture button -->
  <q-btn
    v-if="cameraActive && !pictureTaken"
    class="absolute-bottom-right"
    color="primary"
    icon="camera"
    @click="takePicture"
  />

  <!-- Accept picture button -->
  <q-btn
    v-if="pictureTaken"
    class="absolute-bottom-right"
    color="primary"
    icon="check"
    @click="acceptPicture"
  />

  <!-- Retake picture button -->
  <q-btn
    v-if="pictureTaken"
    class="absolute-bottom-left"
    color="primary"
    icon="undo"
    @click="retakePicture"
  />

  <!-- Switch camera button -->
  <q-btn
    class="absolute-bottom-left"
    color="primary"
    icon="cameraswitch"
    @click="switchCamera"
    v-if="frontCamId && backCamId"
  />

  <q-img
    v-if="pictureTaken"
    :src="img_url"
    :ratio="screenRatio"
    :fit="screenRatio - 0.1"
  />
</template>
