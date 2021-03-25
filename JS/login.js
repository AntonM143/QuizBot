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

