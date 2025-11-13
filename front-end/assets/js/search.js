const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn"),
  dropdownLinks = document.querySelectorAll(".dropdown-link"),
  searchCloseBtn = document.querySelector(".search-box .search-close-btn");

/* ---------------------------------------------------- */
/* LÓGICA DA BUSCA */
/* ---------------------------------------------------- */

// 1. ABRIR BUSCA (acionado pelo ícone de lupa principal)
searchIcon.addEventListener("click", () => {
  // adiciona a classe para expandir e mostrar a barra de busca
  nav.classList.add("openSearch");

  // garante que o menu principal esteja fechado
  nav.classList.remove("openNav");

  // foco no campo de texto para usabilidade imediata
  document.querySelector(".search-box input").focus();
});

// 2. FECHAR BUSCA (acionado pelo ícone 'X' dentro da barra)
searchCloseBtn.addEventListener("click", () => {
  // remove a classe para esconder a barra
  nav.classList.remove("openSearch");
});

/* ---------------------------------------------------- */
/* LÓGICA DO MENU RESPONSIVO (SANDUÍCHE) */
/* ---------------------------------------------------- */

navOpenBtn.addEventListener("click", () => {
  // abre o menu lateral
  nav.classList.add("openNav");

  // garante que a busca esteja fechada
  nav.classList.remove("openSearch");
});

navCloseBtn.addEventListener("click", () => {
  // fecha o menu lateral
  nav.classList.remove("openNav");
});

/* ---------------------------------------------------- */
/* LÓGICA DO DROPDOWN RESPONSIVO (CLIQUE) */
/* ---------------------------------------------------- */

dropdownLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // apenas aplica a lógica se o menu lateral estiver aberto (mobile)
    if (nav.classList.contains("openNav")) {
      e.preventDefault();
      const parentLi = link.closest(".dropdown");
      parentLi.classList.toggle("active");
    }
  });
});

    document.addEventListener('DOMContentLoaded', function() {
        // 1. obtém a URL atual e remove a parte inicial do caminho (ex: /index.html)
        // isso garante que a comparação seja feita apenas com o nome do arquivo.
        const urlAtual = window.location.pathname.split('/').pop();

        // 2. seleciona todos os links de navegação dentro da sua estrutura (.nav-links li a)
        const links = document.querySelectorAll('.nav-links li a');

        links.forEach(link => {
            // 3. obtém o nome do arquivo do atributo href do link (ex: index.html)
            const linkHref = link.getAttribute('href').split('/').pop();

            // 4. verifica se a URL atual corresponde ao href do link.
            // a verificação `urlAtual === ''` é para o caso de o link ser `index.html` 
            // e a URL ser apenas a raiz do site (`/`).
            if (urlAtual === linkHref || (urlAtual === '' && linkHref === 'index.html')) {
                // 5. aplica a classe de realce se houver correspondência
                link.classList.add('ativo');
            }
        });
    });