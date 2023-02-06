<script setup>
import IconAbilitie from "./icons/IconAbilitie.vue"
const { abilities } = defineProps(["abilities"])
</script>

<template>
  <div class="card-agent-abilities">
    <IconAbilitie v-for="abilitie in abilities" :abilitie="abilitie" />
  </div>
</template>

<style scoped>
.card-agent-abilities {
  display: flex;
  justify-content: center;
  background-image: linear-gradient(180deg, #141414, #333333);
  padding: 5px 10px;
  gap: 15px;
  border-radius: 0 0 25% 25%;
}
</style>
