function changeAxe(){
var hello=document.getElementById("axe1");
var cow = Math.floor((Math.random()*5)+1);

if (cow===1){
	hello.src = "rarity level one.png";
}
else if(cow===2){
	hello.src = "rarity level two.png";
}
else if(cow===3){
	hello.src = "rarity level three.png";

}else if(cow===4){
	hello.src = "rarity level four.png";
	
}else if(cow===5){
	hello.src = "rarity level five.png";

}
}
// Make the whole generation into a loop for each item, use an incrementer that goes through each object.
// Make sure to use OOP type stuff on the images to make it as painless as possible.