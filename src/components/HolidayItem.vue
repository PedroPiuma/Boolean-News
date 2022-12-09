<script setup>
import { format } from "date-fns"

const { holiday } = defineProps(["holiday"])
const { date, name, type } = holiday

const formatedDate = format(new Date(date), "dd/MM/yyyy")
console.log(formatedDate)
</script>

<template>
  <div class="holiday">
    <span>{{ date }} </span>
    <h3>{{ name }}</h3>
    <p>{{ type }}</p>
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
}
.holiday span,
.holiday a {
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

.holiday img {
  width: 100%;
  border-radius: 5%;
  margin-bottom: 10px;
}

.holiday p {
  margin: 0 15px;
  text-align: center;
  font-size: 14px;
}
</style>
