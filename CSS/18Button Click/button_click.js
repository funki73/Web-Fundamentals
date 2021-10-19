function clickLike(){
    alert ("Ninja was liked");
}

function clickLogin(element){
    if(element.id === "Login") {
    element.innerText = "Logout";
// } else {
//     element.innerText = "Login";
// }

function clickRemove(element){
    if(element.id === "add_definition")
    element.remove();
}