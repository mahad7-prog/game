var Player1 = prompt("Head & tail");
var player2

var error = document.getElementById("Main")

Player1 = Player1.toLowerCase()
if (Player1 === "head") {
  player2 = "tail";
  
  alert('player Two Won')
 alert("player 2 turns")
} else if (Player1 === "tail") {
    player2="head"
    alert('player One Won')
    dice1=" "
 alert('Player 1 turns')
}
else {
   alert("Invaild Property") 
   error.innerText = "Error 404"
   error.setAttribute("class","error")
}

var button =document.getElementsByTagName('button')
var dice1 = document.getElementById("dice01")
var dice2 = document.getElementById("dice02")
var random
var random2

var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")

function game(){
random = Math.random() * 6
random = random.toFixed(0)

random2 = Math.random() * 6
random2 = random2.toFixed(0)

dice1.innerText = random
dice2.innerText = random2

btn1.setAttribute("class","hide")
btn2.setAttribute("class","visible")
if(dice1.innerText == 6 && dice2.innerText == 6){
   alert("Player1 won")
   btn2.setAttribute("class","hide")
   btn1.setAttribute("class","hide")
   
}
}
function game2(){
random = Math.random() * 6
random = random.toFixed(0)
random2 = Math.random() * 6
random2 = random2.toFixed(0)
dice1.innerText = random
dice2.innerText = random2

btn2.setAttribute("class","hide")
btn1.setAttribute("class","visible")
if(dice1.innerText == 6 && dice2.innerText == 6){
   alert("Player2 won")
   btn2.setAttribute("class","hide")
   btn1.setAttribute("class","hide")
   
   
}

}

   
    

