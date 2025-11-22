function simularRisco() {
    // captura dos Elementos da Interface
    const input = document.getElementById('profissao-risco');
    const resultadoDiv = document.getElementById('risco-resultado');
    const ponteiro = document.getElementById('risco-ponteiro'); 
    const simuladorBox = document.getElementById('simulador-box'); // captura para expansão
    
    // VERIFICAÇÃO CRÍTICA: garante que os objetos de dados existam
    if (typeof mapeamentoRisco === 'undefined') {
        resultadoDiv.innerHTML = "Erro: Dados de mapeamento (dados.js) não carregados.";
        resultadoDiv.className = 'risco-alto';
        resultadoDiv.style.display = 'block';
        return;
    }

    // normaliza a entrada (mantido para compatibilidade com SELECT ou INPUT)
    const profissao = input.value.trim().toLowerCase();

    // validação de entrada
    if (profissao === "" || profissao === "selecione sua profissão") { // adiciona validação para o SELECT
        resultadoDiv.innerHTML = "Por favor, insira uma profissão para avaliar o potencial de transformação.";
        resultadoDiv.className = 'aviso-profissao';
        resultadoDiv.style.display = 'block';
        
        // se a validação falhar, o simulador deve reverter (ou nunca expandir)
        if (simuladorBox) {
            simuladorBox.classList.remove('simulador-aberto'); 
        }
        
        if (ponteiro) {
            ponteiro.style.left = '0%';
        }
        
        return;
    }
    
    // EXPANSÃO E MUDANÇA DE LAYOUT (acontece antes de exibir o resultado)
    if (simuladorBox) {
        simuladorBox.classList.add('simulador-aberto');
    }

    // determinação da pontuação e rota
    // se a profissão não estiver mapeada, a pontuação é 50 (Média)
    let pontuacao = mapeamentoRisco[profissao] || 50; 
    let riscoNaoMapeado = (pontuacao === 50 && !mapeamentoRisco.hasOwnProperty(profissao)); // verifica se o valor 50 é o fallback

    let nivel = "";
    let classe = "";
    let mensagem = "";

    // determinação do nível e mensagem (regras humanizadas)
    if (pontuacao >= 70) {
        nivel = "ALTA URGÊNCIA";
        classe = "risco-alto";
        mensagem = `O mercado na sua área está em aceleração total, e é hora de agir com urgência! Não espere a mudança acontecer: seja o protagonista da sua reinvenção. Use o Mapa de Requalificação como seu guia para se posicionar de forma proativa e garantir um futuro sólido antes que o mercado exija.`;
    } else if (pontuacao >= 40) {
        nivel = "ATENÇÃO";
        classe = "risco-medio";
        mensagem = `O sucesso na sua área é construído através da evolução constante. Adote a Inteligência Artificial não como substituta, mas como sua parceira de produtividade. Ao mesmo tempo, invista em suas soft skills (comunicação, criatividade, empatia) — elas serão seu diferencial inegociável para garantir a ascensão!`;
    } else {
        nivel = "BAIXA URGÊNCIA";
        classe = "risco-baixo";
        mensagem = `Sua base é sólida, o que te dá uma vantagem estratégica. Este é o momento ideal para aprofundar sua especialização e desenvolver liderança. Foque em ser uma referência para garantir sua ascensão em um futuro cada vez mais humano-centrado!`;
    }

    // ajuste de mensagem para profissões não mapeadas
    if (riscoNaoMapeado) {
        nivel = "ATENÇÃO MÉDIA";
        classe = "risco-medio";
        mensagem = `Não encontramos dados exatos, mas o potencial estimado é **ATENÇÃO MÉDIA**. O avanço tecnológico exige adaptação em todas as áreas.`;
    }

    // atualização da interface
    
    // move o ponteiro (com verificação de segurança)
    if (ponteiro) {
        ponteiro.style.left = `${pontuacao}%`;
    }

    // exibe o resultado formatado e aplica a classe de estilo/cor
    resultadoDiv.innerHTML = `Potencial de transformação: <strong>${nivel}</strong><br>${mensagem}`;
    resultadoDiv.className = classe; 
    resultadoDiv.style.display = 'block'; // garante que o conteúdo seja exibido.
}

function resetSimulador() {
    const simuladorBox = document.getElementById('simulador-box');
    const resultadoDiv = document.getElementById('risco-resultado');

    // remove a classe de expansão
    if (simuladorBox) {
        simuladorBox.classList.remove('simulador-aberto');
    }

    // limpa o conteúdo e esconde o bloco de resultado
    resultadoDiv.innerHTML = '<p>O resultado do seu potencial será exibido aqui.</p>';
    resultadoDiv.className = ''; // remove as classes de cor (risco-alto, etc.)
    resultadoDiv.style.display = 'none'; 
}