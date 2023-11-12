<script setup lang="ts">
import PasswordInputVue from '@/components/PasswordInput.vue'
import EmailInput from '../components/EmailInput.vue'
import { ref } from 'vue'
import { isEmptyString, isInvalidEmail } from '@/utils/validation'
import { UserService } from '@/services/UserService'

let email = ref('')
let password = ref('')
let checkPassword = ref('')

const validateInputs = () => {
  const fieldsToFix = []
  if (isEmptyString(email.value) || isInvalidEmail(email.value)) {
    fieldsToFix.push('Email')
  }
  if (isEmptyString(password.value)) {
    fieldsToFix.push('Senha')
  }

  if (isEmptyString(checkPassword.value)) {
    fieldsToFix.push('Confirmação de Senha')
  }

  if (checkPassword.value !== password.value) {
    fieldsToFix.push('Senha e Confirmação de Senha')
  }

  if (fieldsToFix.length > 0) {
    alert(`Os campos [${fieldsToFix.join(', ')}] devem ser preenchidos corretamente`)
    return
  }
}

const userService = new UserService({ post: () => {} } as any)

const registerUser = async () => {
  validateInputs()
  await userService.register({
    email: email.value,
    password: password.value,
    checkPassword: checkPassword.value
  })
}
</script>

<template>
  <main>
    <section class="form-wrapper">
      <header>
        <h2>busque quadras</h2>
        <p>Registre-se para uma experiência completa!</p>
      </header>
      <form class="signup-form">
        <EmailInput
          v-model:model-value="email"
          label="Endereço de e-mail"
          placeholder="joaosilva@example.com"
        />

        <PasswordInputVue v-model:model-value="password" label="Sua senha" />

        <PasswordInputVue v-model:model-value="checkPassword" label="Confirme sua senha" />
      </form>
      <button type="submit" @click="registerUser">Registrar</button>
    </section>
  </main>
</template>
<style scoped>
main {
  height: 100%;
  display: flex;
  flex: 1;
  padding: 10rem;
  justify-content: center;
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

header > h2 {
  font-size: 2rem;
  font-weight: 700;
}

header > p {
  font-size: 1.25rem;
  color: #7c7c8a;
  text-align: center;
  width: 90%;
}
.form-wrapper {
  width: clamp(300px, 80vw, 400px);
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

button {
  background-color: var(--color-primary);
  height: 50px;
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
}
</style>
