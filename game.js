window.addEventListener("load", initSite);

const params = new URLSearchParams(window.location.search);
const number = params.get("difficulty");

let timeleft = 20; 
let guessButton = document.getElementById("guessNumberBtn");

function initSite(){
        testing(number)
        checkLogin();
}


  
function checkLogin(){
    let loggedInUser = JSON.parse(localStorage.getItem("login"));
    if(loggedInUser == null){
        location.replace("login.html");
    }
}










function testing(maxNumber){
    startGame()
    let randomNumber = Math.floor(Math.random() * maxNumber) + 1;
    let guessButton = document.getElementById("guessNumberBtn");
    guessButton.addEventListener("click", ()=>{
        
        let inputNumber = document.getElementById("inputNumber").value;
        checkAnswer(randomNumber, inputNumber);
        if(maxNumber == 20){
            botOne(maxNumber, randomNumber)
        }
        if(maxNumber == 30){
            botOne(maxNumber, randomNumber)
            botTwo(maxNumber, randomNumber)
        }
        
    });
   console.log("The right answer is: " + randomNumber)
}


    /* Change location to game.html with window.location? */
    /* setUrl(game.html?difficulty=easy) */


// func for bot
function botOne(maxNumber, randomNumber){
    

    let guessBot = Math.floor(Math.random() * maxNumber) + 1;
  
    let divNumber = document.getElementById("botOneGuess")
    
    divNumber.style.fontSize = "50px"
    divNumber.innerHTML = "bot 1 gissning är " + " " + guessBot
    console.log("The bots 1 answer is: " +  guessBot)
    
    checkAnswer(randomNumber, null, guessBot )
    
   
}

function botTwo(maxNumber, randomNumber){
    

    let guessBot = Math.floor(Math.random() * maxNumber) + 1;
  
    let divNumber = document.getElementById("botTwoGuess")
    
    divNumber.style.fontSize = "50px"
    divNumber.innerHTML = "bot 2 gissning är " + " " + guessBot
    console.log("The bots 2 answer is: " +  guessBot)
  
    checkAnswer(randomNumber, null, null,guessBot  )
}
//func that starts the game ( the timebar)
function startGame(){
    console.log("%cTHE GAME WAS STARTED", "color: green; font-size: 20px;")
    let box = document.getElementById("botInfo");
    box.innerText = "Start guessing!";
    let inputNumber = document.getElementById("inputNumber").value = " ";
    let timeBar = document.getElementById("timeBar");
    timer()
    
}
// function that checks if the input answer is correct
function checkAnswer(random, input, botOneGuess, botTwoGuess){
    let box = document.getElementById("botInfo");
    
    let inputNumber = input 
    let randomNumber = random
    let guessOneBot = botOneGuess
    let guessTwoBot = botTwoGuess
    
    console.log("random nummer i checkanswer " + randomNumber);
    console.log("inputnumber i checkanswer " + inputNumber);
    

    if(isNaN(inputNumber)){
        box.innerText = "You must choose a number!";
        inputNumber = " ";
        return
    }
    if(inputNumber > randomNumber ){
        box.innerText = "Lower!";

        /* let inputNumber = document.getElementById("inputNumber").value = " "; */

    }if(inputNumber < randomNumber ){
        box.innerText = "Higher!";
        /* let inputNumber = document.getElementById("inputNumber").value = " "; */
    }
    if(inputNumber == randomNumber){

        console.log("%cYOU WON!!!", "color: blue; font-size: 20px;");
        
        timeBar.innerHTML = " "
        /* setTimeout(reloadToIndex, 10000); */
        
        return box.innerText = "You won!!";

    }
    if(guessOneBot == randomNumber){

        console.log("%cBOT ONE WON!!!", "color: blue; font-size: 20px;");
        
        timeBar.innerHTML = " "
        return box.innerText = "Bot one won!!";
        /* setTimeout(reloadToIndex, 10000); */

    }
    if(guessTwoBot == randomNumber){

        console.log("%cBOT TWO WON!!!", "color: blue; font-size: 20px;");
        
        timeBar.innerHTML = " "
        return box.innerText = "Bot two won!!";
        /* setTimeout(reloadToIndex, 10000); */

    }
}

function timer(){
    /* clearInterval(timeleft = 0) */
   
    
    timeBar.style = "--duration: 20"
   
      setInterval(function() {
          if (timeleft <= 0 ) { 
              
              clearInterval(timeleft = 0)
              timeBar.innerHTML = "GAME OVER"
              /* setTimeout(reloadToIndex, 5000); */
              return
             
          }
          /* timeBar.innerHTML = timeleft */
          timeleft -= 1
      }, 1000);
     
}

function reloadToIndex(){
    location.href = "../index.html"
}



