const mapeamentoProposito = {
  inclusao: [
    {
      nome: "Analista de RH",
      motivo:
        "Foco em recrutar todos de forma igual e acabar com as diferenças no trabalho.",
    },
    {
      nome: "Gerente de Loja",
      motivo:
        "Cuidando para que pessoas em situações mais difíceis tenham um bom emprego e se desenvolvam na nossa equipe.",
    },
    {
      nome: "Advogado",
      motivo:
        "Usando a lei para garantir a proteção das pessoas e lutar contra quem fica de fora.",
    },
  ],
  saude: [
    {
      nome: "Enfermeiro",
      motivo:
        "Usando a tecnologia (como consultas online) para monitorar a saúde e o bem-estar de quem está no trabalho.",
    },
    {
      nome: "Analista de RH",
      motivo:
        "Criando programas para cuidar da saúde mental no trabalho e organizando ambientes híbridos que fazem bem para todos.",
    },
  ],
  verde: [
    {
      nome: "Motorista / Logística",
      motivo:
        "Adaptando o jeito de trabalhar para ter um impacto positivo na sociedade e no planeta.",
    },
    {
      nome: "Operador de Máquinas",
      motivo:
        "Aprendendo novas formas de usar máquinas para economizar recursos e ajudar na transição para um mundo mais sustentável.",
    },
  ],
  educacao: [
    {
      nome: "Professor / Educador",
      motivo:
        "Criando aulas super imersivas e personalizando o aprendizado, para que cada aluno siga seu próprio ritmo e interesse.",
    },
    {
      nome: "Jornalista",
      motivo: "Usando a comunicação e a escrita para criar conteúdos de aprendizado em novas plataformas digitais.",
    },
  ],
  regulacao: [
    {
      nome: "Advogado",
      motivo:
        "Focado em criar regras para a inteligência artificial e garantir que a proteção social seja sempre forte.",
    },
    {
      nome: "Contador",
      motivo:
        "Trabalhando com ética e clareza para analisar dados de dinheiro e impostos, garantindo que tudo seja honesto.",
    },
  ],
};

function filtrarProposito() {
    const selecao = document.getElementById("selecao-proposito");
    const resultadoDiv = document.getElementById("resultado-proposito");
    const chamadaMapaDiv = document.getElementById("chamada-mapa"); 

    const propositocopia = selecao.value;
    let htmlResultado = ""; // declaração única mantida

    // esconde tudo no início (reset)
    resultadoDiv.style.display = "none";
    resultadoDiv.innerHTML = "";
    chamadaMapaDiv.style.display = "none";

    // verifica se algo foi selecionado (early exit)
    if (!propositocopia) {
        resultadoDiv.innerHTML =
            "Por favor, selecione um foco de impacto para filtrar.";
        resultadoDiv.style.display = "block";
        return;
    }

    const carreiras = mapeamentoProposito[propositocopia];

    // processa os resultados
    if (carreiras && carreiras.length > 0) {
        // gera o título
        htmlResultado += `<h3>Carreiras alinhadas ao propósito de: ${
            selecao.options[selecao.selectedIndex].text
        }</h3>`;

        // gera os itens
        carreiras.forEach((c) => {
            htmlResultado += `
                <div class="proposito-item">
                    <strong>${c.nome}</strong>
                    <p>${c.motivo}</p>
                </div>
            `;
        });
        
        // injeta o HTML e mostra o resultado
        resultadoDiv.innerHTML = htmlResultado;
        resultadoDiv.style.display = "block";

        // mostra o botão de chamada se houver resultados
        chamadaMapaDiv.style.display = "block";

    } else {
        // não há carreiras (mostra a mensagem de "não encontrado")
        htmlResultado =
            "<p>Não encontramos carreiras alinhadas a este propósito ainda. O futuro está sendo construído!</p>";
        resultadoDiv.innerHTML = htmlResultado;
        resultadoDiv.style.display = "block";
        // não mostra a chamadaMapaDiv
    }
}