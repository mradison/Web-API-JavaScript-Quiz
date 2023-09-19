var output = localStorage.getItem("output"); 

console.log(output); 

document.getElementById("button").onclick = function(){
    var scoreName = document.getElementById("name").value;
    var finalScore = document.getElementById("score").value

    console.log("Congratulations: ", scoreName + " " , finalScore);

    localStorage.setItem("output", ("Congratulations: " + scoreName + " " + finalScore));

    document.getElementById("output").innerHTML =("Congratulations: " + scoreName + " " + finalScore);
}

function get(){
    localStorage.getItem("output");
    document.getElementById("output1").innerHTML = output; 
}

// localStorage.setItem('scoreName', JSON.stringify(scoreName));
// localStorage.getItem('scoreName', JSON.stringify(scoreName));

// localStorage.setItem('finalScore', JSON.stringify(finalScore));
// localStorage.getItem('finalScore', JSON.stringify(finalScore));

// document.getElementById("name");
// document.getElementById("score");

// console.log("I am loaded"); 

// var scoreName = document.getElementById('name').value='';
// var finalScore = document.getElementById('#score').value='';
// var startButton = document.querySelector("#button"); 

// console.log(scoreName);
// console.log(finalScore); 

// function highScore(event) {
//     event.preventDefault();
//     scoreName.value.trim();
//     localStorage.setItem('scoreName', JSON.stringify(scoreName));
//     document.getElementById('name').append("Congratulations!!!");
//     console.log(scoreName);
//     console.log(score); 
// }

// startButton.addEventListener("click", highScore)


// document.querySelector('#button').addEventListener('click', () => {
//     localStorage.setItem(scoreName.value, score.value);
//     document.getElementById(scoreName, score).append("Congratulations!!!");
//     console.log(scoreName);
//     console.log(score); 

// })