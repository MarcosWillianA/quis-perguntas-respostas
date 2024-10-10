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

mostrarPergunta();

proxima.addEventListener('click', () => {
    if (perguntaAtual < perguntas.length - 1) {
        perguntaAtual++;
        mostrarPergunta();
    } else {
        // Aqui você pode adicionar lógica para mostrar o resultado final
        perguntaRespostas.style.display = 'none';
        resultados.style.display = 'flex';
        resultadoAcertos.innerHTML = `Você acertou ${acertos} de ${perguntas.length} perguntas!`;
    }
});

voltar.addEventListener('click', () => {
    
})

