<script setup>
import { format } from "date-fns"
import IconPast from "./icons/IconPast.vue"
import IconFuture from "./icons/IconFuture.vue"
import IconCloseGray from "./icons/IconCloseGray.vue"
import Timer from "./Timer.vue"
import { ref } from "vue"

const { holiday } = defineProps(["holiday"])
const { date, name, flag } = holiday

const formatedDate = format(new Date(date), "dd/MM/yyyy")
const isActive = ref(null)
</script>

<template>
  <div class="holiday" :class="isActive ? 'active' : ''" @click="isActive = !isActive">
    <IconCloseGray v-if="isActive" class="closer" />
    <span> {{ formatedDate }}</span>
    <h3>{{ name }}</h3>
    <IconPast v-if="!flag" />
    <IconFuture v-if="flag" />
    <p v-if="isActive">Feriado nacional</p>
    <Timer v-if="isActive" :date="date" :flag="flag" />
  </div>
</template>

<style scoped>
.holiday {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #a5a5a5;
  border-radius: 8px;
  padding: 0 5px 20px;
  margin: 10px 15px;
  background-color: #121212;
  cursor: pointer;
}
.holiday span {
  font-size: 17px;
}
.holiday h3 {
  text-align: center;
  text-transform: uppercase;
  line-height: 20px;
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 10px;
}
.holiday p {
  margin: 15px 15px 0;
  text-align: center;
  font-size: 14px;
}

.holiday.active {
  position: sticky;
  z-index: 1;
  top: 0;
  border: 3px solid #00bd7e;
}

.holiday.active .closer {
  position: absolute;
  top: 5px;
  right: 10px;
}
</style>
