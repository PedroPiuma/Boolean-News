<script setup>
import { onMounted, ref } from "vue"
import { RouterLink, RouterView } from "vue-router"
import HelloWorld from "./components/HelloWorld.vue"

const main = ref(null)
const scrollTo = () => main.value.scrollIntoView()

onMounted(() => {
  main.value = document.getElementById("main")
})
</script>

<template>
  <header>
    <img alt="Master News Logo" class="logo" src="./assets/images/master-news-skull-1.jpeg" />
    <div>
      <HelloWorld msg="Master News" />
      <nav @click="scrollTo">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/space">Space</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <main id="main">
    <RouterView />
  </main>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  height: 100vh;
}

nav {
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  border-bottom: 1px solid #dedede;
}

.logo {
  width: 250px;
  border-radius: 25px 25px 5px 5px;
  margin-bottom: 10px;
}
</style>
