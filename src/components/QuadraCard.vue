<script async setup lang="ts">
defineProps<{
  imgSrc: string
  name: string
  local: string
}>()
</script>

<template>
  <article>
    <img :src="imgSrc" alt="imagem-quadra" />
    <h4>{{ name }}</h4>
    <h3>{{ local }}</h3>
  </article>
</template>

<style scoped></style>
