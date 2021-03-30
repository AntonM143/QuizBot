window.addEventListener("load", initsite);
function initsite(){
    checkLogin();
    sortToplist();
    showResult();
    
}
let resultList = JSON.parse(localStorage.getItem("result"));
let highscoreDiv = document.getElementById("highscore");
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
    resultDiv.innerText = "Play to get a highscore!"
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
          highscoreDiv.innerHTML = "1. " + resultList[0].username + "  " + resultList[0].score + "<br>" + 
          "2. " + resultList[1].username + "  " + resultList[1].score + "<br>" +                      
          "3. " + resultList[2].username + "  " + resultList[2].score + "<br>" +                      
          "4. " + resultList[3].username + "  " + resultList[3].score + "<br>" +                      
          "5. " + resultList[4].username + "  " + resultList[4].score;              
          console.log(resultList)

      }
  }