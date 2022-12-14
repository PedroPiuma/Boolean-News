<script setup>
import { format } from "date-fns"
import { ref } from "vue"
import Loader from "./Loader.vue"
const { news } = defineProps(["news"])
const { id, imageUrl, newsSite, summary, title, updatedAt, url } = news

const isLoaded = ref(false)

const date = format(new Date(updatedAt), "dd/MM/yyyy")
const loaded = (event) => (isLoaded.value = true)
</script>

<template>
  <div class="news-item">
    <div>
      <span>{{ id }}: </span>
      <a :href="url" target="_blank">
        {{ newsSite }} - <span>{{ date }}</span>
      </a>
    </div>
    <h3>{{ title }}</h3>
    <Loader v-if="!isLoaded" />
    <img :src="imageUrl" alt="" @load="loaded" />
    <p>{{ summary }}</p>
  </div>
</template>

<style scoped>
.news-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  padding: 10px 10px 20px;
  margin: 10px 15px;
  background-color: #121212;
  max-width: 600px;
}
.news-item span,
.news-item a {
  font-size: 13px;
}
.news-item h3 {
  text-align: center;
  text-transform: uppercase;
  line-height: 20px;
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 10px;
}

.news-item img {
  width: 100%;
  border-radius: 5%;
  margin-bottom: 10px;
}

.news-item p {
  margin: 0 15px;
  text-align: center;
  font-size: 14px;
  max-width: 480px;
}

@media (min-width: 768px) {
  .news-item span,
  .news-item a {
    font-size: 17px;
    line-height: 40px;
  }

  .news-item h3 {
    font-size: 22px;
    line-height: 27px;
  }
  .news-item img {
    margin-bottom: 20px;
  }
  .news-item p {
    font-size: 17px;
  }
}
</style>
