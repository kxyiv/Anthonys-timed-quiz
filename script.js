const quizBody = document.getElementById("#quiz");
const quizResults = document.getElementById("#results");
const submitQuiz = document.getElementById("#submit");
const startQuiz = document.querySelector(".startBtn");
const quiz = document.querySelector("#quiz");
const introduction = document.querySelector(".introduction");
const answerButtons = document.querySelectorAll(".answerButtons");
let currentQuestionIndex = 0;
const question = document.querySelector(".question");

const questions = [
  {
    question: "How many data-types are there?",
    answers: [
      "2",
      "5",
      "4",
    ],
    correctAnswer: "5",
  },
  {
    question: "What is the true/false data-type named?",
    answers: [
      "String",
      "Boolean",
      "Number",
    ],
    correctAnswer: "Boolean",
  },
  {
    question: "The condition in an if/else statement is enclosed with a _____.",
    answers: [
      "Curly Brackets",
      "Parenthesis",
      "Square Brackets",
],
    correctAnswer: "Curly Brackets",
  },
  {
    question:
      "Which method outputs a message to the web console and is also used for debugging?",
    answers: [
      "console.bug",
      "console.var",
      "console.log",
    ],
    correctAnswer: "console.log",
  },
];


function createQuiz() {
  introduction.classList.add('d-none')
  quiz.classList.remove('d-none')
  answerButtons.forEach(function(button){
    console.log(button)
    button.addEventListener("click", showNextQuestion)
    })
}
function showNextQuestion(params) {
  currentQuestionIndex++
  question.innerText = questions[currentQuestionIndex].question
  answerButtons.forEach(function(button, index) {
    button.innerText = questions[currentQuestionIndex].answers[index]
    })
}

function showResults() {
  
}




startQuiz.addEventListener("click", createQuiz)
