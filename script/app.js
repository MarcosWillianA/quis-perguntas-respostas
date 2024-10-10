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
            });
        }
        else {
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
    }
];

const quiz = new Quiz(perguntas);
quiz.mostrarPergunta(); // Exibe a primeira pergunta

// Lógica para o botão "Próxima"
proxima.addEventListener('click', () => {
    quiz.proximaPergunta();
});