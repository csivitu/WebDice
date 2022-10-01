function correct() {
	alert("Correct ans");
}

function wrong() {
	alert("Wrong ans");
}

function darkMode() {
	var element = document.body;
	var element2 = document.querySelector("h1");
	element.classList.toggle("dark-mode");
	element2.classList.toggle("dark-mode");
}