<script async setup lang="ts">
import QuadraCard from './QuadraCard.vue'

defineProps<{
  quadras: {
    id: number
    imgSrc: string
    name: string
    local: string
  }[]
}>()

const getImageUrl = (name: string) => {
  return new URL(`../assets/${name}`, import.meta.url).href
}
</script>

<template>
  <section class="popular-sport-courts-section">
    <h2>pesquisas populares</h2>
    <section class="sports-court-carousel">
      <QuadraCard
        :img-src="getImageUrl(quadra.imgSrc)"
        :name="quadra.name"
        :local="quadra.local"
        v-for="quadra in quadras"
        v-bind:key="quadra.id"
      />
    </section>
  </section>
</template>

<style scoped>
.popular-sport-courts-section {
  padding: 2rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 2.125rem;
  flex: 1;
}

.sports-court-carousel {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

h2 {
  font-size: 2rem;
  font-weight: bold;
}
</style>
