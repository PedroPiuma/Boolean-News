<!-- https://brasilapi.com.br/docs#tag/CNPJ/paths/~1cnpj~1v1~1{cnpj}/get -->
<script setup>
import { ref } from "vue"

const { values, fetchData } = defineProps(["values", "fetchData"])
const isActive = ref(false)
const selected = ref(values[0])

const click = (value) => {
  isActive.value = false
  selected.value = value
  fetchData(selected.value)
}
</script>

<template>
  <div class="selector-box">
    <div class="selector">
      <span>{{ selected }}</span>
      <div class="arrow" @click="isActive = !isActive"></div>
    </div>
    <div class="values" v-if="isActive">
      <span v-for="value in values" @click="click(value)">{{ value }}</span>
    </div>
  </div>
</template>

<style scoped>
@keyframes isActive {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.selector-box {
  position: relative;
  display: flex;
}
.selector {
  display: flex;
  align-items: center;
  gap: 10px;
}
.arrow {
  display: block;
  width: 10px;
  height: 10px;
  border-bottom: 2px solid #ffffff;
  border-right: 2px solid #ffffff;
  transform: rotate(45deg);
  margin-bottom: 3px;
}
.values {
  display: flex;
  flex-direction: column;
  background-color: #101010;
  border-radius: 8px;
  padding: 10px;
  height: fit-content;
  border: 1px solid #dedede;
  overflow: hidden;
  position: absolute;
  top: 40px;
  animation: isActive 0.5s ease-in-out;
}
.values span {
  margin: 5px;
}
</style>
