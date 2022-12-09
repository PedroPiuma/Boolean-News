<script setup>
import { format } from "date-fns"
const { news } = defineProps(["news"])
const { id, imageUrl, newsSite, summary, title, updatedAt, url } = news

const date = format(new Date(updatedAt), "dd/MM/yyyy")
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
    <img :src="imageUrl" alt="" />
    <p>{{ summary }}</p>
  </div>
</template>

<style scoped>
.news-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #a5a5a5;
  border-radius: 8px;
  padding: 0 5px 20px;
  margin: 10px 15px;
  background-color: #121212;
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
}
</style>
