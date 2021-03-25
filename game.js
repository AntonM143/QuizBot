
window.addEventListener("load", initSite);

const params = new URLSearchParams(window.location.search);
const number = params.get("difficulty");

let timeleft = 20; 
let guessButton = document.getElementById("guessNumberBtn");

function initSite(){
        gameMode(number)
        checkLogin();
}


  // check if user is logged in and also set the username
function checkLogin(){
    let loggedInUser = JSON.parse(localStorage.getItem("login"));
    let usernameDiv = document.getElementById("username") 
    if(loggedInUser == null){
        location.replace("login.html");
    }else if(loggedInUser !== null){
        usernameDiv.innerHTML = loggedInUser
        console.log(loggedInUser)
        return loggedInUser
      }
}










function gameMode(maxNumber){
    //if the url is tampered automatically send back to index
    if (maxNumber != 10 && maxNumber !=20 && maxNumber !=30) {
        location.replace("index.html")
        // else run/start the game
    }else{
        startGame()
        let randomNumber = Math.floor(Math.random() * maxNumber) + 1;
        let guessButton = document.getElementById("guessNumberBtn");
        let inputPlayer = document.getElementById("inputPlayer")

       
        const display = ()=>{
            inputPlayer.style.display == "none" ? inputPlayer.style.display = "flex" : inputPlayer.style.display = "flex" 
        }

        guessButton.addEventListener("click", ()=>{
            
            let inputNumber = document.getElementById("inputNumber").value;

            checkAnswer(randomNumber, inputNumber);
            if(maxNumber == 20){
                inputPlayer.style.display = "none"
                setTimeout(()=>{ display(), botOne(maxNumber, randomNumber)}, 3000)
                

            }
            if(maxNumber == 30){
                inputPlayer.style.display = "none"
                setTimeout(()=>{display(), botOne(maxNumber, randomNumber)}, 3000)
                inputPlayer.style.display = "none"
                setTimeout(()=>{display(), botTwo(maxNumber, randomNumber)}, 6000)
            }
            
        });
       console.log("The right answer is: " + randomNumber)

    }
}


    


// func for bot 2 para maxNumber to set the limit and randomNumber is the Correct answer
function botOne(maxNumber, randomNumber){
    

    let guessBot = Math.floor(Math.random() * maxNumber) + 1;
  
    let divNumber = document.getElementById("botOneGuess")
    
    divNumber.style.fontSize = "50px"
    divNumber.innerHTML = "bot 1 gissning är " + " " + guessBot
    console.log("The bots 1 answer is: " +  guessBot)
    
    checkAnswer(randomNumber, null, guessBot)
    
   
}
// func for bot 2 para maxNumber to set the limit and randomNumber is the Correct answer
function botTwo(maxNumber, randomNumber){
    

    let guessBot = Math.floor(Math.random() * maxNumber) + 1;
  
    let divNumber = document.getElementById("botTwoGuess")
    
    divNumber.style.fontSize = "50px"
    divNumber.innerHTML = "bot 2 gissning är " + " " + guessBot
    console.log("The bots 2 answer is: " +  guessBot)
  
    checkAnswer(randomNumber, null, null,guessBot)
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
/**  correct = The correct answer | input = inputNumber from user | botOneGuess = botOneGuess | botTwoGuess = botTwoGuess */  
function checkAnswer(correct, input, botOneGuess, botTwoGuess){
    let box = document.getElementById("botInfo");
    
    let inputNumber = input 
    let correctAnswer = correct
    let guessOneBot = botOneGuess
    let guessTwoBot = botTwoGuess
    
    
    if(isNaN(inputNumber)){
        box.innerText = "You must choose a number!";
        inputNumber = " ";
        return
    }
    if(inputNumber > correctAnswer ){
        box.innerText = "Lower!";

        /* let inputNumber = document.getElementById("inputNumber").value = " "; */

    }if(inputNumber < correctAnswer ){
        box.innerText = "Higher!";
        /* let inputNumber = document.getElementById("inputNumber").value = " "; */
    }
    if(inputNumber == correctAnswer){

        console.log("%cYOU WON!!!", "color: blue; font-size: 20px;");
        
        timeBar.innerHTML = " "
        /* setTimeout(reloadToIndex, 10000); */
        
        return box.innerText = "You won!!";

    }
    if(guessOneBot == correctAnswer){

        console.log("%cBOT ONE WON!!!", "color: blue; font-size: 20px;");
        
        timeBar.innerHTML = " "
        return box.innerText = "Bot one won!!";
        /* setTimeout(reloadToIndex, 10000); */

    }
    if(guessTwoBot == correctAnswer){

        console.log("%cBOT TWO WON!!!", "color: blue; font-size: 20px;");
        
        timeBar.innerHTML = " "
        return box.innerText = "Bot two won!!";
        /* setTimeout(reloadToIndex, 10000); */

    }
}
// func for the timer 
function timer(){
    /* clearInterval(timeleft = 0) */
   
    //this has to be equal to timeleft
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



