const container = document.querySelector('#container');
const perguntaRespostas = document.querySelector('#pergunta-respostas');
const pergunta = document.querySelector('#pergunta');
const respostas = document.querySelectorAll('.respostas');
const proxima = document.querySelector('#proxima');

class Quiz {
    constructor (pergunta, opcoes, correta) {
        this.pergunta = pergunta;
        this.opcoes = opcoes;
        this.correta = correta;
    };

    mostrarPergunta() {
        const perguntaQuiz = this.perguntas[this]
    }
};

const perguntas = [
    {
        pergunta: 'Qual é o maior mamífero do mundo?',
        opcoes: ['elefante', 'baleia azul', 'girafa', 'orca'],
        correta: 1
    },
    {
        pergunta: 'Qual é a capital da França?',
        opcoes: ['roma', 'paris', 'madri', 'berlim'],
        correta: 1
    }
];