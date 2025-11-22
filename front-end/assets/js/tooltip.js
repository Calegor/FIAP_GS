document.addEventListener("DOMContentLoaded", () => {
  // seletor para os elementos que disparam o tooltip
  const TERM_SELECTOR = ".glossario-termo, .glossario-white, .glossario-colorful";

  // seleciona todos os elementos do glossário
  const glossaryTerms = document.querySelectorAll(TERM_SELECTOR);
  const tooltipBox = document.getElementById("tooltip-box");

  // verifica se os elementos essenciais existem. se não, encerra a execução
  if (!tooltipBox || glossaryTerms.length === 0) return;

  // mapeamento de classes dos termos para classes de estilo do tooltip
  const styleMap = {
    "glossario-white": "tooltip-style-light", // fundo escuro -> texto branco/tooltip claro
    "glossario-termo": "tooltip-style-dark", // fundo claro -> texto escuro/tooltip escuro
    // adicione mais mapeamentos para .glossario-colorful se necessário
  };

  glossaryTerms.forEach((term) => {
    const definition = term.getAttribute("data-tooltip");

    // função para lidar com o evento mouseover
    const handleMouseOver = () => {
      const rect = term.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;

      // 1. remove classes anteriores do tooltip para garantir o estilo limpo
      tooltipBox.classList.remove("tooltip-style-dark", "tooltip-style-light");

      // 2. aplica o estilo correspondente baseado na classe do termo
      for (const termClass in styleMap) {
        if (term.classList.contains(termClass)) {
          tooltipBox.classList.add(styleMap[termClass]);
          break; // sai do loop após encontrar a classe
        }
      }

      // 3. define conteúdo e mostra o tooltip
      tooltipBox.innerHTML = definition;
      tooltipBox.style.display = "block";

      // 4. calcula a posição: top (acima do termo) e left (centralizado)
      // mostrar antes para o offSetHeight/offsetWidth ser calculado corretamente
      const topPosition = rect.top + scrollY - tooltipBox.offsetHeight - 10;
      const leftPosition =
        rect.left + rect.width / 2 - tooltipBox.offsetWidth / 2 + window.scrollX;

      tooltipBox.style.top = `${topPosition}px`;
      tooltipBox.style.left = `${leftPosition}px`;

      // 5. correções de responsividade para garantir que não saia da tela
      // correção lateral esquerda
      if (leftPosition < 10) {
        tooltipBox.style.left = "10px";
      }
      // correção lateral direita
      const rightEdge = leftPosition + tooltipBox.offsetWidth;
      if (rightEdge > window.innerWidth - 10) {
        tooltipBox.style.left = `${
          window.innerWidth - tooltipBox.offsetWidth - 10
        }px`;
      }
    };

    // função para lidar com o evento mouseout
    const handleMouseOut = () => {
      // oculta o tooltip
      tooltipBox.style.display = "none";
      // limpa as classes de estilo
      tooltipBox.classList.remove("tooltip-style-dark", "tooltip-style-light");
    };

    // atribui os listeners
    term.addEventListener("mouseover", handleMouseOver);
    term.addEventListener("mouseout", handleMouseOut);
  });
});