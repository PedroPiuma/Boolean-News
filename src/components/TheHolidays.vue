<!-- https://brasilapi.com.br/docs#tag/CNPJ/paths/~1cnpj~1v1~1{cnpj}/get -->
<script setup>
import axios from "axios"
import { compareAsc } from "date-fns"
import { fi } from "date-fns/locale"
import { ref, watch } from "vue"
import Dropdown from "./Dropdown.vue"
import HolidaysList from "./HolidaysList.vue"
import IconArrow from "./icons/IconArrow.vue"

const year = ref(new Date().getFullYear())
const month = ref(new Date().getMonth() + 1)
const monthText = ["Janeiro", "Feveiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
const url = ref(`https://brasilapi.com.br/api/feriados/v1/${year.value}`)
const data = ref(null)
const errorMsg = ref(null)

async function fetchData(filter = false) {
  data.value = null
  errorMsg.value = null
  url.value = `https://brasilapi.com.br/api/feriados/v1/${year.value}`
  try {
    const request = await axios.get(url.value)
    data.value = request.data.reverse()
    data.value = data.value.map((el) => {
      if (compareAsc(new Date(el.date), new Date()) === 1) {
        el.flag = "Próximo"
        return el
      } else return el
    })
  } catch (error) {
    errorMsg.value = error.response.data.message
  }
}
fetchData()
watch([url, year], fetchData)
</script>

<template>
  <div class="selectors">
    <div class="year-selector">
      <IconArrow direction="left" @click="year -= 1" />
      <label for="year" class="year-label"><input class="year" type="number" v-model="year" />Ano</label>
      <IconArrow direction="right" @click="year += 1" />
    </div>
    <!-- <Dropdown :values="['Todos', 'Próximos', 'Passados']" :fetchData="fetchData" /> -->
  </div>
  <HolidaysList :data="data" :errorMsg="errorMsg" />
</template>

<style scoped>
.selectors {
  display: flex;
  justify-content: center;
  position: sticky;
  padding-top: 5px;
  top: 0;
  z-index: 1;
  background-color: #181818;
  margin-bottom: 15px;
}
.year-selector {
  display: flex;
  justify-content: center;
}

.year {
  font-size: 24px;
  background-color: transparent;
  border: none;
  width: 60px;
  color: #ffffff;
  text-align: center;
}

.year-label {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
