<script setup>
const { agent, uuid } = defineProps(["agent", "uuid"])
// console.log(uuid)
</script>

<template>
  <a :href="`#${uuid}`"><img class="valorant-agent-icons-icon" :src="agent" /></a>
</template>

<style scoped>
.valorant-agent-icons-icon {
  width: 100%;
  max-width: 50px;
  height: 100%;
  max-height: 50px;
  border: 1px solid #333333;
  transition: border 0.2s ease, border-radius 0.5s ease;
  cursor: pointer;
}
.valorant-agent-icons-icon:hover {
  border: 2px solid #00bd7e;
  border-radius: 10px;
}
</style>
