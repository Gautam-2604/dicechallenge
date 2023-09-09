var randonNumber1=Math.random()*6;
var Number1=Math.floor(randonNumber1)+1;
var DiceImage1="./images/dice"+Number1+".png";
var randonNumber2=Math.random()*6;
var Number2=Math.floor(randonNumber2)+1;
var DiceImage2="./images/dice"+Number2+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",DiceImage1);
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",DiceImage2);

if(Number1>Number2){
    document.querySelector("h1").innerHTML="Player1 Wins!!";
}
else if(Number1<Number2){
    document.querySelector("h1").innerHTML="Player2 Wins!!";
}
else{
    document.querySelector("h1").innerHTML="Draw!!";
}
