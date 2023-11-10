<template>
  <main>
    <section class="form-wrapper">
      <header>
        <h2>Termo de uso Busque Quadras</h2>
        <p>Aceite o termo de uso!</p>
      </header>
      <p>
        Bem-vindo ao Busque Quadras! Estes Termos de Uso constituem um contrato legal entre você e o Busque Quadras. Ao
        acessar ou utilizar nosso site, você concorda em ficar vinculado a estes termos. Se você não concorda com algum
        aspecto destes termos, por favor, não use nosso site.
      </p>
      <p>
        Uso do Site:
        Você concorda em utilizar o Busque Quadras apenas para fins legais e de maneira que não viole estes termos ou as
        leis aplicáveis. Não está autorizado a utilizar o site de forma que possa danificar, desabilitar, sobrecarregar ou
        prejudicar qualquer aspecto do Busque Quadras ou interferir no uso de terceiros.
      </p>
      <p>
        Cadastro e Conta:
        Alguns recursos do Busque Quadras podem exigir o cadastro de uma conta. Você é responsável por manter a
        confidencialidade de suas credenciais de conta e por todas as atividades que ocorram em sua conta.
      </p>
      <p>
        Conteúdo do Usuário:
        Ao enviar qualquer tipo de conteúdo para o Busque Quadras, você concede ao Busque Quadras uma licença mundial, não
        exclusiva, livre de royalties para usar, reproduzir, modificar, distribuir e exibir esse conteúdo.
      </p>

      <p>
        Limitação de Responsabilidade:
        O Busque Quadras não se responsabiliza por danos diretos, indiretos, incidentais, consequenciais ou especiais
        resultantes do uso ou da incapacidade de usar nosso site.
      </p>

      <p>
        Links para Sites de Terceiros:
        O Busque Quadras pode conter links para sites de terceiros. Não temos controle sobre o conteúdo desses sites e não
        nos responsabilizamos por qualquer conteúdo, privacidade ou práticas de segurança nesses sites.
      </p>
      <p>
        Alterações nos Serviços:
        Reservamo-nos o direito de modificar ou interromper qualquer parte do Busque Quadras a qualquer momento,
        temporária ou permanentemente, sem aviso prévio.
      </p>
      <p>
        Disposições Gerais:
        Estes Termos de Uso constituem o acordo integral entre você e o Busque Quadras em relação ao uso do site. Qualquer
        falha nossa em exercer ou fazer valer qualquer direito ou disposição destes termos não constituirá uma renúncia a
        tal direito ou disposição.
      </p>
      <p>
        Ao continuar a usar o Busque Quadras, você concorda com estes Termos de Uso. Obrigado por escolher o Busque
        Quadras!
      </p>
      <div class="acceptTerm">
        <input type="checkbox">
        <p>Aceitar termos de uso</p>
      </div>
    </section>
  </main>
</template>
<style scoped>
main {
  height: 100%;
  display: flex;
  flex: 1;
  padding: 10px;
  justify-content: center;
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

header>h2 {
  font-size: 2rem;
  font-weight: 700;
}

header>p {
  font-size: 1.25rem;
  color: #7c7c8a;
  text-align: center;
  width: 80%;
}

.form-wrapper {
  width: clamp(300px, 80vw, 700px);
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

p:nth-child(10) {
  font-weight: bold;
}

.acceptTerm{
  display: flex;
  align-items: center;
  gap: 6px;
}
</style>
  