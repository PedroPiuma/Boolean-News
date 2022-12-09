<script setup>
import axios from "axios"
import SpaceList from "./SpaceList.vue"
import IconArrow from "./icons/IconArrow.vue"
import IconDoubleArrow from "./icons/IconDoubleArrow.vue"
import { ref, watch } from "vue"

const start = ref(0)
const limit = ref(10)
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

const pageQtd = (event) => (limit.value = event.target.value)
</script>

<template>
  <div class="page-selection">
    <IconDoubleArrow direction="left" @click="start = 0" />
    <IconArrow direction="left" @click="start >= 10 ? (start -= 10) : start >= 1 ? (start -= 1) : null" />
    <span class="pageValue">{{ !start ? 1 : start / 10 + 1 }}</span>
    <IconArrow direction="right" @click="start += 10" />
    <IconDoubleArrow direction="right" @click="start += 30" />
    <label class="pageQtd-label" for="pageQtd">
      Nº/pág.
      <select class="pageQtd" name="pageQtd" id="pageQtd" @change="pageQtd">
        <option value="10">10</option>
        <option value="30">30</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </label>
  </div>

  <SpaceList :data="data" />
</template>

<style scoped>
.page-selection {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 15px;
}

.pageValue,
.pageQtd {
  display: block;
  font-size: 32px;
  text-align: center;
  width: 45px;
  background-color: transparent;
  border: none;
  color: #ffffff;
  cursor: pointer;
}

.pageQtd {
  width: 80px;
  margin-left: 5px;
}
.pageQtd:hover {
  outline: none;
}

.pageQtd-label {
  text-align: right;
}

.pageValue:hover:after {
  content: "Página atual";
  display: block;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  position: absolute;
  width: 80px;
  right: -18px;
}
</style>
