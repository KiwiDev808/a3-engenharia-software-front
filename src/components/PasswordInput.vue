<script setup lang="ts">
import { ref } from 'vue'
import LockIcon from '@/components/icons/IconLock.vue'
import { isEmptyString } from '@/utils/validation'

const props = defineProps<{
  label: string
  modelValue: string
}>()
defineEmits(['update:modelValue'])

let error = ref('')
const validateInput = () => {
  error.value = isEmptyString(props.modelValue) ? 'O campo deve ser preenchido' : ''
}
</script>

<template>
  <article class="input-wrapper">
    <section class="input-section">
      <label>{{ label }}</label>
      <div class="input-with-icon">
        <input
          type="password"
          placeholder="******************"
          autocomplete="off"
          :value="modelValue"
          @input="$emit('update:modelValue', $event?.target?.value)"
          @keyup="validateInput"
          @blur="validateInput"
        />
        <LockIcon class="input-icon" />
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
