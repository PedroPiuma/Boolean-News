<!-- https://brasil.io/auth/tokens-api/ -->
<!-- https://www.digitalhouse.com/br/blog/apis-mais-usadas-por-desenvolvedores-programacao/ -->
<script setup>
import axios from "axios"
import { ref, watch } from "vue"

const url = ref(`https://api.brasil.io/v1/`)
const data = ref(null)
// const { description, links } = data.value

const brasilIo = axios.create({
  baseURL: "https://api.brasil.io/v1/",
  headers: { Authorization: "Token 3a62a6ad74e376b0ee1a6b7b0a54410033a0d690" },
})

async function fetchData() {
  data.value = null
  url.value = `https://api.brasil.io/v1/`
  try {
    const request = await brasilIo.get("dataset/covid19")
    data.value = request.data
  } catch (error) {
    console.log(error.response.data.message)
  }
}
fetchData()
watch([url], fetchData)
</script>

<template>
  <div>
    <!-- <p v-for="item in data.value.links">{{ item }}</p> -->
  </div>
</template>

<style scoped></style>
