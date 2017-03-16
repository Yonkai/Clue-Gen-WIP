function backgroundChange() {
	var roll2 = Math.floor((Math.random()*666)+1); // changes this number or add other ranges for other image backgrounds/secrets
if (roll2===3){
	document.body.style.backgroundImage = "url(Saradomin.png)";
	
	var truth = new Audio('Illuminati Confirmed.mp3');
	truth.play();

}else{
	document.body.style.backgroundColor = getRandomColor();
	document.body.style.backgroundImage = "";
}

}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)]; // Good example of Javascript Coercion.
    }
    return color;
}



