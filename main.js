window.addEventListener("load", initSite);
/* koppla till en logga ut knapp!! */
let logoutButton = document.getElementById("????");
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
}