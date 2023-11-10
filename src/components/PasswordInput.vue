<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  label: string
}>()

let input = ref('')
let error = ref('')
const validateInput = () => {
  error.value = input.value === '' ? 'The Input field is required' : ''
}
</script>

<template>
  <article class="input-wrapper">
    <section class="input-section">
      <label>{{ label }}</label>
      <input
        type="password"
        placeholder="******************"
        autocomplete="off"
        v-model="input"
        @keyup="validateInput"
        @blue="validateInput"
      />
    </section>
    <section class="error-section" v-if="error">
      {{ error }}
    </section>
  </article>
</template>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
}

.input-section {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: 500;
}

.input-section > input {
  height: 42px;
  border-color: var(--color-border);
  border-radius: 2px;
}

.error-section {
  color: red;
}
</style>
