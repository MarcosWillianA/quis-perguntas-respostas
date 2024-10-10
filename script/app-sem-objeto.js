const container = document.querySelector('#container');
const perguntaRespostas = document.querySelector('#pergunta-respostas');
const pergunta = document.querySelector('#pergunta');
const respostas = document.querySelectorAll('.respostas');
const proxima = document.querySelector('#proxima');
const resultados = document.querySelector('#resultados');
const resultadoAcertos = document.querySelector('#resultado-acertos');
const numeroAcertos = document.querySelector('#numero-acertos');
const voltar = document.querySelector('#voltar');

let perguntaAtual = 0;
let acertos = 0;

const perguntas = [
    {
        questao: 'Qual é o maior mamífero do mundo?',
        opcoes: ['elefante', 'baleia azul', 'girafa', 'orca'],
        correta: 1
    },
    {
        questao: 'Qual é a capital da França?',
        opcoes: ['roma', 'paris', 'madri', 'berlim'],
        correta: 1
    },
    {
        questao: 'Quem pintou a Mona Lisa?',
        opcoes: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Claude Monet'],
        correta: 2
    },
    {
        questao: 'Qual é o continente mais populoso?',
        opcoes: ['Europa', 'África', 'Ásia', 'América'],
        correta: 2
    },
    {
        questao: 'Em que ano ocorreu a independência dos Estados Unidos?',
        opcoes: ['1776', '1789', '1801', '1812'],
        correta: 0
    },
    {
        questao: 'Qual animal é conhecido por mudar de cor?',
        opcoes: ['Camaleão', 'Sapo', 'Elefante', 'Canguru'],
        correta: 0
    },
    {
        questao: 'Quem escreveu "Dom Casmurro"?',
        opcoes: ['Jorge Amado', 'Machado de Assis', 'Clarice Lispector', 'Guimarães Rosa'],
        correta: 1
    },
    {
        questao: 'Qual é o maior deserto do mundo?',
        opcoes: ['Deserto de Gobi', 'Deserto do Saara', 'Deserto da Antártida', 'Deserto do Atacama'],
        correta: 2
    },
    {
        questao: 'Qual é o planeta mais próximo do sol?',
        opcoes: ['Terra', 'Vênus', 'Mercúrio', 'Marte'],
        correta: 2
    },
    {
        questao: 'Quem foi o primeiro homem a pisar na Lua?',
        opcoes: ['Yuri Gagarin', 'Neil Armstrong', 'Buzz Aldrin', 'John Glenn'],
        correta: 1
    },
    {
        questao: 'Qual é o símbolo químico do ouro?',
        opcoes: ['Au', 'Ag', 'Pb', 'Fe'],
        correta: 0
    },
    {
        questao: 'Qual é a língua mais falada do mundo?',
        opcoes: ['Espanhol', 'Inglês', 'Mandarim', 'Árabe'],
        correta: 2
    },
    {
        questao: 'Quem é o personagem principal de "O Senhor dos Anéis"?',
        opcoes: ['Aragorn', 'Frodo', 'Gandalf', 'Legolas'],
        correta: 1
    },
    {
        questao: 'Qual é a capital do Japão?',
        opcoes: ['Seul', 'Tóquio', 'Pequim', 'Bangcoc'],
        correta: 1
    },
    {
        questao: 'Qual animal é conhecido por sua habilidade de imitar sons?',
        opcoes: ['Papagaio', 'Gato', 'Cachorro', 'Peixe'],
        correta: 0
    },
    {
        questao: 'Qual foi a primeira civilização conhecida?',
        opcoes: ['Egípcia', 'Mesopotâmica', 'Grega', 'Romana'],
        correta: 1
    },
    {
        questao: 'Qual é o menor país do mundo?',
        opcoes: ['Mônaco', 'Nauru', 'Vaticano', 'São Marino'],
        correta: 2
    },
    {
        questao: 'Quem é o criador do personagem "Harry Potter?',
        opcoes: ['J.R.R. Tolkien', 'J.K. Rowling', 'C.S. Lewis', 'George R.R. Martin'],
        correta: 1
    },
    {
        questao: 'Qual é o esporte mais popular do mundo?',
        opcoes: ['Basquete', 'Futebol', 'Tênis', 'Críquete'],
        correta: 1
    },
    {
        questao: 'Em qual país se econtra a Grande Muralha',
        opcoes: ['Japão', 'China', 'Índia', 'Coreia do Sul'],
        correta: 1
    }


];

function mostrarPergunta() {
    resultados.style.display = 'none';
    const escolhida = perguntas[perguntaAtual];

    pergunta.innerHTML = escolhida.questao;
    respostas.forEach((resposta, index) => {
        resposta.innerHTML = escolhida.opcoes[index];
        resposta.classList.remove('correta', 'errada'); // Limpa as classes
        resposta.style.opacity = '1'; // Reseta a opacidade
        resposta.style.pointerEvents = 'auto'; // Habilita o clique
    });

    proxima.style.opacity = '.5';
    proxima.style.pointerEvents = 'none';

    respostas.forEach((resposta, index) => {
        resposta.onclick = () => {
            if (resposta.classList.contains('correta') || resposta.classList.contains('errada')) {
                return; // Impede que o clique conte mais de uma vez
            }
            if (index === escolhida.correta) {
                acertos++;
                resposta.classList.add('correta');
                console.log('Acertou!', acertos);
            } else {
                resposta.classList.add('errada');
                respostas[escolhida.correta].classList.add('correta');
                respostas[escolhida.correta].style.opacity = '0.5';
                console.log('ERRRRRRou!');
            }

            // Habilita o botão "Próxima"
            proxima.style.opacity = '1';
            proxima.style.pointerEvents = 'auto';
            respostas.forEach(res => {
                res.style.pointerEvents = 'none'; // Desabilita os cliques após uma resposta
            });
        };
    });
}

function mostrarResultados() {
    container.style.display = 'none'; // Esconde o container do quiz
    resultados.style.display = 'block'; // Mostra a div de resultados
    numeroAcertos.innerHTML = acertos; // Atualiza o número de acertos

    proxima.style.opacity = '0.5'; // Garante que o botão "Próxima" não esteja visível
    proxima.style.pointerEvents = 'none'; // Desabilita o clique no botão "Próxima"
}

mostrarPergunta();

proxima.addEventListener('click', () => {
    if (perguntaAtual < perguntas.length - 1) {
        perguntaAtual++;
        mostrarPergunta();
    } else {
        // Aqui você pode adicionar lógica para mostrar o resultado final
        voltar.style.pointerEvents = 'auto';
        voltar.style.opacity = '1';
        perguntaRespostas.style.display = 'none';
        resultados.style.display = 'flex';
        resultadoAcertos.innerHTML = `Você acertou ${acertos} de ${perguntas.length} perguntas!`;
    }
});

voltar.addEventListener('click', () => {
    // Reinicia o quiz
    perguntaAtual = 0;
    acertos = 0;
    resultados.style.display = 'none'; // Esconde a div de resultados
    container.style.display = 'block'; // Mostra o container do quiz
    perguntaRespostas.style.display = 'block';

    respostas.forEach(resposta => {
        resposta.classList.remove('correta', 'errada'); // Limpa as classes
        resposta.style.opacity = '1'; // Reseta a opacidade
        resposta.style.pointerEvents = 'auto'; // Habilita o clique
    });
    mostrarPergunta(); // Mostra a primeira pergunta
});