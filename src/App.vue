<script setup>
import { onMounted, ref } from "vue"
import { RouterLink, RouterView } from "vue-router"
import IntroTitle from "./components/IntroTitle.vue"
import IconUpArrow from "./components/icons/IconUpArrow.vue"
import SocialMedia from "./components/SocialMedia.vue"

const main = ref(null)
const scrollTo = () => main.value.scrollIntoView()

const scrollStatus = (event) => console.log(event)

onMounted(() => {
  main.value = document.getElementById("main")
})
</script>

<template>
  <header>
    <div class="logo-box">
      <!-- <img alt="Boolean News Logo" class="logo" src="./assets/images/master-news-skull-1.jpeg" /> -->
      <img alt="Boolean News Logo" class="logo" src="./assets/images/skull-2.jpeg" />
    </div>
    <div>
      <IntroTitle msg="Boolean News" />
      <nav class="navbar" @click="scrollTo">
        <RouterLink to="/">Valorant</RouterLink>
        <RouterLink to="/space">Aeroespacial (EN)</RouterLink>
        <RouterLink to="/feriados">Feriados (BR)</RouterLink>
        <!-- <RouterLink to="/about">About</RouterLink> -->
      </nav>
    </div>
  </header>

  <main id="main">
    <RouterView />
    <IconUpArrow />
  </main>

  <footer class="footer">
    <SocialMedia />
  </footer>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}

.navbar {
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  border-bottom: 1px solid #dedede;
  gap: 10px;
}

.logo-box {
  background-image: url(./assets/images/matrix-bg.gif);
  background-size: contain;
  background-position: center;
  width: 100%;
  max-width: 350px;
  border-radius: 5px;
  transition: max-width 0.5s ease-in-out;
}
.logo {
  width: 100%;
  opacity: 0.9;
  vertical-align: middle;
  transition: opacity 2s ease;
}
@media (min-width: 768px) {
  .logo-box {
    max-width: 500px;
  }
}
.logo:hover {
  opacity: 0.3;
}

.footer {
  padding: 40px 0 40px;
}
</style>
