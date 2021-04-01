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

function checkLogin(){

    let loggedInUser = JSON.parse(localStorage.getItem("login"));
    let usernameDiv = document.getElementById("username") 
    if(loggedInUser == null){
        location.replace("login.html");
    }else if(loggedInUser !== null){
        usernameDiv.innerHTML = loggedInUser
        return loggedInUser
      }
}
function showResult(){

    let loggedInUser = JSON.parse(localStorage.getItem("login"));
    let resultDiv = document.getElementById("result");
    if(resultList == null){
    }else{
        for (let i = 0; i < resultList.length; i++) {
            const user = resultList[i];
            if(loggedInUser == user.username){
                resultDiv.innerText = user.score;
                return
            }
            
        }

    }
    resultDiv.innerText = 0
}

function sortToplist() {

    if(resultList == null){
        return
    }
    resultList.sort(function(a, b){return b.score - a.score});
    displayList();
  }
  function displayList(){

      if(resultList.length < 5){
        highscoreDiv.innerText = "No results available..."
        
      }else{
          highscoreDiv.innerHTML =
          "1. " + resultList[0].username + ":  " + resultList[0].score + "p" + "<br>" +
          "2. " + resultList[1].username + ":  " + resultList[1].score + "p" + "<br>" +                     
          "3. " + resultList[2].username + ":  " + resultList[2].score + "p" + "<br>" +                     
          "4. " + resultList[3].username + ":  " + resultList[3].score + "p" + "<br>" +                    
          "5. " + resultList[4].username + ":  " + resultList[4].score + "p";
     

      }
  }
  function popup(){

    const headlineDiv = document.createElement("div")
    const closePopup = document.createElement("div")
    const headlineText = document.createElement("h1")
    const popupIcon = document.createElement("div")
    const btnDiv = document.createElement("div")
    const tryAgainBtn = document.createElement("div")

    const popupBackground = document.getElementById("popupBackground")
    const option = document.getElementById("popup")
    
    headlineDiv.className = "headlinePopup"
    closePopup.className = "far fa-times-circle"
    popupIcon.id = "popupIcon"
    btnDiv.className = "btnDiv"
    popupBackground.style.display = "block"

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