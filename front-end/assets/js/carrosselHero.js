        let slideIndex = 1;
        let slideTimeout;

        function showSlides(n) {
            const slides = document.querySelectorAll('.slide');
            const newIndex = n === undefined ? slideIndex + 1 : n; // troca automática ou manual
            
            // limpa o timer anterior para evitar trocas duplas
            clearTimeout(slideTimeout);

            // reseta a classe 'active'
            slides.forEach(slide => {
                slide.classList.remove('active');
            });
            
            // calcula o índice (roda o carrossel)
            if (newIndex > slides.length) { slideIndex = 1; }
            else if (newIndex < 1) { slideIndex = slides.length; }
            else { slideIndex = newIndex; }
            
            // ativa o novo slide
            if (slides[slideIndex - 1]) {
                slides[slideIndex - 1].classList.add('active');
            }
            
            // configura o timer para a próxima troca automática
            slideTimeout = setTimeout(() => showSlides(slideIndex + 1), 10000); 
        }

        // função para controle manual (ligada aos botões)
        function plusSlides(n) {
            showSlides(slideIndex + n);
        }
        
        // inicia o Carrossel (mostrando o primeiro slide e iniciando o timer)
        const initialSlides = document.querySelectorAll('.slide');
        if (initialSlides.length > 0) {
            showSlides(slideIndex);
        }