<template>
  <div class="q-mx-md">
    <h4 class="text-center">LEGO recognizer</h4>

    <div class="row justify-center" v-if="!cameraActive">
      <q-btn
        @click="startCamera"
        color="primary"
        icon-right="camera_enhance"
        label="Start camera"
      />
    </div>
    <div v-else>
      <camera
        :resolution="{ width: 375, height: 812 }"
        ref="camera"
        autoplay
      ></camera>

      <div class="row justify-center q-mt-md">
        <q-btn
          @click="takePicture"
          color="secondary"
          icon-right="camera_enhance"
          label="Take picture"
        />
      </div>
    </div>
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

<script>
import Camera from "simple-vue-camera";
import { ref } from "vue";

export default {
  name: "IndexPage",
  components: {
    Camera,
  },

  setup() {
    const cameraActive = ref(false);
    const pictureTaken = ref(false);
    const pictureData = ref(null);
    const camera = ref(Camera);

    const startCamera = () => {
      cameraActive.value = true;
    };

    const takePicture = async () => {
      console.log(camera.value.snapshot);
      const picture = await camera.value.snapshot();
      pictureData.value = URL.createObjectURL(picture);
      pictureTaken.value = true;
    };

    return {
      cameraActive,
      pictureTaken,
      pictureData,
      camera,
      startCamera,
      takePicture,
    };
  },
};
</script>
