window.addEventListener("load", startGame);
let guessButton = document.getElementById("guessNumberBtn");
guessButton.addEventListener("click", checkAnswer);
let maxNumber = 10;
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
    let box = document.getElementById("demo");
    box.innerText = "Start guessing!";
    let inputNumber = document.getElementById("inputNumber").value = " ";
    timer()
    
}
function checkAnswer(){
    let box = document.getElementById("demo");
    let inputNumber = document.getElementById("inputNumber").value;
    console.log("The right answer is: " + randomNumber);
    console.log("Your answer is: " + inputNumber);
    
    if(inputNumber.length == 0){
        box.innerText = "Du måste skriva in en siffra!"
        return
    }
    if(inputNumber > randomNumber){
        box.innerText = "Lägre!"

    }if(inputNumber < randomNumber){
        box.innerText = "Högre!"
    }
    if(inputNumber == randomNumber){
        box.innerText = "You won!!"
        console.log("%cYOU WON!!!", "color: blue; font-size: 20px;")
        setTimeout(reloadToIndex, 2000)
    }
}

function timer(){
    /* clearInterval(timeleft = 0) */
    timeleft = 20; 
    let timeBar = document.getElementById("timeBar");
    timeBar.style = "--duration: 20"
   
      setInterval(function() {
          if (timeleft <= 0 ) { 
              
              clearInterval(timeleft = 0)
              timeBar.innerHTML = "din tid tog slut"
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



