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

let copos = 0;

function adicionarAgua(){

    copos++;

    document.getElementById('aguaTexto').innerText =
    `Copos de água: ${copos}`;
}

function calcularIMC(){

    const peso =
    parseFloat(document.getElementById('peso').value);

    const altura =
    parseFloat(document.getElementById('altura').value);

    const resultado =
    document.getElementById('resultadoIMC');

    if(!peso || !altura){

        resultado.innerText =
        'Preencha todos os campos';

        return;
    }

    const imc = peso / (altura * altura);

    resultado.innerText =
    `IMC: ${imc.toFixed(2)}`;
}
