<script setup>
const { direction } = defineProps(["direction"])
const result = () => {
  switch (direction) {
    case "left":
      return 0
    case "right":
      return "180deg"
    case "top":
      return "90deg"
    case "bottom":
      return "-90deg"
  }
}
</script>

<template>
  <img src="../../assets/images/Icon-arrow.png" alt="Arrow" :style="{ transform: `rotate(${result()})` }" />
</template>

<style scoped>
img {
  width: 45px;
}
</style>
