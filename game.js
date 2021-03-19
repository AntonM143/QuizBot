window.addEventListener("load", startGame);
let guessButton = document.getElementById("guessNumberBtn");
guessButton.addEventListener("click", () => {
    let inputNumber = document.getElementById("inputNumber")
    checkAnswer()
    inputNumber.focus()
});

let maxNumber = 10;
let randomNumber = Math.floor(Math.random() * maxNumber);

function startGame(){
    console.log("%cTHE GAME WAS STARTED", "color: green; font-size: 20px;")
    let box = document.getElementById("botInfo");
    box.innerText = "Start guessing!";
    let inputNumber = document.getElementById("inputNumber").value = " ";
}
function checkAnswer(){
    let box = document.getElementById("botInfo");
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
        let inputNumber = document.getElementById("inputNumber").value = " ";
    }if(inputNumber < randomNumber){
        box.innerText = "Higher!";
        let inputNumber = document.getElementById("inputNumber").value = " ";
    }
    if(inputNumber == randomNumber){
        box.innerText = "You won!!";
        console.log("%cYOU WON!!!", "color: blue; font-size: 20px;");
        setTimeout(startGame, 2000);
    }
}