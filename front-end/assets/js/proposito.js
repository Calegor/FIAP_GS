const mapeamentoProposito = {
  inclusao: [
    {
      nome: "Analista de RH",
      motivo:
        "Focado em recrutamento ético e inclusivo e mitigação de desigualdades.",
    },
    {
      nome: "Gerente de Loja",
      motivo:
        "Garantindo inclusão produtiva para populações vulneráveis na força de trabalho.",
    },
    {
      nome: "Advogado",
      motivo:
        "Trabalhando na regulação e proteção social para combater a exclusão.",
    },
  ],
  saude: [
    {
      nome: "Enfermeiro",
      motivo:
        "Uso de telemedicina e monitoramento de saúde e bem-estar no trabalho.",
    },
    {
      nome: "Analista de RH",
      motivo:
        "Criação de sistemas de saúde mental corporativa e gestão de ambientes híbridos saudáveis.",
    },
  ],
  verde: [
    {
      nome: "Motorista / Logística",
      motivo:
        "Adaptação a modelos de trabalho baseados em impacto social e sustentabilidade.",
    },
    {
      nome: "Operador de Máquinas",
      motivo:
        "Requalificação para transições verdes e otimização de recursos (ODS 8).",
    },
  ],
  educacao: [
    {
      nome: "Professor / Educador",
      motivo:
        "Design de experiências imersivas e personalização de jornadas de aprendizagem (ODS 4).",
    },
    {
      nome: "Jornalista",
      motivo: "Comunicação e narrativa em novas plataformas de aprendizagem.",
    },
  ],
  regulacao: [
    {
      nome: "Advogado",
      motivo:
        "Especializado na regulação de IA e fortalecimento da proteção social.",
    },
    {
      nome: "Contador",
      motivo:
        "Especializado em ética e transparência na análise de dados financeiros e fiscais.",
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
        htmlResultado += `<h3>Carreiras Alinhadas ao Propósito de ${
            selecao.options[selecao.selectedIndex].text
        }:</h3>`;

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