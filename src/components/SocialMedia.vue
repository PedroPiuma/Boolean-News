<script setup>
import IconGithub from "./icons/IconGithub.vue"
import IconLinkedin from "./icons/IconLinkedin.vue"
import IconInstagram from "./icons/IconInstagram.vue"
</script>

<template>
  <div class="socialmedia-container">
    <div class="socialmedia">
      <IconGithub />
      <IconLinkedin />
      <IconInstagram />
    </div>
    <a href="mailto:luisppiuma@gmail.com" class="my-email">luisppiuma@gmail.com</a>
  </div>
</template>

<style scoped>
.socialmedia-container {
  border-top: 1px solid #505050;
  border-bottom: 1px solid #505050;
  margin: 0 40px;
  padding: 20px 0;
  border-radius: 30%;
}
.socialmedia {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 10px;
}

.my-email {
  display: block;
  text-align: center;
}
</style>
