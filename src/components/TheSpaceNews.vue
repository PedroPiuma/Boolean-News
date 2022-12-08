<script setup>
import axios from "axios"
import NewsItem from "./NewsItem.vue"
import SpaceList from "./SpaceList.vue"
import { ref, watch } from "vue"

const start = ref(0)
const limit = ref(1)
const url = ref(`https://api.spaceflightnewsapi.net/v3/articles?_start=${start.value}&_limit=${limit.value}`)
const data = ref(null)

async function fetchData() {
  data.value = null
  url.value = `https://api.spaceflightnewsapi.net/v3/articles?_start=${start.value}&_limit=${limit.value}`
  const request = await axios.get(url.value)
  data.value = request.data
}

fetchData()
watch([url, start, limit], fetchData)

const perPage = (value) => {
  limit.value = value
}

const initPage = (value) => {
  start.value = value
}
</script>

<template>
  <div>
    <span @click="perPage(0)">Mostrar = 0</span>
    <span @click="perPage(10)">Mostrar = 10</span>
    <span @click="perPage(20)">Mostrar = 20</span>
  </div>
  <div>
    <span @click="initPage(0)">Página 1</span>
    <span @click="initPage(10)">Página 2</span>
    <span @click="initPage(20)">Página 3</span>
  </div>

  <SpaceList :data="data" />
</template>

<style scoped>
div {
  display: flex;
  align-items: center;
}

span {
  border: 1px solid #a5a5a5;
  padding: 10px;
  margin: 0 5px;
}
</style>
