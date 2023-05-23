const questions = [
    {
        question: "Which is the largest animal in the world?",
        answer: [
         {text: "Shark", correct: false},
         {text: "Blue Whale", correct: true},
         {text: "Elephant", correct: false},
         {text: "Giraffe", correct: false},   
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answer: [
         {text: "Asia", correct: false},
         {text: "Australia", correct: true},
         {text: "Europe", correct: false},
         {text: "Africa", correct: false},   
        ]  
    },
    {
        question: "Which is the largest desert in the world?",
        answer: [
         {text: "Kalahari", correct: false},
         {text: "Antartica", correct: true},
         {text: "Sahara", correct: false},
         {text: "Gobi", correct: false},   
        ]  
    },
    {
        question: "What is 2 plus 2?",
        answer: [
         {text: "6", correct: false},
         {text: "4", correct: true},
         {text: "5", correct: false},
         {text: "8", correct: false},   
        ]  
    }
]

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn")
var options = document.querySelectorAll(".btn");
// var opTwo = document.getElementById("op-two");
// var opThree = document.getElementById("op-three");
// var opFour = document.getElementById("op-four");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion
    .question;
   
    for (var i = 0; i < 4; i++) {
        options[i].textContent =  questions[currentQuestionIndex].answer[i].text;
        
    }
    
}

startQuiz();