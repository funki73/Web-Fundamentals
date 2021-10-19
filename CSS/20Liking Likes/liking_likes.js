var clicked = 0
var p1 = document.querySelector(".CountLike")

function clickLike(element){
    clicked++;
    p1.innerText=(clicked + " like(s)");
}