function changeAxe(){
var hello=document.getElementById("axe1");
var roll = Math.floor((Math.random()*5)+1);

if (roll===1){
	hello.src = "rarity level one.png";
}
else if(roll===2){
	hello.src = "rarity level two.png";
}
else if(roll===3){
	hello.src = "rarity level three.png";

}else if(roll===4){
	hello.src = "rarity level four.png";
	
}else if(roll===5){
	hello.src = "rarity level five.png";

}
}

