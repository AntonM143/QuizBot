

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
            
            let botContainer = document.getElementById("containerBot")
            let inputNumber = document.getElementById("inputNumber").value;
            botContainer.innerHTML = ""
            
            checkAnswer(randomNumber, inputNumber);

            if(maxNumber == 20){
                inputPlayer.style.display = "none"
                
                setTimeout(()=>{ display(), botOne(maxNumber, randomNumber)}, 1000)
                
                
            }
            if(maxNumber == 30){
                inputPlayer.style.display = "none"

                setTimeout(()=>{ botOne(maxNumber, randomNumber)}, 1000)
                setTimeout(()=>{ display(),botTwo(maxNumber, randomNumber)}, 2000)
                
               
            }
            
        });
        console.log("The right answer is: " + randomNumber)
        
    }
}





// func for bot 2 para maxNumber to set the limit and randomNumber is the Correct answer
function botOne(maxNumber, randomNumber){
    let divNumber = document.createElement("div")
    let botContainer = document.getElementById("containerBot")
    
    let guessBot = Math.floor(Math.random() * maxNumber) + 1;
    
 
    divNumber.className = "playerCard"
    
    divNumber.innerHTML = " "
    divNumber.innerHTML = "bot 1 gissning är " + " " + guessBot
    
    botContainer.append(divNumber)

    console.log("The bots 1 answer is: " +  guessBot)
    
    checkAnswer(randomNumber, null, guessBot)
    
   
}
// func for bot 2 para maxNumber to set the limit and randomNumber is the Correct answer
function botTwo(maxNumber, randomNumber){
    
    let botContainer = document.getElementById("containerBot")
    let divNumber = document.createElement("div")

    let guessBot = Math.floor(Math.random() * maxNumber) + 1;


    divNumber.className = "playerCard"
    
    divNumber.innerHTML = "bot 2 gissning är " + " " + guessBot
    console.log("The bots 2 answer is: " +  guessBot)
    botContainer.append(divNumber)
    checkAnswer(randomNumber, null, null,guessBot)
}

//func that starts the game ( the timebar)
function startGame(){
    console.log("%cTHE GAME WAS STARTED", "color: green; font-size: 20px;")
    let box = document.getElementById("botInfo");
    const headlineText = document.createElement("h1")
    headlineText.innerText = "Start guessing!"
    box.append(headlineText)
    let inputNumber = document.getElementById("inputNumber").value = " ";

    let timeBar = document.getElementById("timeBar");
    timer()
    
}

