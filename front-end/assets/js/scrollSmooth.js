// inicializa Lenis
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Função easing padrão
    smooth: true,
    direction: 'vertical',
    smoothTouch: false,
    touchMultiplier: 2,
});

// sincroniza ScrollTrigger com Lenis
// ScrollTrigger lê o scroll do Lenis
lenis.on('scroll', ScrollTrigger.update);

// Lenis é chamado no loop do GSAP (ticker)
gsap.ticker.add((time) => {
    // a função raf do Lenis precisa de tempo em milissegundos
    lenis.raf(time * 1000);
});

// desativa o lag smoothing do GSAP (opcional, mas recomendado para Lenis)
gsap.ticker.lagSmoothing(0);