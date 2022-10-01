function correct() {
	alert("Correct ans");
}

function wrong() {
	alert("Wrong ans");
}
var score = 2;
function streak() {
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
	 element.className="newimg"
	element.type = submit; 
	element.name = submit; 
	element.onclick = function() {
	  alert("Wrong");
	  window.location.reload();
	};
  
	var foo = document.getElementById("Spann");  
	foo.appendChild(element);
  }


