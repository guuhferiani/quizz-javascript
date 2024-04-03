const perguntas = [
    {
      texto: "A tag <h1> define o título da página.",
      verdadeiro: true,
    },
    {
      texto: "A propriedade color é usada para definir a cor do fundo. ",
      verdadeiro: false,
    },
        {
      texto: "A tag <p> é usada para criar um parágrafo de texto. ",
      verdadeiro: true,
    },
    {
      texto: "A propriedade font-size é usada para definir o tamanho da fonte.",
      verdadeiro: true,
    },
    {
      texto: "A tag <img> é usada para inserir um vídeo.",
      verdadeiro: false,
    },
    {
      texto: "A propriedade font-family é usada para definir o tipo de letra. ",
      verdadeiro: true,
    },
    {
      texto: "O atributo src é usado para definir o link de uma imagem. ",
      verdadeiro: true,
    },
    {
      texto: "A propriedade letter-spacing é usada para definir o espaçamento entre as linhas. ",
      verdadeiro: false,
    },
    {
      texto: "A tag <ol> é usada para criar uma lista ordenada. ",
      verdadeiro: true,
    },
    {
      texto: "A propriedade background-color é usada para definir a cor do fundo.",
      verdadeiro: true,
    },
    {
      texto: "A tag <a> é usada para criar um link.",
      verdadeiro: true,
    },
    {
      texto: "A propriedade margin é usada para definir a margem.",
      verdadeiro: true,
    },
    {
      texto: "O atributo href é usado para definir o destino de um link.",
      verdadeiro: true,
    },
    {
      texto: "A propriedade padding é usada para definir o espaçamento entre os elementos.",
      verdadeiro: true,
    },
    {
      texto: "A tag <form> é usada para criar um formulário.",
      verdadeiro: true,
    },
    {
      texto: "A propriedade width é usada para definir a altura de um elemento. ",
      verdadeiro: false,
    },
    {
      texto: "A propriedade height é usada para definir a altura de um elemento.",
      verdadeiro: true,
    },
    {
      texto: "A propriedade text-align: center é usada para centralizar um elemento.",
      verdadeiro: true,
    },
    {
      texto: "A tag <div/> escrito correto?",
      verdadeiro: false,
    },
    {
      texto: "CSS define o banco de dados do site",
      verdadeiro: false,
    },
    // ... outras perguntas
  ];
  
let indicePerguntaAtual = 0;
let acertos = 0;

function mostrarPergunta() {
  const perguntaAtual = perguntas[indicePerguntaAtual];
  document.getElementById("pergunta").textContent = perguntaAtual.texto;

  // Atualize o contador de perguntas
  const totalPerguntas = perguntas.length;
  document.getElementById("contador-perguntas").textContent = `Pergunta ${indicePerguntaAtual + 1} de ${totalPerguntas}`;
}

function verificarResposta(resposta) {
  const perguntaAtual = perguntas[indicePerguntaAtual];
  if (resposta === perguntaAtual.verdadeiro) {
    acertos++;
    atualizarBarraProgresso();
  }

  indicePerguntaAtual++;
  if (indicePerguntaAtual < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

function atualizarBarraProgresso() {
  const porcentagem = (acertos / perguntas.length) * 100;
  document.getElementById("barra").style.width = `${porcentagem}%`;

  // Define o gradiente de acordo com a porcentagem
  let corGradiente = ""; // "corGradiente" significa "cor gradiente" em português
  if (porcentagem >= 80) {
    corGradiente = "linear-gradient(to right, green, yellowgreen)";
  } else if (porcentagem >= 50) {
    corGradiente = "linear-gradient(to right, yellow, orange)";
  } else {
    corGradiente = "linear-gradient(to right, red, darkred)";
  }

  document.getElementById("barra").style.backgroundImage = corGradiente;
}

function mostrarResultado() {
  const mensagemResultado = `Você acertou ${acertos} de ${perguntas.length} perguntas.`;
  alert(mensagemResultado);
}

mostrarPergunta();

document.getElementById("verdadeiro").addEventListener("click", () => { // função anonima
  // Passar funções como argumentos para outras funções
  verificarResposta(true);
});

document.getElementById("falso").addEventListener("click", () => {
  verificarResposta(false);
});