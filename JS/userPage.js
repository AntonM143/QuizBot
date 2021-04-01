window.addEventListener("load", initsite);
function initsite(){
    checkLogin();
    sortToplist();
    showResult();
    
}
let resultList = JSON.parse(localStorage.getItem("result"));
let highscoreDiv = document.getElementById("highscore");
let rulesBtn = document.getElementById("rulesIcon");
rulesBtn.addEventListener("click", popup);
let logoutButton = document.getElementById("signout");
logoutButton.addEventListener("click", logout);
/* console.log(resultList) */
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
function showResult(){
    let loggedInUser = JSON.parse(localStorage.getItem("login"));
    let resultDiv = document.getElementById("result");
    if(resultList == null){
        console.log("halloj")
    }else{
        for (let i = 0; i < resultList.length; i++) {
            const user = resultList[i];
            if(loggedInUser == user.username){
               
                console.log("hej " + user.username)
                resultDiv.innerText = user.score;
                return
            }
            
        }

    }
    resultDiv.innerText = 0
}

function sortToplist() {
    if(resultList == null){
        console.log("halloj")
        return
    }
    resultList.sort(function(a, b){return b.score - a.score});
    displayList();
  }
  function displayList(){
      if(resultList.length < 5){
        highscoreDiv.innerText = "No results available..."
        
      }else{
          /* highscoreDiv.innerHTML = "<ol>" + "<li>" + resultList[0].username + resultList[0].score + "</li>" + 
          "<li>" + resultList[1].username + resultList[1].score + "</li>" + 
          "<li>" + resultList[2].username + resultList[2].score + "</li>" + 
          "<li>" + resultList[3].username + resultList[3].score + "</li>" + 
          "<li>" + resultList[4].username + resultList[4].score + "</li>" + "</ol>";
                    
          console.log(resultList) */
          highscoreDiv.innerHTML =
          "1. " + resultList[0].username + ":  " + resultList[0].score + "p" + "<br>" +
          "2. " + resultList[1].username + ":  " + resultList[1].score + "p" + "<br>" +                     
          "3. " + resultList[2].username + ":  " + resultList[2].score + "p" + "<br>" +                     
          "4. " + resultList[3].username + ":  " + resultList[3].score + "p" + "<br>" +                    
          "5. " + resultList[4].username + ":  " + resultList[4].score + "p";             

          console.log(resultList)
     

      }
  }
  function popup(){
    const headlineDiv = document.createElement("div")
    headlineDiv.className = "headlinePopup"
    const closePopup = document.createElement("div")
    closePopup.className = "far fa-times-circle"
    /* closePopup.style.padding = "10px"; */
    const headlineText = document.createElement("h1")
    const popupIcon = document.createElement("div")
    popupIcon.id = "popupIcon"
    const btnDiv = document.createElement("div")
    btnDiv.className = "btnDiv"
    const tryAgainBtn = document.createElement("div")
    const popupBackground = document.getElementById("popupBackground")

    const option = document.getElementById("popup")

    popupBackground.style.display = "block"

    
    /* tryAgainBtn.className = "defaultBtn"
    tryAgainBtn.innerText = "Play again!" */

    /* btnDiv.append(tryAgainBtn) */

    option.append(closePopup,headlineDiv,popupIcon,btnDiv)

    closePopup.addEventListener("click", () =>{
        let box = document.getElementById("botInfo");
        option.innerHTML = " "
        popupBackground.style.display = "none"
        box.innerHTML = " " 
        location.reload() 
    })
    popupBackground.append(option)
}
function logout(){
    let loggedInUser = JSON.parse(localStorage.getItem("login"));
    loggedInUser = null;
    localStorage.setItem("login", JSON.stringify(loggedInUser));

    location.replace("login.html");
}