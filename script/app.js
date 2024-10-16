const container = document.querySelector('#container');
const perguntaRespostas = document.querySelector('#pergunta-respostas');
const pergunta = document.querySelector('#pergunta');
const respostas = document.querySelectorAll('.respostas');
const proxima = document.querySelector('#proxima');

class Quiz {
    constructor (questoes) {
        this.perguntas = questoes;
        this.perguntaAtual = 0;
    };

    mostrarPergunta() {
        if (this.perguntaAtual < this.perguntas.length) {
            const perguntaAtual = this.perguntas[this.perguntaAtual];
            pergunta.innerHTML = perguntaAtual.questao;

            //Exibir opções de resposta: 
            respostas.forEach((resposta, index) => {
                resposta.innerHTML = perguntaAtual.opcoes[index];
                resposta.dataset.index = index;               
                let respostaSelecionada = false;

                resposta.addEventListener('click', () => {
                    //console.log(`Clicou em ${resposta.innerHTML}`);
                    //console.log(perguntaAtual.opcoes[perguntaAtual.correta]);
                    if (respostaSelecionada) return;
                    respostaSelecionada = true;
                    
                    if (resposta.innerHTML === perguntaAtual.opcoes[perguntaAtual.correta]) {
                        resposta.classList.add('correta');
                        proxima.style.opacity = '1';
                        proxima.style.pointerEvents = 'auto';
                        return;
                    } else {
                        respostas[perguntaAtual.correta].classList.add('Correta');
                        resposta.classList.add('errada');
                        proxima.style.opacity = '1';
                        proxima.style.pointerEvents = 'auto';
                        return;
                    }
                })
            });
        }
        else {
            //Tela de fim de quiz! 
            console.log('Fim do Quiz');
        }
    };

    proximaPergunta() {
        this.perguntaAtual++;
        this.mostrarPergunta();
    }
};

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

const quiz = new Quiz(perguntas);
quiz.mostrarPergunta(); // Exibe a primeira pergunta

// Lógica para o botão "Próxima"
proxima.addEventListener('click', () => {
    quiz.proximaPergunta();
});