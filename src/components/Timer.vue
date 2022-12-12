<script setup>
import { differenceInDays } from "date-fns"

const { date, flag } = defineProps(["date", "flag"])
const difference = differenceInDays(new Date(date), new Date())

const timerText = () => {
  if (difference > 0) return Math.abs(difference) === 1 ? `Falta ${difference} dia` : `Faltam ${difference} dias` + " para o feriado!"
  else if (difference < 0) return `Passaram-se ${Math.abs(difference)} dias desde o feriado.`
  else return `O feriado é hoje!!`
}
</script>

<template>
  <div>{{ timerText() }}</div>
</template>
