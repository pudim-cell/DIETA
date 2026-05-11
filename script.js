function mostrarMensagem() {
  alert('Bem-vindo ao FitLife! Bora treinar 💪');
}

function adicionarRefeicao() {
  const input = document.getElementById('refeicao');
  const lista = document.getElementById('listaRefeicoes');

  if (input.value.trim() === '') {
    alert('Digite uma refeição!');
    return;
  }

  const item = document.createElement('li');

  item.innerHTML = `
    ${input.value}
    <button class="remover" onclick="removerRefeicao(this)">
      Remover
    </button>
  `;

  lista.appendChild(item);

  input.value = '';
}

function removerRefeicao(botao) {
  botao.parentElement.remove();
}
