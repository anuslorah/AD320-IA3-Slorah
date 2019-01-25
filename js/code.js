var document;

var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

window.addEventListener("load", function(event) {
    one.innerHTML = "<b>" + "Happy " + days[d.getDay()] + "!" + "</b>" + "<br/>" + "single click me";
  });
var one = document.getElementById("one");
one.addEventListener("click", function(event) {   
	one.style.fontSize = "xx-large";
});

var two = document.getElementById("two");
two.addEventListener("mouseenter", function(event) {   
	event.target.style.color = "red";
	setTimeout(function() {
		event.target.style.color = "";
	}, 900);
}, false);

var three = document.getElementById("three");
three.addEventListener('dblclick', function (event) {
	three.style.transform = "rotate(180deg)";
	three.style.WebkitTransform = "rotate(180deg)"; 
	setTimeout(function() {
		three.style.transform = "";
	}, 600);
});

var four = document.getElementById("four");
four.addEventListener("mouseleave", function(event) {   
	four.style.backgroundColor = "red";
});

var five = document.getElementById("five");
five.addEventListener("mouseover", function(event) {   
	five.style.border = "thick dotted red";
});