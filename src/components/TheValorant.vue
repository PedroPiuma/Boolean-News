<!-- https://brasil.io/auth/tokens-api/ -->
<!-- https://www.digitalhouse.com/br/blog/apis-mais-usadas-por-desenvolvedores-programacao/ -->
<script setup>
import axios from "axios"
import { ref, watch } from "vue"
import ValorantAgentIcon from "./ValorantAgentIcon.vue"
import ValorantItem from "./ValorantItem.vue"

const url = ref(`https://valorant-api.com/v1/agents?language=pt-BR`)
const data = ref(null)

async function fetchData() {
  data.value = null
  try {
    const request = await axios.get(url.value)
    data.value = request.data.data
    // console.log(data.value)
    data.value.forEach((el) => {
      el.displayName === "Sova" ? console.log(el) : false
    })
  } catch (error) {
    console.log(error.response.data.message)
  }
}
fetchData()
watch([url], fetchData)
</script>

<template>
  <div class="valorant-list">
    <div class="valorant-agent-icons">
      <ValorantAgentIcon v-for="agent in data" :agent="agent.displayIcon" :uuid="agent.uuid" />
    </div>
    <ValorantItem v-for="item in data" :data="item" />
  </div>
</template>

<style scoped>
.valorant-list {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.valorant-agent-icons {
  display: flex;
  flex-wrap: wrap;
  max-width: 400px;
  align-items: center;
  justify-content: center;
}
</style>
