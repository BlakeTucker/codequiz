//grab the start button
var startBtn = document.getElementById ("startBtn")
var questionEl = document.getElementById ("question")
var answerEl = document.getElementById ("answers")
var questionCounter =0
//create questions
var questions = [
    {
        question: "What is a variable?",
        answers:[
            "Kitchen Sink",
            "Glass",
            "Can",
            "A storage container for javascript"
        ],
        correctAnswer: "A storage container for javascript"
    },
   
]
//create function to put question on the screen
function startGame (){
questionEl.textContent =questions[questionCounter].question
for (var i=0; i<questions[questionCounter].answers.length;i++){
    var answerBtnEl = document.createElement ("button")
    answerBtnEl.textContent =questions[questionCounter].answers[i]
    answerEl.append (answerBtnEl)
}
}

//question pops up when button is clicked
startBtn.addEventListener ("click",startGame)
