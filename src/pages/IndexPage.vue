<template>
  <div>
    <div v-if="!cameraActive">
      <button @click="startCamera">Démarrer la caméra</button>
    </div>
    <div v-else>
      <button @click="takePicture">Prendre une photo</button>
      <camera
        :resolution="{ width: 375, height: 812 }"
        ref="camera"
        autoplay
      ></camera>
    </div>
    <div v-if="pictureTaken">
      <img :src="pictureData" />
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
