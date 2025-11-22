package services;

import helpers.IOUtils;
import models.Profissional;
import models.ProfissaoSelecao;

import java.util.Scanner;

public class ConsultaService {


    public Profissional adicionarCadastro() {
        System.out.println("Vamos registrar seus dados.\n");

        System.out.print("Me fale o seu nome: ");
        String nome = IO.readln();

        System.out.print("E o seu endereço? ");
        String endereco = IO.readln();

        // Seleção de profissão + cálculo da urgência (como no Python)
        ProfissaoSelecao selecao = selecaoProfissao();
        String profissao = selecao.profissao();
        int urgencia = selecao.urgencia();

        System.out.print("E o endereço de contato? (pode inserir um email, telefone, caixa postal, etc..): ");
        String contato = IO.readln();

        Profissional profissional = new Profissional(urgencia, nome, endereco, contato, profissao);
        System.out.println("\nCadastro concluído:");
        System.out.println(profissional);

        return profissional;
    }

    private ProfissaoSelecao selecaoProfissao() {
        System.out.println("E qual seria a sua profissão? (implementação limitada para os propósitos desse projeto)");
        while (true) {
            System.out.println("""
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
                    """);

            int escolha = IOUtils.validarInput("Escolha uma opção (1-11): ");
            String profissao;
            int urgencia;

            switch (escolha) {
                case 1 -> {
                    profissao = "escriturario";
                    urgencia = 3;
                }
                case 2 -> {
                    profissao = "digitador";
                    urgencia = 3;
                }
                case 3 -> {
                    profissao = "telemarketing";
                    urgencia = 3;
                }
                case 4 -> {
                    profissao = "caixa";
                    urgencia = 3;
                }
                case 5 -> {
                    profissao = "contador";
                    urgencia = 2;
                }
                case 6 -> {
                    profissao = "motorista";
                    urgencia = 2;
                }
                case 7 -> {
                    profissao = "analista_de_RH";
                    urgencia = 2;
                }
                case 8 -> {
                    profissao = "professor";
                    urgencia = 1;
                }
                case 9 -> {
                    profissao = "enfermeiro";
                    urgencia = 1;
                }
                case 10 -> {
                    profissao = "desenvolvedor";
                    urgencia = 1;
                }
                case 11 -> {
                    profissao = "designer";
                    urgencia = 1;
                }
                default -> {
                    System.out.println("Favor digitar uma opção válida.\n");
                    continue;
                }
            }

            return new ProfissaoSelecao(profissao, urgencia);
        }
    }

    // Descrição da urgência da situação do cliente
    public String descUrgencia(Profissional profissional) {
        int u = profissional.getUrgencia();

        return switch (u) {
            case 1 -> "Nível 1 – Baixa urgência: você pode se planejar com calma, observar tendências e ir se atualizando aos poucos.";
            case 2 -> "Nível 2 – Moderada: já vale começar a se mexer, estudar novas áreas e montar um plano de transição.";
            case 3 -> "Nível 3 – Relevante: mudanças de mercado e IA podem te afetar em alguns anos, é prudente acelerar a adaptação.";
            case 4 -> "Nível 4 – Alta: risco considerável de defasagem em pouco tempo; focar forte em requalificação e cargos mais modernos.";
            case 5 -> "Nível 5 – Crítica: o cenário atual e o avanço da automação exigem mudança rápida; é hora de tratar isso como prioridade máxima.";
            default -> "Nível de urgência não reconhecido. Use um valor de 1 a 5.";
        };
    }

    // Sugestão de 3 cargos mais modernos para cada profissão
    public String sugestaoCargo(Profissional profissional) {
        String pr = profissional.getProfissao();

        return switch (pr) {
            case "escriturario" -> """
                    Sugestões de cargos mais modernos:
                    1 - Assistente Administrativo Digital
                    2 - Analista de Processos/Backoffice
                    3 - Coordenador de Operações Administrativas
                    """;

            case "digitador" -> """
                    Sugestões de cargos mais modernos:
                    1 - Operador de Sistemas/Backoffice Digital
                    2 - Analista de Dados Júnior
                    3 - Assistente de Automação de Processos (RPA)
                    """;

            case "telemarketing" -> """
                    Sugestões de cargos mais modernos:
                    1 - Especialista em Suporte ao Cliente (CS)
                    2 - Analista de Sucesso do Cliente (Customer Success)
                    3 - Inside Sales / Pré-vendas (SDR)
                    """;

            case "caixa" -> """
                    Sugestões de cargos mais modernos:
                    1 - Atendente de Experiência do Cliente (loja ou digital)
                    2 - Assistente de Operações Financeiras
                    3 - Analista de Operações de Loja / Varejo
                    """;

            case "contador" -> """
                    Sugestões de cargos mais modernos:
                    1 - Analista Fiscal/Tributário
                    2 - Controller / Analista de Controladoria
                    3 - Consultor Contábil/Fiscal com foco em planejamento
                    """;

            case "motorista" -> """
                    Sugestões de cargos mais modernos:
                    1 - Coordenador de Rotas / Logística
                    2 - Operador de Monitoramento de Frotas (Tracking/Telemetria)
                    3 - Especialista em Operações de Mobilidade/Apps
                    """;

            case "analista_de_RH" -> """
                    Sugestões de cargos mais modernos:
                    1 - HR Business Partner (HRBP)
                    2 - Especialista em People Analytics
                    3 - Especialista em Desenvolvimento Organizacional
                    """;

            case "professor" -> """
                    Sugestões de cargos mais modernos:
                    1 - Designer Instrucional / Especialista em Educação Online
                    2 - Facilitador de Aprendizagem / Mentor
                    3 - Produtor de Conteúdo Educacional Multimídia
                    """;

            case "enfermeiro" -> """
                    Sugestões de cargos mais modernos:
                    1 - Enfermeiro de Saúde Digital / Telemedicina
                    2 - Enfermeiro Auditor / Qualidade em Saúde
                    3 - Enfermeiro Especialista em Terapias/Unidades Críticas
                    """;

            case "desenvolvedor" -> """
                    Sugestões de cargos mais modernos:
                    1 - Desenvolvedor de Soluções de IA / Machine Learning
                    2 - Engenheiro de Software Full-Stack com foco em produtos
                    3 - Engenheiro de Plataforma / DevOps / SRE
                    """;

            case "designer" -> """
                    Sugestões de cargos mais modernos:
                    1 - Product Designer (UX/UI)
                    2 - UX Researcher
                    3 - Design System Specialist
                    """;

            default -> "Profissão não mapeada para sugestões de cargos.";
        };
    }

