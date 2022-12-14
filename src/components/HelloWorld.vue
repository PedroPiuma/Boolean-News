<script setup>
const { msg } = defineProps(["msg"])
</script>

<template>
  <div class="header-title">
    <h1 class="green">{{ msg }}</h1>
    <h3>Random API's</h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
}

h3 {
  font-size: 1.2rem;
}

.header-title h1,
.header-title h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .header-title h1,
  .header-title h3 {
    text-align: left;
  }
}
</style>
