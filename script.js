const quizBody = document.getElementById('#quiz')
const quizResults = document.getElementById('results')
const submitQuiz = document.getElementById('submit')



function createQuiz() {

}

function showResults() {
    
}

createQuiz();

submitQuiz.addEventListener('click', showResults);

const questions = [
    {
        question: 'How many data-types are there?',
        answers: {
            1:'2',
            2:'3',
            3:'4',
            4:'5',
        },
        correctAnswer:'5'
    },
    {
        question: 'HWhat is the true/false dattaype named?',
        answers: {
            1:'String',
            2:'Boolean',
            3:'Number',
            4:'Test',
        },
        correctAnswer:'Boolean'
    },
    {
        question: 'The condition in an if/else statement is enclosed with a _____.',
        answers: {
            1:'Quotes',
            2:'Curly Brackets',
            3:'Parenthesis',
            4:'Square Brackets',
        },
        correctAnswer:'Curly Brackets'
    },
    {
        question: 'Which method outputs a message to the web console and is also used for debugging?',
        answers: {
            1:'console.log',
            2:'console.var',
            3:'console.test',
            4:'console.bug',
        },
        correctAnswer:'console.log',
    }
]

