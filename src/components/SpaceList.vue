<script setup>
import Loader from "./Loader.vue"
import NewsItem from "./NewsItem.vue"

const { data } = defineProps(["data"])
</script>

<template>
  <Loader v-if="!data" />
  <NewsItem v-for="news in data" :news="news" />
</template>
