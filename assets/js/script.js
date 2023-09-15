var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-quiz");
var questionOptions = document.querySelector("#question");
var choicesOptions = document.querySelector("#choices")

var timerCount = 100;
var timer;
var currentIndex = 0
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

// var me = ['Donnahue', 'George', 26, true, 'New York']
// var myObject = {
// firstname: 'Donnahue',
// lastname: 'George',
// age: 26,
// happy: true,
// location: 'New York'
// }

// myObject.lastname


// const questionsString = JSON.stringify(questions);
// const choicesString = JSON.stringify(choices);
// const answersString = JSON.stringify(answers); 


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




startButton.addEventListener("click", startGame);

// startButton.addEventListener("click", addQuestion);

startButton.addEventListener("click", showQuestion);

// document.getElementById("question").addEventListener("click", addQuestion);

// function addQuestion() {
//     document.getElementById("question").innerHTML = "Click!";
//     //document.getElementById("choices").innerHTML = "Help!"; 
// }

function showQuestion() {
    // if (questions[0] > questions.length) {
    //     var question1 = questionsString(2).
    //      document.querySelector(questionOptions).innerHTML = question1; 
    // } return;
    //     for (i = 0; i < questions.length; i++) {
    //     questionOptions.innerHTML = questions[i]
    //     console.log(questions[i])
    // }
    choicesOptions.innerHTML = ''
    questionOptions.innerHTML = allQuestions[currentIndex].question
    for (i = 0; i < 4; i++){
        var choice = allQuestions[currentIndex].choices[i]
        /*
        1. Target the parent
        2. Create the element
        3. Give element the necessary data
        4. Add it to the parent
        */
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
            location.replace("https://www.w3schools.com")
            // end quiz and go to highscore page
            //have them enter their initials and store their initials and scores in the localStorage 
        }
    } else {
        console.log('wrong answer')

        timerCount -= 10;
        //minus time from the timer
    }
  
})
