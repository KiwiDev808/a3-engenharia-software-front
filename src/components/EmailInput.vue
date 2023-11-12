<script setup lang="ts">
import { ref } from 'vue'
import MailIcon from '@/components/icons/IconMail.vue'
import { isEmptyString, isInvalidEmail } from '@/utils/validation'

const props = defineProps<{
  label: string
  placeholder: string
  modelValue: string
}>()
defineEmits(['update:modelValue'])

let error = ref('')
const validateInput = () => {
  error.value = ''
  if (isEmptyString(props.modelValue)) {
    error.value = 'O campo deve ser preenchido'
    return
  }

  if (isInvalidEmail(props.modelValue)) {
    error.value = 'O campo deve ser um e-mail'
    return
  }
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
          :value="modelValue"
          @input="$emit('update:modelValue', $event?.target?.value)"
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
