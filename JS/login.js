let loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", login);
let infoBox = document.getElementById("info");
function login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if(username == "" || password == ""){
        infoBox.innerText = "Fill in all the fields please!";
        return
    }
    let listOfUsers = JSON.parse(localStorage.getItem("users"));
    for (let i = 0; i < listOfUsers.length; i++) {
        const user = listOfUsers[i];
        if(username == user.username && password == user.password){
            location.replace("index.html");
            localStorage.setItem("login", JSON.stringify(username));
            return
        }   
    }
    infoBox.innerText = "Username or password is incorrect..";
}
/* dessa funktioner ska läggas i main.js och game.js för att kunna logga ut och även kunna kolla
om någon är inloggad */
function checkLogin(){
    let loggedInUser = JSON.parse(localStorage.getItem("login"));
    if(loggedInUser == null){
        location.replace("login.html");
    }
}
function logout(){
    let loggedInUser = JSON.parse(localStorage.getItem("login"));
    loggedInUser = null;
    localStorage.setItem("login", JSON.stringify(loggedInUser));
}
