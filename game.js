window.addEventListener("load", startGame);
let guessButton = document.getElementById("guessNumberBtn");
guessButton.addEventListener("click", checkAnswer);
let maxNumber = 10;
let randomNumber = Math.floor(Math.random() * maxNumber);

function startGame(){
    console.log("%cTHE GAME WAS STARTED", "color: green; font-size: 20px;")
    let box = document.getElementById("demo");
    box.innerText = "Start guessing!";
    let inputNumber = document.getElementById("inputNumber").value = " ";
    
}
function checkAnswer(){
    let box = document.getElementById("demo");
    let inputNumber = document.getElementById("inputNumber").value;
    console.log("The right answer is: " + randomNumber);
    console.log("Your answer is: " + inputNumber);
    if(isNaN(inputNumber)){
        box.innerText = "You must choose a number!";
        inputNumber = " ";
        return
    }
    if(inputNumber > randomNumber){
        box.innerText = "Lower!";
    }if(inputNumber < randomNumber){
        box.innerText = "Higher!";
    }
    if(inputNumber == randomNumber){
        box.innerText = "You won!!";
        console.log("%cYOU WON!!!", "color: blue; font-size: 20px;");
        setTimeout(startGame, 2000);
    }
}