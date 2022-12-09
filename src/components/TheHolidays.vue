<script setup>
import axios from "axios"
import { ref, watch } from "vue"
import HolidaysList from "./HolidaysList.vue"

const year = ref(new Date().getFullYear())
const url = ref(`https://brasilapi.com.br/api/feriados/v1/${year.value}`)
const data = ref(null)

async function fetchData() {
  data.value = null
  url.value = `https://brasilapi.com.br/api/feriados/v1/${year.value}`
  const request = await axios.get(url.value)
  data.value = request.data
  console.log(data.value)
}
fetchData()
watch([url, year], fetchData)
</script>

<template>
  <div class="page-selection">
    <HolidaysList :data="data" />
  </div>
</template>

<style scoped></style>