// function that checks if the input answer is correct
/**  correct = The correct answer | input = inputNumber from user | botOneGuess = botOneGuess | botTwoGuess = botTwoGuess */  
function checkAnswer(correct, input, botOneGuess, botTwoGuess){
    let box = document.getElementById("botInfo");
    let headlineText = document.createElement("h1")
    const iconDiv = document.createElement("div")
    let inputNumber = input 
    let correctAnswer = correct
    let guessOneBot = botOneGuess
    let guessTwoBot = botTwoGuess
    
    

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

        box.innerHTML = " "
        headlineText.innerText = "WIN!"
        box.append(headlineText)

        console.log("%cYOU WON!!!", "color: blue; font-size: 20px;");
        timeBar.innerHTML = " "
        setTimeout(console.log("game over"), 10000);
        popup()
        /* spara resultat i local storage */
        let loggedInUser = JSON.parse(localStorage.getItem("login"));
        let resultList = JSON.parse(localStorage.getItem("result"));
        if(resultList == null){
            console.log("Listan är tom!!");
            resultList = [];
            console.log(number)
            let player
            if(number == 10){
                player = {
                    username: loggedInUser,
                    score: 1
                }
            }if(number == 20){
                player = {
                    username: loggedInUser,
                    score: 5
                }
            }if(number == 30){
                player = {
                    username: loggedInUser,
                    score: 10
                }
            }
            resultList.push(player);
            localStorage.setItem("result", JSON.stringify(resultList));
        }else{
            for (let i = 0; i < resultList.length; i++) {
                const user = resultList[i];
                if(user.username == loggedInUser){
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
                        username: loggedInUser,
                        score: 1
                    }
                    
                }if(number == 20){
                    player = {
                        username: loggedInUser,
                        score: 5
                    }
                }if(number == 30){
                    player = {
                        username: loggedInUser,
                        score: 10
                    }
                }          
            resultList.push(player);
            localStorage.setItem("result", JSON.stringify(resultList));
        }
        /* setTimeout(reloadToIndex, 10000); */
        
        return box.innerText = "You won!!";

    }
    if(guessOneBot == correctAnswer){

        console.log("%cBOT ONE WON!!!", "color: blue; font-size: 20px;");
        headlineText.innerText = "BOT ONE WON!"
        box.append(headlineText)
        
        setTimeout(console.log("game over"), 10000);
        popup()
        timeBar.innerHTML = " "
        box.innerText = "Bot one won!!";
        let resultList = JSON.parse(localStorage.getItem("result"));
        if(resultList == null){
            resultList = [];
            let player
            if(number == 10){
                player = {
                    username: "BotOne",
                    score: 1
                }
            }if(number == 20){
                player = {
                    username: "BotOne",
                    score: 5
                }
            }if(number == 30){
                player = {
                    username: "BotOne",
                    score: 10
                }
            }
            resultList.push(player);
            localStorage.setItem("result", JSON.stringify(resultList));
        }else{
            for (let i = 0; i < resultList.length; i++) {
                const user = resultList[i];
                if(user.username == "BotOne"){
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
        }
        if(number == 10){
            player = {
                username: "BotOne",
                score: 1
            }
            
        }if(number == 20){
            player = {
                username: "BotOne",
                score: 5
            }
        }if(number == 30){
            player = {
                username: "BotOne",
                score: 10
            }
        }          
        resultList.push(player);
        localStorage.setItem("result", JSON.stringify(resultList));
        console.log("JA DEN LÄSTE HIT")
        /* return box.innerText = "Bot one won!!"; */
        return
        /* setTimeout(reloadToIndex, 10000); */


    }
    if(guessTwoBot == correctAnswer){


        console.log("%cBOT TWO WON!!!", "color: blue; font-size: 20px;");
        headlineText.innerText = "BOT TWO WON!"
        box.append(headlineText)

        setTimeout(console.log("game over"), 10000);
        popup()
        timeBar.innerHTML = " "
        box.innerText = "Bot two won!!";
        let resultList = JSON.parse(localStorage.getItem("result"));
        if(resultList == null){
            resultList = [];
            let player
            if(number == 10){
                player = {
                    username: "BotTwo",
                    score: 1
                }
            }if(number == 20){
                player = {
                    username: "BotTwo",
                    score: 5
                }
            }if(number == 30){
                player = {
                    username: "BotTwo",
                    score: 10
                }
            }
            resultList.push(player);
            localStorage.setItem("result", JSON.stringify(resultList));
        }else{
            for (let i = 0; i < resultList.length; i++) {
                const user = resultList[i];
                if(user.username == "BotTwo"){
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
        }
        if(number == 10){
            player = {
                username: "BotTwo",
                score: 1
            }
            
        }if(number == 20){
            player = {
                username: "BotTwo",
                score: 5
            }
        }if(number == 30){
            player = {
                username: "BotTwo",
                score: 10
            }
        }          
        resultList.push(player);
        localStorage.setItem("result", JSON.stringify(resultList));
        console.log("JA DEN LÄSTE HIT")
        /* return box.innerText = "Bot two won!!"; */
        return
        /* setTimeout(reloadToIndex, 10000); */

    }
}
// func for the timer 

function timer(){
    

    //this has to be equal to timeleft
    timeBar.style = "--duration: 20"
   
    const interval = setInterval(function() {
             if (timeleft <= 0 ) { 
            clearInterval(interval)
            popup()
            return 
            }
             
          /* timeBar.innerHTML = timeleft */
          timeleft -= 1

        }, 1000);
  
}

function reloadToIndex(){
    location.href = "../index.html"
}

  
  function popup(){
        const headlineDiv = document.createElement("div")
        headlineDiv.className = "headlinePopup"
        const headlineText = document.createElement("h1")
        const popupIcon = document.createElement("div")
        popupIcon.id = "popupIcon"
        const btnDiv = document.createElement("div")
        btnDiv.className = "btnDiv"
        const tryAgainBtn = document.createElement("div")
        const exitBtn = document.createElement("div")
        const popupBackground = document.getElementById("popupBackground")

        const option = document.getElementById("popup")

        popupBackground.style.display = "block"
    
        if(timeleft == 0){
            headlineText.innerText = "You lose!"
            headlineDiv.append(headlineText)
            popupIcon.className = "fas fa-sad-cry"
        }else{
            headlineText.innerText = "You win!"
            headlineDiv.append(headlineText)
            popupIcon.className = "fas fa-medal"
        }

        tryAgainBtn.className = "defaultBtn"
        exitBtn.className = "defaultBtn"
        tryAgainBtn.innerText = "Play again!"
        exitBtn.innerText = "Exit"

        btnDiv.append(tryAgainBtn,exitBtn)

        option.append(headlineDiv,popupIcon,btnDiv)


        tryAgainBtn.addEventListener("click", () =>{
            let box = document.getElementById("botInfo");
            option.innerHTML = " "
            popupBackground.style.display = "none"
            box.innerHTML = " " 
            location.reload() 
            startGame()
        })

        exitBtn.addEventListener("click", reloadToIndex )
        popupBackground.append(option)
    }


