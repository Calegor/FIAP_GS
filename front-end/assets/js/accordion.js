  document.addEventListener('DOMContentLoaded', () => {
            // ... (Mantenha as lógicas anteriores do Carrossel e Tooltip aqui) ...
            
            // Seleciona a classe específica: .about-abrir
            const aboutItens = document.querySelectorAll('.faq-lista .about-abrir');

            aboutItens.forEach(item => {
                item.addEventListener('click', (e) => {
                    // Previne que o clique ative o acordeão se o clique foi feito dentro de um link (se houvesse)
                    // e.preventDefault(); 
                    
                    const isCurrentlyActive = item.classList.contains('active');

                    // 1. FECHA todos os outros itens (Comportamento Sanfona)
                    aboutItens.forEach(otherItem => {
                        if (otherItem.classList.contains('active')) {
                            otherItem.classList.remove('active');
                            // O CSS faz a seta e o fundo voltarem ao normal
                        }
                    });

                    // 2. ABRE o item clicado (só se ele não estava ativo)
                    if (!isCurrentlyActive) {
                        item.classList.add('active');
                        // O CSS adiciona o max-height e a rotação da seta
                    }
                });
            });
        });
        
        /* === Fim Lógica ABOUT-ABRIR === */