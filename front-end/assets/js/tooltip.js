/* === Lógica do Tooltip (Glossário Interativo) via JS - VERSÃO POSICIONAL MÚLTIPLA === */

document.addEventListener("DOMContentLoaded", () => {
  // CORREÇÃO: Combina os seletores de classe usando vírgula
  // Seleciona todos os elementos com as classes '.glossario-termo' OU '.glossario-white'
  const termos = document.querySelectorAll(
    ".glossario-termo, .glossario-white, .glossario-colorful"
  );
  const tooltipBox = document.getElementById("tooltip-box");

  // Adiciona a verificação para garantir que o tooltipBox exista
  if (!tooltipBox || termos.length === 0) return;

  termos.forEach((termo) => {
    const definicao = termo.getAttribute("data-tooltip");

    // Evento ao passar o mouse (mouseover)
    termo.addEventListener("mouseover", () => {
      const rect = termo.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;

      // 1. --- Lógica de Estilo Dinâmico ---
      // Remove classes anteriores para garantir um estilo limpo
      tooltipBox.classList.remove("tooltip-style-dark", "tooltip-style-light");

      // Verifica a classe presente no termo clicado para aplicar o estilo correspondente
      if (termo.classList.contains("glossario-white")) {
        // Se o texto está sobre um fundo ESCURO, o tooltip deve ter fundo CLARO (light)
        tooltipBox.classList.add("tooltip-style-light");
      } else if (termo.classList.contains("glossario-termo")) {
        // Se o texto está sobre um fundo CLARO, o tooltip deve ter fundo ESCURO (dark)
        tooltipBox.classList.add("tooltip-style-dark");
      }
      // ------------------------------------

      tooltipBox.innerHTML = definicao;
      tooltipBox.style.display = "block";

      // 2. Calcula e Aplica Posição
      // *Esta é a ordem CRÍTICA: Mostrar ANTES de calcular a altura (offsetHeight)*

      const topPosition = rect.top + scrollY - tooltipBox.offsetHeight - 10;
      const leftPosition =
        rect.left +
        rect.width / 2 -
        tooltipBox.offsetWidth / 2 +
        window.scrollX;

      tooltipBox.style.top = `${topPosition}px`;
      tooltipBox.style.left = `${leftPosition}px`;

      // Correções de Responsividade
      if (leftPosition < 10) {
        tooltipBox.style.left = "10px";
      }
      if (leftPosition + tooltipBox.offsetWidth > window.innerWidth - 10) {
        tooltipBox.style.left = `${
          window.innerWidth - tooltipBox.offsetWidth - 10
        }px`;
      }
    });

    // Evento ao tirar o mouse (mouseout)
    termo.addEventListener("mouseout", () => {
      tooltipBox.style.display = "none";
      // Limpa as classes de estilo ao fechar
      tooltipBox.classList.remove("tooltip-style-dark", "tooltip-style-light");
    });
  });
});
