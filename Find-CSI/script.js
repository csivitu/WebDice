var streak = 0;
var highestStreak = 0;

function correct() {
	alert("Correct ans");
	streak++;
	document.getElementById("cs").innerHTML = streak;
	document.getElementById("hs").innerHTML = highestStreak;
	nextImage();
	randomcsi();
}

function wrong() {
	alert("Wrong ans");
	highestStreak = streak;
	streak = 0;
	document.getElementById("cs").innerHTML = streak;
	document.getElementById("hs").innerHTML = highestStreak;
	nextImage();
}

function darkMode() {
	var element = document.body;
	var element2 = document.querySelector("h1");
	element.classList.toggle("dark-mode");
	element2.classList.toggle("dark-mode");
}

shinchanImages = ['./s1.jpg', './s2.jpg', './s3.jpg', './s4.jpg', './s5.jpg'];

function nextImage() {
	//Choosing Random image
	img = shinchanImages[Math.floor(Math.random() * shinchanImages.length)];
	//Setting that random image
	document.getElementById('shinchan').src = img;
	var winWidth1 = window.innerWidth;
	var winHeight1 = window.innerHeight;

	randomTop1 = getRandomNumber(0, winHeight1);
	randomLeft1 = getRandomNumber(0, winWidth1);

	document.getElementById('shinchan').style.top = randomTop1 + "px";
	document.getElementById('shinchan').style.left = randomLeft1 + "px";
}

function randomcsi() {
	document.getElementById('csi').src = 'csi logo.jpg';
	var winWidth2 = window.innerWidth;
	var winHeight2 = window.innerHeight;

	randomTop2 = getRandomNumber(0, winHeight2);
	randomLeft2 = getRandomNumber(0, winWidth2);

	document.getElementById('csi').style.top = randomTop2 + "px";
	document.getElementById('csi').style.left = randomLeft2 + "px";
}

function getRandomNumber(min, max) {

	return Math.random() * (max - min) + min;

}

var score = 2;
function strk() {
	for (var i = 1; i <= score; i++) {
		add();
	}

	if (score < 1500) {
		score = score * 2;
	}
	else {
		score = 2
	}
}
function add(submit) {

	var element = document.createElement("input");
	element.className = "newimg"
	element.type = submit;
	element.name = submit;
	element.onclick = function () {
		alert("Wrong");
		window.location.reload();
	};
	var foo = document.getElementById("Spann");
	foo.appendChild(element);
}


function shuffle() {
	var container = document.getElementById("container");
	var elementsArray = Array.prototype.slice.call(container.getElementsByClassName('mx'));
	elementsArray.forEach(function (element) {
		container.removeChild(element);
	})
	shuffleArray(elementsArray);
	elementsArray.forEach(function (element) {
		container.appendChild(element);
	})
}

function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) 
	{
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}