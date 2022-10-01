var streak=0;
var highestStreak=0;

function correct() {
	alert("Correct ans");
	streak++;
	document.getElementById("cs").innerHTML = streak;
	document.getElementById("hs").innerHTML = highestStreak;
}

function wrong() {
	alert("Wrong ans");
	highestStreak = streak;
	streak=0;
	document.getElementById("cs").innerHTML = streak;
	document.getElementById("hs").innerHTML = highestStreak;
}
