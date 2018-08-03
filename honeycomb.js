var hexagons = document.getElementsByClassName("hexagon");
var maxDelay = 2;
var minLength = 2;
var maxLength = 4;

for (var i = 0; i < hexagons.length; i++) {
	var randomDelay = Math.random() * maxDelay;
	hexagons[i].style.animationDelay = randomDelay + "s";

	var randomLength = Math.random() * (maxLength - minLength);
	randomLength += minLength;
	hexagons[i].style.animationDuration = randomLength + "s";

	console.log("hexagon" + i);
	console.log(randomDelay);
	console.log(randomLength);
}