    // Tendências de mercado para o cargo atual
    public String tendenciasMercado(Profissional profissional) {
        String pr = profissional.getProfissao();

        return switch (pr) {
            case "escriturario" ->
                    "Forte tendência de queda. Digitalização e automação administrativa reduzem muito a demanda por tarefas repetitivas.";
            case "digitador" ->
                    "Praticamente em extinção. OCR, RPA e sistemas integrados assumiram o que antes era digitação manual.";
            case "telemarketing" ->
                    "Tendência de redução e transformação. Operações simples migram para bots e URAs; fica o atendimento mais complexo.";
            case "caixa" ->
                    "Tendência de queda em bancos e varejo com autoatendimento e pagamentos digitais, mas ainda há nichos físicos.";
            case "contador" ->
                    "Profissão em transformação, não em extinção. Softwares automatizam rotina, mas análise e consultoria ganham espaço.";
            case "motorista" ->
                    "Mudança gradual: apps, logística urbana, riscos de automação em longo prazo (veículos autônomos), mas ainda com demanda.";
            case "analista_de_RH" ->
                    "Forte demanda por RH estratégico, dados e cultura. Funções puramente operacionais estão encolhendo.";
            case "professor" ->
                    "Educação se digitaliza rápido, mas bons professores continuam muito relevantes, principalmente com foco em metodologia.";
            case "enfermeiro" ->
                    "Alta demanda global e tendência de crescimento, especialmente com envelhecimento populacional e saúde digital.";
            case "desenvolvedor" ->
                    "Alta demanda, mas com pressão para mais produtividade e foco em arquitetura, produto e segurança.";
            case "designer" ->
                    "Área passando por disrupção com IA, mas designers estratégicos (produto/experiência) continuam muito relevantes.";
            default ->
                    "Sem dados específicos para essa profissão, mas o mercado em geral está sendo impactado por digitalização e IA.";
        };
    }

    // Avanço da IA no cargo atual
    public String avancoIa(Profissional profissional) {
        String pr = profissional.getProfissao();

        return switch (pr) {
            case "escriturario" ->
                    "IA e automação já substituem grande parte das tarefas. A urgência de migração para funções mais analíticas é alta.";
            case "digitador" ->
                    "IA, OCR e RPA tornam a função quase totalmente automatizável. Requalificação é praticamente obrigatória.";
            case "telemarketing" ->
                    "Bots, URAs inteligentes e IA conversacional assumem atendimentos simples; sobram casos complexos e de alto valor.";
            case "caixa" ->
                    "IA em bancos digitais, antifraude e automação de atendimento reduzem o papel do caixa humano em muitas operações.";
            case "contador" ->
                    "IA ajuda em conciliações, cruzamento de dados e alertas fiscais, mas decisões, planejamento e responsabilização continuam humanas.";
            case "motorista" ->
                    "IA auxilia em roteirização, segurança e telemetria; veículos autônomos ainda são tendência de longo prazo, não imediata.";
            case "analista_de_RH" ->
                    "IA ajuda em triagem de currículos, pesquisa de clima e rotinas; análise humana, cultura e relacionamento seguem centrais.";
            case "professor" ->
                    "IA gera conteúdo, exercícios e respostas rápidas, mas não substitui didática, empatia e condução de aprendizagem.";
            case "enfermeiro" ->
                    "IA apoia diagnóstico, monitoração e protocolos, mas o cuidado humano e a tomada de decisão à beira-leito ainda são insubstituíveis.";
            case "desenvolvedor" ->
                    "IA escreve trechos de código e auxilia em testes, mas arquitetura, visão sistêmica, segurança e integração continuam essenciais.";
            case "designer" ->
                    "IA gera imagens, logos e layouts, mas pesquisa, entendimento de usuário e decisões de experiência ainda dependem muito de humanos.";
            default ->
                    "IA está afetando praticamente todas as áreas; quanto mais repetitiva a atividade, maior a chance de automação.";
        };
    }
}
