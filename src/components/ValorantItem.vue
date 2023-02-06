<!-- https://dash.valorant-api.com/endpoints/agents -->
<script setup>
import IconAudio from "./icons/IconAudio.vue"
import AgentAbilities from "./AgentAbilities.vue"
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
  uuid,
} = data

// console.log(voiceLine.mediaList[0].wave)
// console.log(uuid)
</script>

<template>
  <div class="card" v-if="isPlayableCharacter" :id="uuid">
    <div class="card-agent" :style="{ backgroundImage: `url(${background})` }">
      <img class="card-agent-img" :src="fullPortrait" alt="" />
      <AgentAbilities :abilities="abilities" />
    </div>
    <div class="card-info">
      <div class="card-info-intro">
        <p class="card-info-intro-name">{{ displayName }}</p>
        <IconAudio :voiceLine="voiceLine" />
      </div>
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
.card-info {
  padding: 15px 15px 15px 0;
}

.card-info-intro {
  display: flex;
  gap: 10px;
  align-items: center;
}
.card-info-intro-name {
  font-size: 22px;
  margin-bottom: 5px;
}
.card-info-description {
  height: 200px;
  overflow: scroll;
}
</style>
