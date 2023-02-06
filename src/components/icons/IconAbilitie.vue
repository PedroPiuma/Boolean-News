<script setup>
const { abilitie } = defineProps(["abilitie"])
</script>

<template>
  <img v-if="abilitie.displayIcon" :src="abilitie.displayIcon" />
</template>

<style scoped>
img {
  width: 25px;
}
</style>
