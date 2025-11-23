<div align="center">
  
# 💻 Plataforma ABRIR: O Caminho para a Requalificação Profissional

[![Status do Projeto](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow.svg)](#) 🔗 **Veja o repositório do projeto:** [Repositório Plataforma ABRIR](https://github.com/Calegor/FIAP_GS/tree/main/front-end)
  
<br>

<p align="center">
  <img src="assets-readme-main/abrir_logosolo.png" alt="Header da Interface da Plataforma." width="40%">
</p>
  
</div>

---

## 💡 Sobre o Projeto
O futuro do trabalho já começou. Avanços rápidos em Inteligência Artificial (IA), automação e modelos de negócio digitais estão transformando milhões de profissões, criando novas oportunidades e gerando uma urgência de requalificação (reskilling).
O grande desafio, conforme apontado pela ONU e OIT, é garantir que essa transição seja justa e inclusiva, impedindo que populações vulneráveis (jovens, mulheres, menor escolaridade) sejam deixadas para trás.
<br><br>
A Plataforma ABRIR surge como um Hub de Conhecimento e Ferramentas ativas, focado em:

* ✅ Transformar a ameaça da automação em **oportunidades concretas**.
* 🗺️ Oferecer um guia personalizado (Mapa de Requalificação) para a jornada de **aprendizado contínuo**.
* 🤝 Promover a inclusão através de **acessibilidade** e **comunicação** simples para todas as pessoas.

---

## O Significado do Nome ABRIR
O nome **ABRIR** é um acrônimo poderoso que define os 5 pilares estratégicos da plataforma:

| Letra | Significado | Aplicação no Projeto |
| :--- | :---: | :--- |
| **A** | Acessibilidade | Garantia de informação clara e universal (Glossário Interativo) para o público em geral. |
| **B** | Base | Fornecimento de contexto, dados e urgência (Simulador de Risco) para motivar a ação. |
| **R** | Reskilling | Ferramenta central de mapeamento de competências para a requalificação (Mapa de Requalificação). |
| **I** | Inovação | Uso de IA como parceira e exploração de ambientes híbridos e novas formas de aprendizagem. |
| **R** | Renda | Foco na garantia de proteção social, direitos e oportunidades justas para o novo mercado de trabalho. |

---

## ✨ Principais Funcionalidades
A Plataforma ABRIR oferece um conjunto robusto de ferramentas ativas para guiar a requalificação e garantir a inclusão no futuro do trabalho.

| Ferramenta | Descrição |
| :--- | :--- |
| **Mapa de Requalificação** | Mapeia sua profissão atual para as novas habilidades técnicas e humanas exigidas pelo mercado (Ex: IA, Soft Skills), fornecendo um caminho claro de aprendizado. |
| **Simulador de Transfomação** | Avalia o potencial de transformação de sua área, agindo como um gatilho humanizado para a ação, sem gerar pânico. |
| **Filtro de Carreira por Propósito** | Permite buscar novas áreas de atuação alinhadas à Sustentabilidade e Inclusão (ODS), conectando a carreira a valores sociais. |
| **Glossário Interativo** | Torna termos técnicos (IoT, Gig Economy, Reskilling) imediatamente compreensíveis a todos, garantindo que ninguém seja excluído por falta de conhecimento. |
| **Política de Proteção Social** | Seção dedicada a direitos e à necessidade de regulamentação da Gig Economy, garantindo o pilar de Trabalho Decente e segurança econômica. |

---

## O Diferencial: Hub de Conexão Universal para o Reskilling
Nossa principal inovação é a **integração** de tecnologia e inclusão, tornando o reskilling acessível a todos, sem exceção.

* **Conexão Universal (Pilar A - Acessibilidade):** Somos um hub que conecta pessoas de todos os níveis – de profissionais experientes a populações em situação de vulnerabilidade – para transmitir o conhecimento de reskilling de forma clara e inclusiva.
* **Aprendizado Híbrido e Moderno (Pilar I - Inovação):** Utilizamos as ferramentas mais modernas (IA como parceira, Filtro de Carreira, Mapa de Reskilling, ambientes imersivos) para personalizar a jornada, tornando o aprendizado eficiente e atraente.
* **Foco Estratégico e Ético (Pilares R - Reskilling/Renda):** Ajudamos o usuário a focar nas habilidades que o mercado exige, garantindo que o investimento de tempo resulte em inclusão produtiva e segurança econômica no futuro do trabalho.
---

## 🛠️ Interface do Usuário (Frontend)
Este repositório contém o código-fonte da interface do usuário (o site), desenvolvido para ser rápido, responsivo e acessível (Pilar A - Acessibilidade). Ele gerencia todas as interações visuais, como o Carrossel, o Mapa de Requalificação e o Glossário Interativo.

* **Linguagem:** JavaScript (Interação, lógica do site).
* **Corpo:** HTML5 Semântico (Estrutura do site e acessibilidade).
* **Estilização:** CSS3 (Responsividade, Layout Grid/Flexbox e Design).

## 🛠️ Arquitetura (Backend)
É onde roda a parte lógica do projeto, realizando a consulta profissional para o cliente em necessidade de requalificação.

* **Linguagem:** **Python** (Criação do sistema)
* **Linguagem:** **Java** (Modelagem)

## 🤖 Inteligência Artificial & Chatbot
Fluxos de conversação e a lógica de integração do assistente virtual. Protótipo desenvolvido para oferecer uma experiência multimodal (texto e voz) e personalizada, refletindo a missão de inovação e garantindo que o usuário possa navegar fluidamente entre diagnósticos de carreira e aprendizado de conceitos.

* **Cérebro:** IBM Watson Assistant (Processamento de Linguagem Natural, Gestão de Diálogo com *Slots*, *Digressions* e Múltiplas Respostas Condicionadas).
* **Orquestração:** Node-RED (Integração de APIs, gerenciamento de sessão/contexto do usuário e lógica de roteamento de mensagens).
* **Serviços Cognitivos:** IBM Watson Speech-to-Text & Text-to-Speech (Conversão de áudio para texto e vice-versa, garantindo acessibilidade e interação natural).
* **Canal:** Telegram Bot API (Interface de comunicação direta com o usuário).

> **Nota:** O arquivo `ABRIR-dialog.json` contém a estrutura de treinamento do Watson (Intenções/Entidades) e o `ABRIR-flow-nodered.json` contém o fluxo de integração.

## 🎲 Database
O modelo relacional foi estruturado para viabilizar o "Motor de Match", cruzando as habilidades que o usuário possui com as exigências do mercado, permitindo o diagnóstico preciso de gaps profissionais.

* **SGBD:** Oracle Database (Modelagem Relacional).
* **Arquitetura:** Modelo normalizado com tabelas associativas para resolver cardinalidades N:N (Muitos-para-Muitos), garantindo integridade e performance.
* **Padrões de Projeto:**
    * **Nomenclatura Internacional:** Todo o esquema (tabelas e atributos) está em inglês para padronização global e compatibilidade.
    * **Convenção de Prefixos:** Uso estrito de prefixos como `T_A_` (Tabela Aplicação), `nm_` (Nome) e `ds_` (Descrição) para rápida identificação de objetos e atributos.

## 💼 Software Engineering & Business Model
Esta seção documenta a estruturação de negócios e a modelagem de requisitos da **Plataforma ABRIR**. O foco é garantir que a solução técnica esteja alinhada com a proposta de valor de "Transição Justa" e com as necessidades reais dos usuários vulneráveis à automação.

### 📊 Estratégia de Negócio
A solução foi desenhada não apenas como um portal de vagas, mas como um **Hub de Adaptação Profissional** sustentado por 5 pilares (A.B.R.I.R): Acessibilidade, Base, Reskilling, Inovação e Renda.

* **Proposta de Valor:** Atuar como um ecossistema de inclusão que desmistifica a IA e democratiza a linguagem tecnológica para trabalhadores operacionais.
* **Segmentos de Clientes:** Profissionais em risco de automação (ex: motoristas, telemarketing), populações vulneráveis e trabalhadores da Gig Economy.
* **Fontes de Receita:** Modelo B2B (Recrutamento Ético), Parcerias Educacionais (Comissões) e Freemium.

---

### 👤 User Experience (UX)

Para guiar o desenvolvimento, mapeamos a persona do **"Profissional em Transição"**.

* **Dores Principais:** Medo da obsolescência ("Minha profissão vai acabar?"), frustração com termos técnicos ou em inglês (Soft Skills, Upskilling) e sensação de exclusão digital.
* **Ganhos Esperados:** Linguagem clara, diagnóstico rápido de risco e orientação simples para continuar inserido e crescendo no mercado de trabalho.
  
---

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/juliarichesky/" target="_blank" title="LinkedIn Julia Guimarães">
        <img src="assets-readme-main/julia-guimaraes.png" width="200" height="300" style="object-fit: cover; border-radius: 50%;" alt="Julia Guimarães"/><br>
        <sub>
          <b>LinkedIn Julia Guimarães</b>
        </sub>
      </a>
      <br>
      <a href="https://github.com/juliarichesky" target="_blank" title="GitHub Julia Guimarães">
        <sub>
          <b>GitHub Julia Guimarães</b>
        </sub>
      </a>
      <br>
      <p>RM: 568275</p>
      <p>Turma: 1TDSPA</p>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/juspanopoulos/ target="_blank" title="LinkedIn Julia Spanopoulos">
        <img src="assets-readme-main/julia-spanopoulos.png" width="200" height="300" style="object-fit: cover; border-radius: 50%;" alt="Julia Spanopoulos"/><br>
        <sub>
          <b>LinkedIn Julia Spanopoulos</b>
        </sub>
      </a>
      <br>
      <a href="https://github.com/juspanopoulos" target="_blank" title="GitHub Julia Spanopoulos">
        <sub>
          <b>GitHub Julia Spanopoulos</b>
        </sub>
      </a>
      <br>
      <p>RM: 566754</p>
      <p>Turma: 1TDSPA</p>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/thiago-gramorelli-lima-070097185/" target="_blank" title="LinkedIn Thiago Gramorelli">
        <img src="assets-readme-main/thiago-lima.png" width="200" height="300" style="object-fit: cover; border-radius: 50%;" alt="Thiago Gramorelli"/><br>
        <sub>
          <b>LinkedIn Thiago Gramorelli</b>
        </sub>
      </a>
      <br>
      <a href="https://github.com/Calegor" target="_blank" title="GitHub Thiago Gramorelli">
        <sub>
          <b>GitHub Thiago Gramorelli</b>
        </sub>
      </a>
      <br>
      <p>RM: 567630</p>
      <p>Turma: 1TDSPA</p>
    </td>
  </tr>
</table>
