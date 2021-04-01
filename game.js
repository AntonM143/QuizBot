
window.addEventListener("load", initSite);

const params = new URLSearchParams(window.location.search);
const number = params.get("difficulty");
const correctAnswer = Math.floor(Math.random() * number) + 1;


let timeleft = 20; 

let guessButton = document.getElementById("guessNumberBtn");

function initSite(){
        gameMode()
        checkLogin();
}

const changeOrder = () => {
    let botDiv = document.getElementById("containerBot")
    let dasPlayerDiv = document.getElementById("2")

    if(dasPlayerDiv.style.order = "1"){
        botDiv.style.order = "1"
        dasPlayerDiv.style.order = "0"
        
    } 
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





function gameMode(){

    //if the url is tampered automatically send back to index
    if (number != 10 && number !=20 && number !=30) {
        location.replace("index.html")
        // else run/start the game
    }else{
        startGame()

        
        let guessButton = document.getElementById("guessNumberBtn");
      

        guessButton.addEventListener("click", ()=>{

            document.getElementById("inputNumber").focus()

            if(number != 10){
                document.getElementById("guessNumberBtn").style.display = "none"  
            }  
            let inputNumber = document.getElementById("inputNumber").value
            
            checkAnswer(correctAnswer, inputNumber);
            //Ta bort denna ifall du vill se vad du precis gissat
            inputNumber = document.getElementById("inputNumber").value = " "
            
            
        });
        console.log("The right answer is: " + correctAnswer)

        
    }
}


const hideGoBtn = () =>{
    let goBtn = document.getElementById("guessNumberBtn").style.display = "flex"  
    let inputNumber = document.getElementById("inputNumber").focus()
}

// func for bot 1 
function botOne(){

   
    return  Math.floor(Math.random() * number) + 1;
   
}
// func for bot 2 
function botTwo(){
    return Math.floor(Math.random() * 5) + 1;
}

//func that starts the game ( the timebar)
function startGame(){
    console.log("%cTHE GAME WAS STARTED", "color: green; font-size: 20px;")
    let box = document.getElementById("botInfo");
    const headlineText = document.createElement("h1")
    headlineText.innerText = "Start guessing!"
    box.append(headlineText)

    if(number == 20 || number == 30){
        let botContainer = document.getElementById("containerBot")
        let botAnswerText = document.createElement("div")
        botAnswerText.className = "userInput"
        let botProfileDiv = document.createElement("div")
        botProfileDiv.className = "profileInfo"
        let botName = document.createElement("div")
        botName.id = "username"
        botName.innerText = "BotMan"
        let botButton = document.createElement("div")
        botButton.className = "imgButton"
        let botImgOne = document.createElement("img")
        botImgOne.src = "/assets/Bot1.png"
        let botAnswerDiv = document.createElement("div")
        botAnswerDiv.className = "playerCard"
        botAnswerText.id = "botTextBox"
        

        

        botButton.append(botImgOne)
        botProfileDiv.append(botButton,botName)
        botAnswerDiv.append(botProfileDiv,botAnswerText)
        botContainer.append(botAnswerDiv)
    }
    if(number == 30){

        let botContainerTwo = document.getElementById("containerBot")
        let botAnswerTextTwo = document.createElement("div")
        botAnswerTextTwo.className = "userInput"
        botAnswerTextTwo.id = "3"
        let botProfileDivTwo = document.createElement("div")
        botProfileDivTwo.className = "profileInfo"
        let botButtonTwo = document.createElement("div")
        botButtonTwo.className = "imgButton"
        let botNameTwo = document.createElement("div")
        botNameTwo.id = "username"
        botNameTwo.innerText = "TwoPac"
        let botImgTwo = document.createElement("img")
        botImgTwo.src = "/assets/Bot2.png"
        let botAnswerDivTwo = document.createElement("div")
        botAnswerDivTwo.className = "playerCard"
       
        botAnswerTextTwo.id = "botTextBoxTwo"
        botButtonTwo.append(botImgTwo)
        botProfileDivTwo.append(botButtonTwo,botNameTwo)
        botAnswerDivTwo.append(botProfileDivTwo,botAnswerTextTwo)
        botContainerTwo.append(botAnswerDivTwo)
    }

    timer()
  
    
}

// function that checks if the input answer is correct
/**  correct = The correct answer | input = inputNumber from user  */  
function checkAnswer(correct, input){
    let box = document.getElementById("botInfo");
    let headlineText = document.createElement("h1")
    const iconDiv = document.createElement("div")
    let gameContainer = document.getElementById("bigContainer")
    let inputPlayer = document.getElementById("inputPlayer")

    let guessOneBot = botOne()
    let guessTwoBot = botTwo()
    let inputNumber = input 
    let correctAnswer = correct

    
    
    
    if(inputNumber !=null) {

        if(isNaN(inputNumber)){
            headlineText.innerText = "Select a number!"
            box.append(headlineText)
            return
        }
    
    if(inputNumber > correctAnswer){
        box.innerHTML = " "
        headlineText.innerText = "Lower!"
        iconDiv.className = "fas fa-arrow-down"
        box.append(headlineText, iconDiv)
    

    }if(inputNumber < correctAnswer){
        box.innerHTML = " "
        headlineText.innerText = "Higher!"
        iconDiv.className = "fas fa-arrow-up"
        box.append(headlineText, iconDiv)
    }

    if(inputNumber == correctAnswer){
        const wins = "PLAYER_WON"

        timeleft = -1
        let loggedInUser = JSON.parse(localStorage.getItem("login"));
        console.log("%cYOU WON!!!", "color: blue; font-size: 20px;");
        
        popup(wins)
        saveResult(loggedInUser)
        return gameContainer.style.display = "none"
    }
}
    //IF GAMEMODE IS MEDIUM 
    if(number == 20 || number == 30){
        
        let answerBox = document.getElementById("botTextBox")
        console.log("The bots 1 answer is: " +  guessOneBot)
        
        let botDiv = document.getElementById("containerBot")
        botDiv.style.order = "0"
        let dasPlayerDiv = document.getElementById("2")
        dasPlayerDiv.style.order = "1"
        answerBox.innerText = "BotMan gissar på....."
        setTimeout(()=>{ guessOneBot,answerBox.innerHTML = `BotMan gissade på ${guessOneBot}`,setTimeout(changeOrder,2000),setTimeout(hideGoBtn,2000) }, 1000)
            

        if(guessOneBot == correctAnswer){
            const wins = "BotMan won!"
            
            console.log("%cBOT ONE WON!!!", "color: blue; font-size: 20px;");
            headlineText.innerText = "BOT ONE WON!"
            box.append(headlineText)
            timeleft = -1
            gameContainer.style.display = "none"
            timeBar.innerHTML = " "
            box.innerText = "Bot one won!!";
            popup(wins, timeleft)
            saveResult("BotMan")
        }
    }

    //IF GAMEMODE IS HARD 
    if(number == 30){
        
         let answerBox = document.getElementById("botTextBoxTwo")
        answerBox.innerText = "TwoPac gissar på...."
        console.log("The bots 1 answer is: " +  guessOneBot)
        setTimeout(()=>{guessTwoBot,answerBox.innerHTML = `TwoPac gissade på ${guessTwoBot}`}, 2000)
    
        if(guessTwoBot == correctAnswer){
            const wins = "TwoPac won!"
            
            console.log("%cBOT TWO WON!!!", "color: blue; font-size: 20px;");
            headlineText.innerText = "BOT TWO WON!"
            box.append(headlineText)
    
            timeleft = -1
            gameContainer.style.display = "none"
            /* let user.username = "BotTwo" */
            /* setTimeout(()=>{popup(wins, timeleft)},1000) */
            timeBar.innerHTML = " "
            box.innerText = "Bot two won!!";
            popup(wins, timeleft)
            saveResult("TwoPac")
            
        }
    }  
}
// currentPlayer =  user or bot
function saveResult (currentPlayer){
    /* spara resultat i local storage */
    let resultList = JSON.parse(localStorage.getItem("result"));
    if(resultList == null){
        console.log("Listan är tom!!");
        resultList = [];
        console.log(number)
        let player
        if(number == 10){
            player = {
                username: currentPlayer,
                score: 1
            }
        }if(number == 20){
            player = {
                username: currentPlayer,
                score: 5
            }
        }if(number == 30){
            player = {
                username: currentPlayer,
                score: 10
            }
        }
        resultList.push(player);
        localStorage.setItem("result", JSON.stringify(resultList));
    }else{
        for (let i = 0; i < resultList.length; i++) {
            const user = resultList[i];
            if(user.username == currentPlayer){
                if(number == 10){
                    user.score += 1
                    localStorage.setItem("result", JSON.stringify(resultList));
                    return
                }if(number == 20){
                    user.score += 5
                    localStorage.setItem("result", JSON.stringify(resultList));
                    return
                }if(number == 30){
                    user.score += 10
                    localStorage.setItem("result", JSON.stringify(resultList));
                    return
                }
            }
        }
        if(number == 10){
            player = {
                username: currentPlayer,
                score: 1
            }
                
        }if(number == 20){
            player = {
                username: currentPlayer,
                score: 5
            }
        }if(number == 30){
            player = {
                username: currentPlayer,
                score: 10
            }
        }          
        resultList.push(player);
        localStorage.setItem("result", JSON.stringify(resultList));
    }
}

// func for the timer 

function timer(){
    

    //this has to be equal to timeleft
    timeBar.style = "--duration: 20"
   
    const interval = setInterval(function() {
             if (timeleft === 0 ) { 
            clearInterval(interval)
            popup(null,timeleft)
            console.log(timeleft)
            return 
            }
             
          /* timeBar.innerHTML = timeleft */
          timeleft -= 1

        }, 1000);
  
}

function reloadToIndex(){
    location.href = "../userPage.html"
}

  
  function popup(wins, timeleft){
        const headlineDiv = document.createElement("div")
        headlineDiv.className = "headlinePopup"
        const closePopup = document.createElement("div")
        closePopup.className = "far fa-times-circle"
        const headlineText = document.createElement("h1")
        const popupIcon = document.createElement("div")
        popupIcon.id = "popupIcon"
        const btnDiv = document.createElement("div")
        btnDiv.className = "btnDiv"
        const tryAgainBtn = document.createElement("div")
        const popupBackground = document.getElementById("popupBackground")

        const option = document.getElementById("popup")

        popupBackground.style.display = "block"
        console.log(wins)
        //checks if the time is = 0
        if(timeleft === 0 ){
            console.log("vad fan tiden gick ut")
            headlineText.innerText = "You lose!"
            headlineDiv.append(headlineText)
            popupIcon.className = "fas fa-sad-cry"  

        }
        //checks who won
        if(wins === "BotMan won!" || wins === "TwoPac won!" || wins === "PLAYER_WON"){
            popupIcon.className = "fas fa-sad-cry" 

            if (wins === "BotMan won!") {
                headlineText.innerText = wins + "....You lose!"
                /* headlineText.innerText = "Bot One Won......You lose!" */
                
            }if(wins === "TwoPac won!"){
                headlineText.innerText = wins + "....You lose!"
                
            }if (wins === "PLAYER_WON"){
                headlineText.innerText = "You win!"
                popupIcon.className = "fas fa-medal"
                
            }
            headlineDiv.append(headlineText)
        }
        
        tryAgainBtn.className = "defaultBtn"
        tryAgainBtn.innerText = "Play again!"

        btnDiv.append(tryAgainBtn)

        option.append(closePopup,headlineDiv,popupIcon,btnDiv)


        tryAgainBtn.addEventListener("click", () =>{
            let box = document.getElementById("botInfo");
            option.innerHTML = " "
            popupBackground.style.display = "none"
            box.innerHTML = " " 
            location.reload() 
            startGame()
        })

        closePopup.addEventListener("click", reloadToIndex )
        popupBackground.append(option)
    }

    function toMainPage(){
        location.replace("./userPage.html")
    }