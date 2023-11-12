<script setup lang="ts">
import { ref } from 'vue'
import MailIcon from '@/components/icons/IconMail.vue'

defineProps<{
  label: string
  placeholder: string
  value: string
}>()
defineEmits(['input'])

let input = ref('')
let error = ref('')
const validateInput = () => {
  error.value = input.value === '' ? 'O campo deve ser preenchido' : ''
}
</script>

<template>
  <article class="input-wrapper">
    <section class="input-section">
      <label>{{ label }}</label>
      <div class="input-with-icon">
        <input
          type="text"
          :placeholder="placeholder"
          autocomplete="off"
          :value="value"
          @input="$emit('input', $event?.target?.value)"
          @keyup="validateInput"
          @blue="validateInput"
        />
        <MailIcon class="input-icon" />
      </div>
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

input {
  height: 42px;
  border-color: var(--color-border);
  border-radius: 2px;
  padding-left: 40px;
  width: 100%;
}

.input-with-icon {
  position: relative;
  width: 100%;
}

.input-icon {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
}

.error-section {
  color: red;
}
</style>
