<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/" class="header-logo">
      <img alt="busque quadras logo" class="logo" src="@/assets/logo.png" />
    </RouterLink>
    <nav class="header-menu">
      <RouterLink to="/sobre">Sobre</RouterLink>
      <RouterLink to="/mapa">Mapa</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/termos">Termos de Uso</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  background-color: var(--color-primary);
  min-height: 120px;
  padding: 0 10rem;
}

.header-logo > img {
  width: 130px;
}

.header-menu {
  margin: 0 auto;
  gap: 1.75rem;
  display: flex;
  flex-wrap: wrap;
}

.header-menu > a {
  background-color: #3b3b40;
  color: #ffffff;
  text-decoration: none;
  min-width: 100px;
  font-weight: 500;
  padding: 0.5rem 1rem;
  min-height: 40px;
  border-radius: 4px;
  text-align: center;
}

.header-menu > a:hover {
  background-color: #ffffff;
  color: #3b3b40;
}

.header-menu > :is(a:active) {
  background-color: #dadada;
  color: #3b3b40;
}

.header-menu > :is(a:active, a:hover) {
  text-decoration: underline;
}
</style>
