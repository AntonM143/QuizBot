// ------------------------dölja spelregler----------------------          
function myFunction() {
    var rules = document.getElementById("rules");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("rulesBtn");
  
    if (rules.style.display === "none") 
    {
      rules.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } 
    else 
    {
      rules.style.display = "none";
      btnText.innerHTML = "Hide";
      moreText.style.display = "inline";
    }
  }
// ------------------------dölja spelregler----------------------          
window.addEventListener("load", initSite);
/* koppla till en logga ut knapp!! */
let logoutButton = document.getElementById("signout");
logoutButton.addEventListener("click", logout);
function initSite(){
    checkLogin();
}
/* för att man inte ska kunna komma till index sidan utan att vara inloggad */
function checkLogin(){
    let loggedInUser = JSON.parse(localStorage.getItem("login"));
    if(loggedInUser == null){
        location.replace("login.html");
    }
}
/* funtion att kalla på för att logga ut, kopplas till knapp längst upp i dokumentet */
function logout(){
    let loggedInUser = JSON.parse(localStorage.getItem("login"));
    loggedInUser = null;
    localStorage.setItem("login", JSON.stringify(loggedInUser));

    location.replace("login.html");
}

