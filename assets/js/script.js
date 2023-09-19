var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-quiz");
var questionOptions = document.querySelector("#question");
var choicesOptions = document.querySelector("#choices")

var timerCount = 50;
var timer;
var currentIndex = 0;
var finalScore = 0;

const questions = ["Inside the HTML document, where do you place your JavaScript code?", "What operator is used to assign a value to a declared variable?", "How do we declare a conditional statement in JavaScript?"];
const choices = ["Inside the <script> element, Inside the <link> element, In the <footer> element, Inside the <head> element,", "Equal sign (=), Colon (:), Double-equal (==), Question mark (?)", "if...else, for loop, while loop, difference...between"];
const answers = ["Inside the <script> element", "Equal sign (=)", "if...else"];

const allQuestions = [
    {
        question: 'Inside the HTML document, where do you place your JavaScript code?',
        choices: ["Inside the <script> element", "Inside the <link> element", "In the <footer> element", "Inside the <head> element"],
        answer: 'Inside the <script> element'
    },
    {
        question: 'What operator is used to assign a value to a declared variable?',
        choices: ["Equal sign (=)", "Colon (:)", "Double-equal (==)", "Question mark (?)"],
        answer: 'Equal sign (=)'
    }, 
    {
        question: "How do we declare a conditional statement in JavaScript?",
        choices: ["if...else", "for loop", "while loop", "difference...between"],
        answer: "if...else"
    }
]

function startGame() {
    timerCount = 50;
    startButton.disabled = true;
    timer = setInterval(startTimer, 1000);
}

function startTimer() {

    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
        if (timerCount > 0) {
        }
    }

    if (timerCount === 0) {
        clearInterval(timer);
        console.log("game = 0")
        window.location.href = "index1.html"
    }

}

startButton.addEventListener("click", startGame);

startButton.addEventListener("click", showQuestion);

function showQuestion() {
    choicesOptions.innerHTML = ''
    questionOptions.innerHTML = allQuestions[currentIndex].question
    for (i = 0; i < 4; i++){
        var choice = allQuestions[currentIndex].choices[i]
        var btn = document.createElement('button')
        btn.textContent = choice
        choicesOptions.append(btn)

    }
}

choicesOptions.addEventListener('click', function (event) {
    console.log(event.target.textContent)
    if (event.target.textContent === allQuestions[currentIndex].answer){
        currentIndex++
        if (currentIndex < allQuestions.length) {
            showQuestion()
        } else {
            console.log('end quiz')
            window.location.href = "index1.html"
        }
    } else {
        currentIndex++
        if (currentIndex < allQuestions.length) {
            showQuestion()
        } else {
            window.location.href = "index1.html"
        }

        console.log('wrong answer')

        timerCount -= 10;
    }
  
})
