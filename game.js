window.addEventListener("load", initSite);
//let body = document.getElementById("body");
function initSite(){
    const params = new URLSearchParams(window.location.search);

    const name = params.get("difficulty");
        testing(name)
        checkLogin();
    
}
function checkLogin(){
    let loggedInUser = JSON.parse(localStorage.getItem("login"));
    if(loggedInUser == null){
        location.replace("login.html");
    }
}


let mediumButton = document.getElementById("mediumButton")
let hardButton = document.getElementById("hardButton")


let guessButton = document.getElementById("guessNumberBtn");







let timeleft = 20; 
function testing(maxNumber){
    startGame()
    let randomNumber = Math.floor(Math.random() * maxNumber) + 1;
    let guessButton = document.getElementById("guessNumberBtn");
    guessButton.addEventListener("click", ()=>{
        checkAnswer(randomNumber);
    });
    console.log(randomNumber)
}


    /* Change location to game.html with window.location? */
    /* setUrl(game.html?difficulty=easy) */



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
    let timeBar = document.getElementById("timeBar");
    timer()
    
}

function checkAnswer(random){
    let box = document.getElementById("botInfo");
    let inputNumber = document.getElementById("inputNumber").value;
    
    let randomNumber = random
   
    console.log("The right answer is: " + randomNumber);
    console.log("Your answer is: " + inputNumber);

    if(isNaN(inputNumber)){
        box.innerText = "You must choose a number!";
        inputNumber = " ";
        return
    }
    if(inputNumber > randomNumber){
        box.innerText = "Lower!";

        /* let inputNumber = document.getElementById("inputNumber").value = " "; */

    }if(inputNumber < randomNumber){
        box.innerText = "Higher!";
        /* let inputNumber = document.getElementById("inputNumber").value = " "; */
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



