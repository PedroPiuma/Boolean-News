<script setup>
import Loader from "./Loader.vue"
import HolidayItem from "./HolidayItem.vue"

const { data } = defineProps(["data"])
</script>

<template>
  <Loader v-if="!data" />
  <HolidayItem v-for="holiday in data" :holiday="holiday" />
</template>
