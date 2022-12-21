<script setup>
import { onMounted, ref } from "vue"

const main = ref(null)
const isActive = ref(false)
const click = () => main.value.scrollIntoView()

onMounted(() => {
  main.value = document.querySelector("#main")
  window.addEventListener("scroll", () => {
    if (main.value.getBoundingClientRect().top < -100) isActive.value = true
    else isActive.value = false
  })
})
</script>

<template>
  <img class="arrow" v-if="isActive" src="../../assets/images/Icon-double-arrow.png" alt="Arrow Up" @click="click" />
</template>

<style scoped>
@keyframes up {
  0% {
    transform: translateY(20px) rotate(90deg);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  50% {
    transform: translateY(0), rotate(90deg);
    opacity: 1;
  }
  85% {
    opacity: 0;
  }
  100% {
    transform: translateY(-20px), rotate(90deg);
    opacity: 0;
  }
}

.arrow {
  position: fixed;
  bottom: 25px;
  right: 15px;
  width: 45px;
  z-index: 1;
  border-radius: 100%;
  cursor: pointer;
  transform: rotate(90deg);
  animation: up 4s cubic-bezier(0.4, 0.4, 0.72, 0.72) infinite;
  background-color: #141414;
  padding: 8px;
}
</style>
