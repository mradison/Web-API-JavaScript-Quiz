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
