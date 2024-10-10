const container = document.querySelector('#container');
const perguntaRespostas = document.querySelector('#pergunta-respostas');
const pergunta = document.querySelector('#pergunta');
const respostas = document.querySelectorAll('.respostas');
const proxima = document.querySelector('#proxima');

let perguntaAtual = 0;

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
    escolheuResposta = false;
    escolhida = perguntas[perguntaAtual];
    
    pergunta.innerHTML = escolhida.questao; 
    respostas.forEach((resposta, index) => {
        resposta.innerHTML = escolhida.opcoes[index];
        
        resposta.addEventListener('click', () => {
            console.log(`Clicou em ${resposta.innerHTML}`);
            escolheuResposta = true;
            proxima.style.opacity = '1';
            proxima.style.pointerEvents = 'auto';
            respostas.forEach(resposta => {
                resposta.style.pointerEvents = 'none';
            })
            if (resposta.innerHTML === escolhida.opcoes[escolhida.correta]) {
                console.log('Acertou!');
                
            } else {
                console.log('ERRRRRRou!');
            }
        })
        
    })
}

mostrarPergunta();

      


