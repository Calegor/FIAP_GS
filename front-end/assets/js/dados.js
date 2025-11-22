// mapeamento de risco (chave: profissão, valor: risco de 0 a 100)
// usado no simulador de potencial de transformação
const mapeamentoRisco = {
    "escriturario": 85,
    "digitador": 95,
    "telemarketing": 90,
    "caixa": 75,
    "contador": 60,
    "motorista": 55,
    "analista de rh": 40,
    "professor": 30,
    "enfermeiro": 20,
    "desenvolvedor": 10,
    "designer": 15,
};

// mapeamento de profissões para habilidades do futuro (com glossário)
// usado no mapa de requalificação
const mapeamento = {
    "analista de rh": [
        { nome: "Análise de Dados (People Analytics)", descricao: "Essencial para prever tendências, garantir recrutamento ético e apoiar decisões.", link: "#" },
        { nome: "Gestão Híbrida de Equipes", descricao: "Adapte-se aos novos padrões de flexibilidade, que tendem a se consolidar.", link: "#" },
        { nome: "Empatia e Colaboração", descricao: "Competências humanas valorizadas para tornar o mundo mais inclusivo e justo.", link: "#" }
    ],
    "atendente comercial": [
        { nome: "IA como Parceira (Bots)", descricao: "Uso de agentes de IA para otimizar o dia a dia, aumentando a capacidade humana.", link: "#" },
        { nome: "Comunicação em Ambientes Imersivos", descricao: "Prepare-se para ambientes de trabalho em Realidade Virtual/Aumentada.", link: "#" },
        { nome: "Reskilling e Adaptação", descricao: "A requalificação contínua é central para se manter relevante no mercado.", link: "#" }
    ],
    "motorista": [
        { nome: "Logística Automatizada e Análise de Risco", descricao: "Entender o impacto da robótica e automação nos transportes.", link: "#" },
        { nome: "Economia Verde e Sustentabilidade", descricao: "Novos modelos de trabalho alinhados aos ODS.", link: "#" },
        { nome: "Comunidades de Aprendizagem Colaborativa", descricao: "Aproveite redes de colaboração para formação e upskilling." , link: "#" }
    ],
    "professor": [
        { nome: `Plataformas de Aprendizagem Adaptativa`, descricao: `A tecnologia pode personalizar <span class="glossario-termo" data-tooltip="Caminhos de estudo individualizados, ajustados ao ritmo e nível de conhecimento de cada aluno.">jornadas de aprendizagem</span>, criando experiências imersivas.`, link: "#" },
        { nome: `Design de Experiências Imersivas`, descricao: `Uso de <span class="glossario-termo" data-tooltip="Ambientes virtuais ou de realidade aumentada que simulam cenários reais para treinamento e colaboração.">ambientes híbridos e imersivos</span> para novas formas de aprendizagem.`, link: "#" },
        { nome: `Criatividade e Colaboração`, descricao: `Desenvolver novas formas de <span class="glossario-termo" data-tooltip="Garantir que todos os grupos sociais, especialmente os mais vulneráveis, tenham acesso a oportunidades de trabalho e renda.">inclusão produtiva</span> e comunidades de aprendizagem colaborativa e global.`, link: "#" }
    ],
    "contador": [
        { nome: `Automação Robótica de Processos (<span class="glossario-termo" data-tooltip="Robotic Process Automation: Software que imita ações humanas para automatizar tarefas repetitivas e rotineiras.">RPA</span>)`, descricao: `Automatização de tarefas repetitivas, permitindo focar em análise estratégica e consultoria.`, link: "#" },
        { nome: `Análise Preditiva de Dados (<span class="glossario-termo" data-tooltip="Grandes volumes de dados que exigem ferramentas avançadas para serem processados e transformados em insights.">Big Data</span>)`, descricao: `Transformar grandes volumes de dados em insights para tomada de decisões.`, link: "#" },
        { nome: `Pensamento Crítico e Ética`, descricao: `Aplicar julgamento humano onde a <span class="glossario-termo" data-tooltip="Inteligência Artificial: Sistemas que simulam a inteligência humana para realizar tarefas, como aprender e tomar decisões.">IA</span> não alcança, mantendo a credibilidade.`, link: "#" }
    ],
    "gerente de loja": [
        { nome: `Experiência de Cliente (<span class="glossario-termo" data-tooltip="Customer Experience: Conjunto de percepções e interações que um cliente tem com uma marca ou produto.">CX</span>) Digital`, descricao: `Adaptar o negócio para o modelo digital e gerenciar ambientes híbridos de venda.`, link: "#" },
        { nome: `Gestão de Ambientes Híbridos`, descricao: `Criar soluções que garantam <span class="glossario-termo" data-tooltip="Modelos que combinam trabalho remoto e presencial, exigindo flexibilidade e nova cultura organizacional.">ambientes flexíveis</span> e desenvolvimento contínuo em ambientes flexíveis.`, link: "#" },
        { nome: `Recrutamento Ético e Inclusivo`, descricao: `Garantir que a transição não exacerbe <span class="glossario-termo" data-tooltip="Diferenças e disparidades sociais, econômicas e de oportunidades entre grupos de pessoas.">desigualdades</span> na força de trabalho.`, link: "#" }
    ],
    "jornalista": [
        { nome: `Bots e Agentes de <span class="glossario-termo" data-tooltip="Inteligência Artificial: Sistemas que simulam a inteligência humana para realizar tarefas, como aprender e tomar decisões.">IA</span> para Triagem de Fatos`, descricao: `Uso de IA como parceira para otimizar a pesquisa e análise de grandes volumes de informações.`, link: "#" },
        { nome: `Narrativa em Ambientes Imersivos`, descricao: `Explorar novas mídias e <span class="glossario-termo" data-tooltip="Tecnologias como Realidade Virtual ou Aumentada que criam experiências de trabalho e comunicação simuladas.">ambientes imersivos</span> em realidade virtual ou aumentada.`, link: "#" },
        { nome: `Pensamento Crítico e Ética`, descricao: `Lidar com dilemas de dignidade e assegurar que as máquinas <span class="glossario-termo" data-tooltip="Tornar o trabalho humano mais eficiente e estratégico, delegando tarefas repetitivas à tecnologia.">aumentem a capacidade humana</span>.`, link: "#" }
    ],
    "operador de maquina": [
        { nome: `Manutenção Preditiva (<span class="glossario-termo" data-tooltip="Internet of Things: Redes de dispositivos físicos interconectados que coletam e trocam dados.">IoT</span>)`, descricao: `Uso de tecnologia e análise de dados para prever falhas e otimizar processos (automação e robótica).`, link: "#" },
        { nome: `Economia Verde e Sustentabilidade`, descricao: `Requalificação para <span class="glossario-termo" data-tooltip="Mudança de setores da economia para práticas que reduzem o impacto ambiental e promovem o uso eficiente de recursos.">transições verdes</span> e modelos de trabalho baseados em impacto social.`, link: "#" },
        { nome: `Reskilling e Adaptação Ágil`, descricao: `Adaptação constante a novas ferramentas e profissões que ainda não existem.`, link: "#" }
    ],
    "enfermeiro": [
        { nome: `Monitoramento de Bem-Estar e Saúde Mental`, descricao: `Ferramentas para monitoramento da saúde em ambientes de trabalho (<span class="glossario-termo" data-tooltip="Área de estudo que usa tecnologia e dados para melhorar a saúde, o bem-estar e o desempenho dos colaboradores.">saúde e bem-estar no trabalho</span>).`, link: "#" },
        { nome: `Telemedicina e Ambientes Imersivos`, descricao: `Uso de realidade virtual ou aumentada e plataformas de colaboração global para atendimento.`, link: "#" },
        { nome: `Empatia e Cuidado Humano`, descricao: `Competências que se tornam mais valorizadas, focando na dimensão humana do trabalho.`, link: "#" }
    ],
    "advogado": [
        { nome: `Regulação de <span class="glossario-termo" data-tooltip="Inteligência Artificial: Sistemas que simulam a inteligência humana para realizar tarefas, como aprender e tomar decisões.">IA</span> e Automação`, descricao: `Criação de instrumentos legais para coibir a exclusão e proteger o trabalhador frente à IA.`, link: "#" },
        { nome: `Fortalecimento da Proteção Social`, descricao: `Adaptação de redes de proteção social e <span class="glossario-termo" data-tooltip="Processo de modernização das leis de trabalho para se adequarem a novos modelos de emprego, como o trabalho por plataforma.">regulação trabalhista</span> aos novos modelos de emprego (ex.: trabalho por plataforma).`, link: "#" },
        { nome: `Análise de Dados Jurídicos e Ética`, descricao: `Análise de dados para prever tendências e garantir o uso ético das novas tecnologias.`, link: "#" }
    ]
};