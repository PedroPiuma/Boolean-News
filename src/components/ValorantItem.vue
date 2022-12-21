<!-- https://dash.valorant-api.com/endpoints/agents -->
<script setup>
const { data } = defineProps(["data"])
const {
  abilities,
  background,
  bustPortrait,
  description,
  developerName,
  displayIcon,
  displayIconSmall,
  displayName,
  fullPortrait,
  fullPortraitV2,
  isPlayableCharacter,
  killfeedPortrait,
  role,
  voiceLine,
} = data

// console.log(abilities)
</script>

<template>
  <div class="card" v-if="isPlayableCharacter">
    <div class="card-agent" :style="{ backgroundImage: `url(${background})` }">
      <img class="card-agent-img" :src="fullPortrait" alt="" />
      <div class="card-agent-abilities">
        <img class="card-agent-abilitie-img" v-for="abilitie in abilities" :src="abilitie.displayIcon" alt="" />
      </div>
    </div>
    <div class="card-info">
      <p class="card-info-name">{{ displayName }}</p>
      <p class="card-info-description">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #00bd7e;
  border-radius: 5px;
  display: flex;
  margin: 10px 0;
}

.card-agent {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 180px;
  align-items: center;
}
.card-agent-img {
  width: 200px;
}
.card-agent-abilities {
  display: flex;
  justify-content: center;
  background-image: linear-gradient(180deg, #141414, #333333);
  padding: 5px 10px;
  gap: 15px;
  border-radius: 0 0 25% 25%;
}
.card-agent-abilitie-img {
  width: 25px;
}

.card-info {
  padding: 15px 15px 15px 0;
}

.card-info-name {
  font-size: 22px;
  margin-bottom: 5px;
}
.card-info-description {
  height: 200px;
  overflow: scroll;
}
</style>
