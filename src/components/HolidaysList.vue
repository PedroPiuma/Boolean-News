<script setup>
import Loader from "./Loader.vue"
import HolidayItem from "./HolidayItem.vue"

const { data, errorMsg } = defineProps(["data", "errorMsg"])
</script>

<template>
  <p class="message" v-if="errorMsg">{{ errorMsg }}</p>
  <Loader v-if="!data" />
  <HolidayItem v-for="holiday in data" :holiday="holiday" />
</template>

<style scoped>
@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.message {
  border: 1px solid gray;
  height: 90px;
  width: 240px;
  text-align: center;
  display: flex;
  align-items: center;
  margin: 0 auto;
  animation: show 0.5s ease-in-out;
}
</style>
