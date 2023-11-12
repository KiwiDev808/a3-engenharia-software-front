<script setup lang="ts">
import PasswordInputVue from '@/components/PasswordInput.vue'
import EmailInput from '../components/EmailInput.vue'
</script>

<template>
  <main>
    <section class="form-wrapper">
      <header>
        <h2>busque quadras</h2>
        <p>Registre-se para uma experiência completa!</p>
      </header>
      <form class="signup-form">
        <EmailInput label="Endereço de e-mail" placeholder="joaosilva@example.com" />

        <PasswordInputVue label="Sua senha" />

        <PasswordInputVue label="Confirme sua senha" />
      </form>
      <button type="submit">Registrar</button>
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
