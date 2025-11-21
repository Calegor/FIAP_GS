from models.profissional import Profissional
from helpers.IOUtils import validar_input

class ConsultaService():
    def __init__(self):
        pass

                    
    def _selecao_profissao(self):
        print("E qual seria a sua profissão? (implementação limitada para os propósitos desse projeto)")
        while(True):
            print("""
                  1 - Escriturário
                  2 - Digitador
                  3 - Telemarketing
                  4 - Caixa
                  5 - Contador
                  6 - Motorista
                  7 - Analista de RH
                  8 - Professor
                  9 - Enfermeiro
                  10 - Desenvolvedor
                  11 - Designer
                  """)
            escolha = validar_input()
            match escolha:
                case 1:
                    _profissao = "escriturario"
                    _urgencia = 3
                case 2:
                    _profissao = "digitador"
                    _urgencia = 3
                case 3:
                    _profissao = "telemarketing"
                    _urgencia = 3
                case 4:
                    _profissao = "caixa"
                    _urgencia = 3
                case 5:
                    _profissao = "contador"
                    _urgencia = 2
                case 6:
                    _profissao = "motorista"
                    _urgencia = 2
                case 7:
                    _profissao = "analista_de_RH"
                    _urgencia = 2
                case 8:
                    _profissao = "professor"
                    _urgencia = 1
                case 9:
                    _profissao = "enfermeiro"
                    _urgencia = 1
                case 10:
                    _profissao = "desenvolvedor"
                    _urgencia = 1
                case 11:
                    _profissao = "designer"
                    _urgencia = 1
                case _:
                    print("Favor digitar uma opção válida.")
                    continue

            return [_profissao, _urgencia]
    
    #cadastro de profissional
    def adicionar_cadastro(self) -> Profissional:
        _nome = input("Me fale o seu nome: \n")
        _endereco = input("E o seu endereço? \n")
        _selecao = self._selecao_profissao()
        _profissao = _selecao[0]
        _urgencia = _selecao[1]
        _contato = input("E o endereço de contato? (pode inserir um email, telefone, caixa postal, etc..)\n")
    
        return Profissional(urgencia = _urgencia, nome=_nome,  endereco=_endereco, profissao=_profissao, contato=_contato)
    
    #pega qual a profissão do cliente e dá uma breve descrição da urgência do cliente para requalificação.
    def desc_urgencia(self, profissional: Profissional) -> str:
        if profissional.urgencia == 3:
            return "O seu risco atual é ALTO. O mercado na sua área está em aceleração total, e é hora de agir com urgência! Não espere a mudança acontecer: seja o protagonista da sua reinvenção. Use o Mapa de Requalificação como seu guia para se posicionar de forma proativa e garantir um futuro sólido antes que o mercado exija."
        elif profissional.urgencia == 2:
            return "É bom que você tenha ATENÇÃO. O sucesso na sua área é construído através da evolução constante. Adote a Inteligência Artificial não como substituta, mas como sua parceira de produtividade. Ao mesmo tempo, invista em suas soft skills (comunicação, criatividade, empatia) — elas serão seu diferencial inegociável para garantir a ascensão!"
        elif profissional.urgencia == 1:
            return "O seu risco atual é BAIXO. Sua base é sólida, o que te dá uma vantagem estratégica. Este é o momento ideal para aprofundar sua especialização e desenvolver liderança. Foque em ser uma referência para garantir sua ascensão em um futuro cada vez mais humano-centrado!"
        
    #pega qual a profissão do cliente e faz sugestões mais modernas - ChatGPT usado para os cargos
    def sugestao_cargo(self, profissional: Profissional) -> str:
        pr = profissional.profissao
        if pr == "escriturario":
            return """
            1 - Analista de Processos: Foca em mapear, otimizar e automatizar fluxos, exatamente o tipo de trabalho que cresce quando a papelada some.
            2 - Assistente Administrativo Digital: Atua com ERP, CRM, dashboards e ferramentas online e acaba substituindo o trabalho repetitivo por operação de sistemas, algo bem menos automatizável.
            3 - Analista de Suporte Operacional: Em vez de só registrar dados, resolve gargalos, monitora indicadores e auxilia na operação em tempo real, funções que exigem julgamento humano.
            """
        elif pr == "digitador":
            return """
            1 - Assistente de Operações Digitais: Em vez de só digitar, opera sistemas, valida informações e resolve inconsistências. Exige raciocínio, não só dedos rápidos.
            2 - Analista de Documentação e Compliance: Trabalha revisando, padronizando e garantindo conformidade de documentos, algo que requer interpretação humana e não mera transcrição.
            3 - Operador de Processos Digitais (RPA/ERP) Supervisiona automações, ajusta fluxos e faz intervenções quando o robô se enrola.
            """
        elif pr == "telemarketing":
            return"""
            1 - Customer Success (CS): Em vez de atender ligações em massa, acompanha clientes, resolve problemas complexos e ajuda na retenção. Difícil automatizar empatia + estratégia.
            2 - Analista de Suporte Técnico: Lida com questões que exigem diagnóstico real, não scripts engessados. Quanto mais técnico o problema, menos chance de um robozinho roubar o posto.
            3 - Inside Sales (Pré-Vendas/SDR): Trabalha com prospecção qualificada, usando CRM, análise de perfil e estratégia de abordagem. É telemarketing mas evoluído, com mais cérebro e menos repetição.
            """
    
        elif pr == "Caixa":
            return"""
            1 - Atendente de Experiência do Cliente (CX): Em vez de só passar produtos, resolve situações, orienta, fideliza e cria interação humana real. É o tipo de toque que nenhum totem eletrônico consegue imitar.
            2 - Operador de Backoffice Comercial: Trabalha conferindo divergências, validando informações, fechando relatórios e resolvendo problemas administrativos, tarefas que exigem julgamento humano, não só “bip”.
            3 - Assistente de Operações Logísticas: Lida com estoque, entrada/saída, organização e integração com sistemas. A automação ajuda, mas não substitui bem quem coordena tudo com olhos atentos e cérebro afiado.
            """
    
        elif pr == "Contador":
            return"""
            1 - Analista de Controladoria / FP&A: Em vez de só registrar e declarar, trabalha com planejamento financeiro, projeções, análise de custos e tomada de decisão estratégica. Muito menos automatizável, porque exige cérebro, visão e interpretação do caos.
            2 - Especialista em Compliance e Governança: Atua garantindo conformidade, integridade e políticas internas — não é só número, é julgamento, investigação e interpretação normativa. Máquinas ajudam, mas não “decidem”.
            3 - Consultor Fiscal / Tributário (com foco em planejamento e estruturação): Não faz tarefas repetitivas, e sim desenha estratégias tributárias, interpreta leis mutantes e orienta empresas. Algo que demanda expertise humana, faro e senso crítico — ingredientes que os robôs ainda não cozinham bem.
            """
        
        elif pr == "Motorista":
            return"""
            1 - Coordenador de Rotas / Logística: Em vez de só dirigir, planeja trajetos, gerencia frota, otimiza custos e prazos. Menos substituível porque decide, não só executa.
            2 - Operador de Transporte & Monitoramento (Tracking): Trabalha com sistemas de rastreamento, controle de cargas, segurança e status em tempo real. Fica “acima” da operação, cuidando de vários veículos ao mesmo tempo.
            3 - Especialista em Operações de Mobilidade (Apps/Plataformas): Atua em empresas de mobilidade (tipo apps), ajustando regras, analisando dados, suporte avançado a motoristas e clientes. Focado em tecnologia + estratégia, não em ficar preso ao volante.
            """
        
        elif pr == "analista_de_RH":
            return"""
            1 - Business Partner de RH (HRBP): Atua estrategicamente com líderes, ajudando nas decisões, cultura, performance e organização. Muito menos operacional.
            2 - Especialista em People Analytics: Usa análise de dados, métricas e dashboards para entender comportamento, turnover, performance e clima. IA ajuda, mas quem interpreta os números é o humano.
            3 - Especialista em Desenvolvimento Organizacional (DO): Foca em cultura, treinamentos, liderança, sucessão e transformação interna. É trabalho profundamente humano — impossível automatizar de verdade.
            """
        
        elif pr == "professor":
            return"""
            1 - Designer Instrucional / Especialista em Learning Experience (LXD): Em vez de só ensinar, cria experiências de aprendizagem, trilhas, cursos e metodologias. A IA ajuda, mas não cria didática estratégica sozinha.
            2 - Facilitador de Aprendizagem / Mentor Especializado: Não despeja conteúdo; guia, interpreta, adapta e orienta individualmente. Justamente o tipo de toque humano que nenhum algoritmo simula direito.
            3 - Produtor de Conteúdo Educacional Multimídia: Usa vídeo, áudio, atividades interativas e storytelling. Mais que ensinar: transforma conhecimento em algo envolvente — algo que a automação não domina tão cedo.
            """
        
        elif pr == "enfermeiro":
            return"""
            1 - Enfermeiro Especialista / Enfermeiro Clínico Avançado: Atua com procedimentos mais complexos, tomada de decisão clínica e protocolos avançados. A automação substitui tarefas simples, não esse nível de atuação.
            2 - Enfermeiro de Saúde Digital / Telemedicina: Trabalha com monitoramento remoto, plataformas digitais, triagem online e integração de dados. A demanda cresce rápido com a digitalização da saúde.
            3 - Gestor de Qualidade e Segurança do Paciente: Foca em protocolos, riscos, indicadores e melhoria contínua dentro de hospitais. É um papel estratégico, muito valorizado e difícil de substituir.
            """
        
        elif pr == "desenvolvedor":
            return"""
            1 - Desenvolvedor de Soluções de IA / Machine Learning Engineer: Atua em modelos, pipelines, integração de IA e sistemas inteligentes. A demanda cresce mais rápido do que a automação consegue substituir.
            2 - Engenheiro de Software Full-Stack com foco em Arquitetura: Além de programar, define padrões, estrutura sistemas, escolhe tecnologias e garante escalabilidade. É trabalho de decisão, não apenas de código.
            3 - Engenheiro de Plataforma / DevOps / SRE: Trabalha com infraestrutura, automação, CI/CD, observabilidade e confiabilidade. Funções críticas que exigem visão sistêmica e dificilmente viram commodity.
            """
        
        elif pr == "designer":
            return"""
            1 - Product Designer (UX/UI): Atua em pesquisa, experiência do usuário, testes e métricas. Envolve decisões estratégicas que IA não substitui facilmente.
            2 - UX Researcher: Focado em entender comportamento, necessidades e dores reais dos usuários. Pesquisa qualitativa e análise contextual são áreas pouco automatizáveis.
            3 - Design System Specialist: Cria e mantém sistemas de design, padronizações, guidelines e componentes. É um papel técnico-estratégico cada vez mais essencial em empresas digitais.
            """

    #pega a profissão do cliente e dá uma breve mensagem das tendências de mercado atuais.
    def tendencias_mercado(self, profissional) -> str:
        pr = profissional.profissao
        if pr == "escriturario":
            return "Forte tendência de queda. Digitalização, ERPs e automação administrativa estão reduzindo muito a demanda. Sobrevive mais em órgãos públicos e empresas muito tradicionais, mas é função em declínio."
        
        elif pr == "digitador":
            return "Praticamente uma profissão em extinção. Reconhecimento de voz, formulários online, integração de sistemas e automação de dados assumiram quase tudo que antes era digitação manual."
        
        elif pr == "telemarketing":
            return"Tendência de redução e transformação. Call centers tradicionais perdem espaço para chatbot, atendimento via app, WhatsApp e IA. O que permanece é atendimento mais complexo, técnico ou de alto valor."

        elif pr == "caixa":
            return "Redução gradual, principalmente em bancos e varejo grande. Autoatendimento, pagamento por app, PIX, caixas automáticos e totens tiram demanda. Ainda há espaço em pequenos comércios, mas é função em risco no médio prazo."

        elif pr == "contador":
            return "Profissão em transformação, não em queda total. Tarefas operacionais (lançamentos, guias, obrigações acessórias padrão) estão sendo automatizadas, mas cresce a demanda por contabilidade consultiva, planejamento tributário e análise estratégica."
        
        elif pr == "motorista":
            return"Cenário misto. No curto/médio prazo, ainda alta demanda (transporte por app, logística, entregas). No longo prazo, há risco em algumas áreas com veículos autônomos e automação logística, mas isso ainda é mais tendência global do que realidade imediata no Brasil."
        
        elif pr == "analista_de_RH":
            return"Profissão em evolução, não em queda. Ferramentas digitais (ATS, People Analytics, plataformas de benefícios) tiram parte do trabalho operacional, mas aumenta a relevância em cultura, desenvolvimento de pessoas, dados de gente e atuação estratégica com liderança."
        
        elif pr == "professor":
            return "Alta demanda, porém com pressão por reinvenção. Educação a distância, plataformas online, IA educacional e conteúdos gravados mudam o papel do professor. Quem se adapta a tecnologia, produção de conteúdo e metodologias ativas tende a ter boa demanda."
        
        elif pr == "enfermeiro":
            return "Profissão com tendência de alta e estabilidade no longo prazo. Envelhecimento da população, aumento de serviços de saúde, home care e telemedicina ampliam a demanda. Automação ajuda, mas não substitui cuidados diretos e tomada de decisão clínica."
        
        elif pr == "desenvolvedor":
            return "Ainda em alta demanda, mas com mudança de perfil. Ferramentas low-code, no-code e IA de código reduzem tarefas repetitivas, mas aumentam a necessidade de quem entende arquitetura, integração, negócio, segurança e qualidade."
        
        elif pr == "designer":
            return "Tendência de transformação forte. Ferramentas de IA gerando layout, imagem e identidade visual tornam o design puramente estético mais commoditizado. Cresce a demanda por UX/UI, produto digital, pesquisa com usuário e design estratégico."
            
    #fala especificamente sobre IA no cargo atual do cliente.
    def avanco_ia(self, profissional):
        pr = profissional.profissao
        if pr == "escriturario":
            return "IA já consegue automatizar registro de dados, conferência básica e geração de relatórios. Grande parte das tarefas típicas está em risco."
        
        elif pr == "digitador":
            return "IA + OCR + reconhecimento de voz praticamente substituem a função. Tudo que é “digitar o que está em outro lugar” é altamente automatizável."
        
        elif pr == "telemarketing":
            return"Chatbots, URAs inteligentes e IA de voz já atendem grande volume de chamadas simples. O que sobra tende a ser atendimento complexo, técnico ou de alto valor."
    
        elif pr == "caixa":
            return "IA ajuda em prevenção de fraude, conferência e autoatendimento inteligente. A combinação IA + apps + totens reduz a necessidade de pessoas no caixa físico."
    
        elif pr == "contador":
            return "Softwares com IA fazem conciliação, classificação automática de lançamentos e geração de obrigações. O impacto é forte na parte operacional, menor na parte consultiva/estratégica."
        
        elif pr == "motorista":
            return"IA está por trás de carros autônomos, roteirização e otimização logística. No Brasil o impacto prático ainda é limitado, mas a tendência de longo prazo é substituir parte da condução humana, principalmente em trajetos previsíveis."
        
        elif pr == "analista_de_RH":
            return"IA já ajuda em triagem de currículos, análise de fit, organização de informações de candidatos e até chatbots internos. O operacional encolhe; análise humana e relacionamento seguem importantes."
        
        elif pr == "professor":
            return "IA gera conteúdo, responde dúvidas, cria exercícios e personaliza trilhas de estudo. O professor perde espaço em conteúdo “expositivo”, mas ganha relevância como mediador, curador e orientador."
        
        elif pr == "enfermeiro":
            return "IA auxilia em diagnóstico de apoio, monitoramento, priorização de casos e alertas. Mas a parte prática, emocional e de tomada de decisão à beira-leito ainda é pouco substituível."
        
        elif pr == "desenvolvedor":
            return "Ferramentas de IA escrevem código, sugerem funções, revisam e documentam. Tira peso de tarefas repetitivas, mas aumenta a cobrança por arquitetura, visão sistêmica, segurança e integração."
        
        elif pr == "designer":
            return "Geração de imagens, logos, layouts e até interfaces simples por IA já é realidade. Design puramente visual fica mais commoditizado; pesquisa com usuário, estratégia de produto e decisões de experiência ainda dependem fortemente de humanos."
        
