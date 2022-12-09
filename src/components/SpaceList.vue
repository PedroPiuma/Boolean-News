<script setup>
import Loader from "./Loader.vue"
import SpaceItem from "./SpaceItem.vue"

const { data } = defineProps(["data"])
</script>

<template>
  <Loader v-if="!data" />
  <SpaceItem v-for="news in data" :news="news" />
</template>
