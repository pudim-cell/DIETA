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

function gerarDieta(){

    const objetivo =
    document.getElementById('objetivo').value;

    const resultado =
    document.getElementById('resultadoDieta');

    let dieta = '';

    if(objetivo === 'emagrecer'){

        dieta = `
        🍳 Café da manhã:
        Omelete + café sem açúcar

        🥗 Almoço:
        Frango grelhado + arroz integral + salada

        🍎 Lanche:
        Frutas e castanhas

        🥩 Jantar:
        Peixe + legumes
        `;
    }

    else if(objetivo === 'ganhar'){

        dieta = `
        🍳 Café da manhã:
        Ovos + pão integral + vitamina

        🍗 Almoço:
        Frango + arroz + feijão + batata doce

        🥤 Pós treino:
        Whey protein + banana

        🥩 Jantar:
        Carne vermelha + macarrão integral
        `;
    }

    else{

        dieta = `
        🥗 Dieta equilibrada:

        Café da manhã saudável

        Proteína no almoço

        Frutas nos lanches

        Jantar leve
        `;
    }

    resultado.innerText = dieta;
}
