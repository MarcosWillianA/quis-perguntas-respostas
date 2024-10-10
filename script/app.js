const container = document.querySelector('#container');
const perguntaRespostas = document.querySelector('#pergunta-respostas');
const pergunta = document.querySelector('#pergunta');
const respostas = document.querySelectorAll('.respostas');
const proxima = document.querySelector('#proxima');

let perguntaAtual = 0;

class Quiz {
    constructor (questao, opcoes, correta) {
        this.questao = questao;
        this.opcoes = opcoes;
        this.correta = correta;
    };

    mostrarPergunta() {
        const perguntaQuiz = this.perguntas[perguntaAtual];
        pergunta.innerHTML = perguntaQuiz.questao;
        respostas.forEach((opcao, index) => {
            opcao = perguntaQuiz.opcoes[index];
            respostas.innerHTML = opcao;
        })
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

const meuQuiz = new Quiz(perguntas);
meuQuiz.mostrarPergunta(); // Mostra a primeira pergunta