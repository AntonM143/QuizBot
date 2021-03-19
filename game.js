window.addEventListener("load", startGame);
let guessButton = document.getElementById("guessNumberBtn");

guessButton.addEventListener("click", () => {
    let inputNumber = document.getElementById("inputNumber")
    checkAnswer()
    inputNumber.focus()
});



guessButton.addEventListener("click", checkAnswer);
let maxNumber = 10; 
let timeleft = 20; 
let timeBar = document.getElementById("timeBar");

let randomNumber = Math.floor(Math.random() * maxNumber);

/* function botOne(){
    let divNumber = document.getElementById("botOne")
    let maxNumber = 10;
    let botOneNumber = Math.floor(Math.random() * maxNumber);
    divNumber.style.fontSize = "50px"
    divNumber.innerHTML = "bot 1 gissning är " + " " + botOneNumber
    console.log(botOneNumber)
}
botOne()
function botTwo(){
    let divNumber = document.getElementById("botTwo")
    let maxNumber = 10;
    let botOneNumber = Math.floor(Math.random() * maxNumber);
    divNumber.style.fontSize = "50px"
    divNumber.innerHTML = "bot 2 gissning är " + " " + botOneNumber
    console.log(botOneNumber)
}
botTwo()
function botThree(){
    let divNumber = document.getElementById("botThree")
    let maxNumber = 10;
    let botOneNumber = Math.floor(Math.random() * maxNumber);
    divNumber.style.fontSize = "50px"
    divNumber.innerHTML = "bot 3 gissning är " + " " + botOneNumber
    console.log(botOneNumber)
}
botThree() */
function startGame(){
    console.log("%cTHE GAME WAS STARTED", "color: green; font-size: 20px;")
    let box = document.getElementById("botInfo");
    box.innerText = "Start guessing!";
    let inputNumber = document.getElementById("inputNumber").value = " ";

    timer()

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
        
        timeBar.innerHTML = " "
        setTimeout(reloadToIndex, 10000);

    }
}

function timer(){
    /* clearInterval(timeleft = 0) */
   
    
    timeBar.style = "--duration: 20"
   
      setInterval(function() {
          if (timeleft <= 0 ) { 
              
              clearInterval(timeleft = 0)
              timeBar.innerHTML = "GAME OVER"
              setTimeout(reloadToIndex, 5000);
              return
             
          }
          /* timeBar.innerHTML = timeleft */
          timeleft -= 1
      }, 1000);
     
}
function reloadToIndex(){
    location.href = "../index.html"
}



