let createButton = document.getElementById("createButton");
createButton.addEventListener("click", saveUser);
let infoBox = document.getElementById("info");
function saveUser(){
    let inputUsername = document.getElementById("newUsername").value;
    let inputPassword = document.getElementById("newPassword").value;
    if(inputPassword == "" || inputUsername == ""){
        infoBox.innerText = "Fill in all the fields please!";
        return;
    }
    let userToSave = {
        username: inputUsername,
        password: inputPassword
    }
    let listOfUsers = JSON.parse(localStorage.getItem("users"));
    if(listOfUsers == null){
        listOfUsers = [];
    }
    for (let i = 0; i < listOfUsers.length; i++) {
        const user = listOfUsers[i];
        if(inputUsername == user.username){
            infoBox.innerText = "This username is already taken!!";
            clearInput();
            return
        }
    }
    listOfUsers.push(userToSave);
    localStorage.setItem("users", JSON.stringify(listOfUsers));
    alert("Your account was successfully created!");
    location.replace("login.html");
}
function clearInput(){
    let inputUsername = document.getElementById("newUsername").value = "";
    let inputPassword = document.getElementById("newPassword").value = "";
}
function toMainPage(){
    location.replace("./index.html")
}