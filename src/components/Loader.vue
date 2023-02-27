<template>
  <div class="loader">
    <div class="loader-circle"></div>
  </div>
</template>

<style scoped>
@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

div.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
}

div.loader .loader-circle {
  border: 5px solid #00bd7e;
  border-top-color: #812d2e;
  height: 80px;
  width: 80px;
  margin: 0 auto;
  padding: 0;
  border-radius: 100%;
  text-align: center;
  animation: loader 2s infinite, show 0.5s ease-in-out;
}
</style>
