
window.addEventListener("load", startGame);
let guessButton = document.getElementById("guessNumberBtn");

guessButton.addEventListener("click", () => {
    let inputNumber = document.getElementById("inputNumber")
    checkAnswer
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
    const headlineText = document.createElement("h1")
    headlineText.innerText = "Start guessing!"
    box.append(headlineText)
    let inputNumber = document.getElementById("inputNumber").value = " ";
    timer()
}

function checkAnswer(){
    let box = document.getElementById("botInfo");
    let inputNumber = document.getElementById("inputNumber").value;
    const headlineText = document.createElement("h1")
    const iconDiv = document.createElement("div") 

    console.log("The right answer is: " + randomNumber);
    console.log("Your answer is: " + inputNumber);

    if(isNaN(inputNumber)){
        headlineText.innerText = "Select a number!"
        box.append(headlineText)
        return
    }

    if(inputNumber > randomNumber){
        box.innerHTML = " "
        headlineText.innerText = "Lower!"
        iconDiv.className = "fas fa-arrow-down"
        box.append(headlineText, iconDiv)

    }if(inputNumber < randomNumber){
        box.innerHTML = " "
        headlineText.innerText = "Higher!"
        iconDiv.className = "fas fa-arrow-up"
        box.append(headlineText, iconDiv)
    }

    if(inputNumber == randomNumber){

        box.innerHTML = " "
        headlineText.innerText = "WIN!"
        box.append(headlineText)
        console.log("%cYOU WON!!!", "color: blue; font-size: 20px;");
        timeBar.innerHTML = " "
        setTimeout(console.log("game over"), 10000);
        popup()
    }
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
    
        headlineText.innerText = "You win!"
        headlineDiv.append(headlineText)
        popupIcon.className = "fas fa-medal"

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

function timer(){
    
    /* clearInterval(timeleft = 0) */
    timeBar.style = "--duration: 10"
   
      setInterval(function() {
          if (timeleft <= 0 ) { 
              clearInterval(timeleft = 0)
              return
          }
          /* timeBar.innerHTML = timeleft */
          timeleft -= 1
      }, 1000);
     
      
}
function reloadToIndex(){
    location.href = "../index.html"
}



