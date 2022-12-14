<script setup>
import Loader from "./Loader.vue"
import SpaceItem from "./SpaceItem.vue"

const { data } = defineProps(["data"])
</script>

<template>
  <Loader v-if="!data" />
  <div class="space-list">
    <SpaceItem v-for="news in data" :news="news" />
  </div>
</template>

<style scoped>
.space-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
