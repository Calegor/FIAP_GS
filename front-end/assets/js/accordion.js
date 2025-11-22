  document.addEventListener('DOMContentLoaded', () => {
            
            // seleciona a classe específica: .about-abrir
            const aboutItens = document.querySelectorAll('.faq-lista .about-abrir');

            aboutItens.forEach(item => {
                item.addEventListener('click', (e) => {
                    // orevine que o clique ative o acordeão se o clique foi feito dentro de um link (se houvesse)
                    // e.preventDefault(); 
                    
                    const isCurrentlyActive = item.classList.contains('active');

                    // fecha todos os outros itens (comportamento sanfona)
                    aboutItens.forEach(otherItem => {
                        if (otherItem.classList.contains('active')) {
                            otherItem.classList.remove('active');
                            // o css faz a seta e o fundo voltarem ao normal
                        }
                    });

                    // abre o item clicado (só se ele não estava ativo)
                    if (!isCurrentlyActive) {
                        item.classList.add('active');
                        // o css adiciona o max-height e a rotação da seta
                    }
                });
            });
        });