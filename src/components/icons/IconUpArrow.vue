<script setup>
import { onMounted, ref } from "vue"

const main = ref(null)
const click = () => main.value.scrollIntoView()

onMounted(() => {
  main.value = document.querySelector("#main")
  // window.addEventListener("scroll", () => console.log(window.scrollY))
})
</script>

<template>
  <img src="../../assets/images/Icon-up.png" alt="Arrow Up" @click="click" />
</template>

<style scoped>
@keyframes up {
  0% {
    transform: translateY(10px);
    opacity: 0;
  }
  50% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-10px);
    opacity: 0;
  }
}

img {
  position: fixed;
  bottom: 25px;
  right: 15px;
  width: 45px;
  z-index: 1;
  border-radius: 100%;
  cursor: pointer;
  animation: up 2s cubic-bezier(0.4, 0.4, 0.72, 0.72) infinite;
}
</style>
