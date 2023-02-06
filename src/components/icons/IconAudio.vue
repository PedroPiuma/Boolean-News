<script setup>
import { ref } from "vue"

const { voiceLine } = defineProps(["voiceLine"])
const play = ref(false)

const audio = new Audio(voiceLine.mediaList[0].wave)
const playAudio = () => {
  play.value = true
  audio.play()
  setTimeout(() => (play.value = false), voiceLine.maxDuration * 1000)
}
</script>

<template>
  <div @click="playAudio">
    <img v-if="!play" src="../../assets/images/Icon-audio-wave-static.png" alt="Onde de som" />
    <img v-if="play" src="../../assets/images/Icon-audio-wave.gif" alt="Onde de som" />
  </div>
</template>

<style scoped>
img {
  width: 25px;
  height: 25px;
  border-radius: 100%;
  background-color: #ffffff;
}
</style>
