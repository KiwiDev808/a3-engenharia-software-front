<script setup lang="ts">
import QuadraCarousel from '@/components/QuadraCarousel.vue'
import { SearchService } from '@/services/SearchService'
import { ref } from 'vue'
const quadras = [
  { id: 1, imgSrc: 'quadra1.png', name: 'Quadra Poliesportiva', local: 'Cabula' },
  { id: 2, imgSrc: 'quadra2.png', name: 'Quadra de Tenis', local: 'Boca do Rio' },
  { id: 3, imgSrc: 'quadra3.png', name: 'Quadra Poliesportiva', local: 'Calaba' },
  { id: 4, imgSrc: 'quadra4.png', name: 'Quadra de Basquete', local: 'Jardim dos Namorados' }
]
let esporte = ref('')
let distancia = ref('')
let localidade = ref('')

const searchService = new SearchService({ get: () => {} } as any)

const handleSubmit = async () => {
  console.log('ok')
  await searchService.searchSportCourt({
    sport: esporte.value,
    distance: Number(distancia.value),
    searchWord: localidade.value
  })
}
</script>

<template>
  <main>
    <section class="search-section">
      <form @submit.prevent="handleSubmit">
        <select v-model="esporte" id="esportes" name="esportes">
          <option selected disabled value="">Esporte</option>
          <option value="basquete">Basquete</option>
          <option value="futebol">Futebol</option>
          <option value="volei">Volei</option>
        </select>
        <select v-model="distancia" id="distancia" name="distancia">
          <option selected disabled value="">Distância</option>
          <option value="10">10km</option>
          <option value="20">20km</option>
          <option value="30">30km</option>
          <option value="40">40km</option>
          <option value="50">50km</option>
          <option value="60">60km</option>
        </select>
        <input type="text" v-model="localidade" placeholder="Digite a localidade desejada" />
        <button type="submit">BUSCAR</button>
      </form>
    </section>
    <QuadraCarousel :quadras="quadras" />

    <footer></footer>
  </main>
</template>

<style scoped>
main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

form {
  display: flex;
  height: 40px;
  width: 665px;
}

form > * {
  flex: 1;
}

form > input {
  flex: 2;
}

.search-section {
  height: 406px;
  background-image: url('../assets/quadra-rio-vermelho.png');
  display: flex;
  align-items: center;
  justify-content: center;
}

footer {
  background-color: #2ba6ff;
  height: 62px;
  border-radius: 10px 10px 0 0;
}
</style>
