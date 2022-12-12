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
    <div class="logo-box">
      <img alt="Boolean News Logo" class="logo" src="./assets/images/master-news-skull-1.jpeg" />
    </div>
    <div>
      <HelloWorld msg="Boolean News" />
      <nav @click="scrollTo">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/space">Aeroespacial (EN)</RouterLink>
        <RouterLink to="/feriados">Feriados (BR)</RouterLink>
        <!-- <RouterLink to="/about">About</RouterLink> -->
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
}

nav {
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  border-bottom: 1px solid #dedede;
}

.logo-box {
  background-image: url(./assets/images/matrix-bg.gif);
  background-size: contain;
  height: 480px;
  border-radius: 0 25px 5px 8px;
}
.logo {
  width: 320px;
  border-radius: 0 25px 25px 0;
  transition: border-radius 2s ease;
}
.logo:hover {
  transition: border-radius 2s ease;
  border-radius: 0 25px 100% 0;
}
</style>
