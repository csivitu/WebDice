var streak=0;

function correct() {
	alert("Correct ans");
	streak++;
	document.getElementById("box").innerHTML = streak;
}

function wrong() {
	alert("Wrong ans");
	streak=0;
	document.getElementById("box").innerHTML = streak;
}
