var clicked1 = 0
var p1 = document.querySelector(".CountLiketop")

function clickLiketop(element){
    clicked1++;
    p1.innerText=(clicked1 + " like(s)");
}

var clicked2 = 0
var p2 = document.querySelector(".CountLikemiddle")

function clickLikemiddle(element){
    clicked2++;
    p2.innerText=(clicked2 + " like(s)");
}

var clicked3 = 0
var p3 = document.querySelector(".CountLikebottom")

function clickLikebottom(element){
    clicked3++;
    p3.innerText=(clicked3 + " like(s)");
}