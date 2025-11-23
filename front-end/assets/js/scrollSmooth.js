// ====================================================
// 1. INICIALIZAÇÃO DO LENIS E SINCRONIZAÇÃO COM GSAP
// ====================================================

// inicializa Lenis
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Função easing padrão
  smooth: true,
  direction: "vertical",
  smoothTouch: false,
  touchMultiplier: 2,
});

// sincroniza ScrollTrigger com Lenis (ScrollTrigger lê o scroll do Lenis)
lenis.on("scroll", ScrollTrigger.update);

// lenis é chamado no loop do GSAP (ticker)
gsap.ticker.add((time) => {
  // a função raf do Lenis precisa de tempo em milissegundos
  lenis.raf(time * 1000);
});

// desativa o lag smoothing do GSAP (opcional, mas recomendado para Lenis)
gsap.ticker.lagSmoothing(0);

// ====================================================
// 2. SCROLL SUAVE PARA ÂNCORAS
// ====================================================

// define a altura do seu header fixo (.nav tem 100px)
const HEADER_HEIGHT = 100;

// seleciona todos os links cujo 'href' começa com '#'
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  // adiciona um escutador de evento de clique a cada âncora
  anchor.addEventListener("click", (event) => {
    // obtém o ID da seção de destino
    const targetId = event.currentTarget.getAttribute("href");

    // verifica se é uma âncora interna e se o lenis está disponível
    if (targetId && targetId.startsWith("#") && lenis) {
      // previne o comportamento padrão do navegador (o salto 'duro')
      event.preventDefault();

      // usa lenis.scrollTo para animar o scroll até o destino
      lenis.scrollTo(targetId, {
        // configurações da animação de scroll:
        duration: 3, // duração da animação em segundos
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // mantém o easing do lenis

        // o offset negativo compensa o cabeçalho fixo
        offset: -HEADER_HEIGHT,
      });
    }
  });
});
