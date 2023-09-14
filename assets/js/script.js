var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-quiz");
var questionOptions = document.querySelector(".question");
var choicesOptions = document.querySelector(".choices")

var timerCount = 100;
var timer;

const questions = ["Inside the HTML document, where do you place your JavaScript code?", "What operator is used to assign a value to a declared variable?", "How do we declare a conditional statement in JavaScript?"];
const choices = ["Inside the <script> element, Inside the <link> element, In the <footer> element, Inside the <head> element,", "Equal sign (=), Colon (:), Double-equal (==), Question mark (?)", "if...else, for loop, while loop, difference...between"]; 
const answers = ["Inside the <script> element", "Equal sign (=)", "if...else"];

const questionsString = JSON.stringify(questions);
const choicesString = JSON.stringify(choices);
const answersString = JSON.stringify(answers); 


function startGame() {
    timerCount = 100;
    startButton.disabled = true;
    timer = setInterval(startTimer, 1000);
}

function startTimer() {

        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            if (timerCount > 0) {
                //winGame();
            }
        }

        if (timerCount === 0) {
            clearInterval(timer);
            console.log("game = 0")
            //loseGame();
        }

}

// for (i = 0; i < questions.length; i++) {
//     questionOptions.innerHTML = questionsString(0);
//}

// document.addEventListener("click", function(event){
//     if (questionsString(i) > 0) {
//         var question1 = event.questionsString(2).
//          document.querySelector(questionOptions).innerHTML = question1; 
//     } return;

// })

startButton.addEventListener("click", startGame);