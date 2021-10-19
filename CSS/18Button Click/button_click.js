function clickLike(){
    alert ("Ninja was liked");
}

function clickLogin(element){
    if(element.id === "Login")
    element.innerText = "Logout"
}

function clickRemove(element){
    if(element.id === "add_definition")
    element.remove();
}