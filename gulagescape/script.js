// if you want to change something on a DIFFERENT element, you have to call it by name (it's "id")
// https://www.w3schools.com/jsref/met_document_getelementbyid.asp
var clue2 = document.getElementById("clue2");
var x;
var l1 = document.getElementById("l1");
var l2 = document.getElementById("l2");
var l3 = document.getElementById("l3");
var l4 = document.getElementById("l4");
var l5 = document.getElementById("l5");
var l6 = document.getElementById("l6");
var timer = setInterval( clueTwo, 1000);
var timer = setInterval( keyCheck, 1000);
var key = document.getElementById("key");
var click = document.getElementById('click');
var bigdiv = document.getElementById("bigdiv");
var q1 = document.getElementById("q1");
var q2 = document.getElementById("q2");
var q3 = document.getElementById("q3");
var q4 = document.getElementById("q4");
var q5 = document.getElementById("q5");
var q6 = document.getElementById("q6");
var qdiv1 = document.getElementById("qdiv1");
var qdiv2 = document.getElementById("qdiv2");
var qdiv3 = document.getElementById("qdiv3");
var qdiv4 = document.getElementById("qdiv4");
var qdiv5 = document.getElementById("qdiv5");
var qdiv6 = document.getElementById("qdiv6");
qRandom();

function letterN(){
	document.getElementById("l1").src = "images/letterN.png";
}

function letterA(el){
	document.getElementById("l2").src = "images/letterA.png";
}

function letterS(el){
	document.getElementById("l3").src = "images/letterS.png";
}

function letterT(el){
	document.getElementById("l4").src = "images/letterT.png";
}

function letterL(el){
	document.getElementById("l5").src = "images/letterL.png";
}

function letterI(el){
	document.getElementById("l6").src = "images/letterI.png";
}

function qRandom(){
	Calculator();
	console.log(x);
	qdiv1.classList.remove("left-bottom", "right-bottom", "left-top", "right-bottom", "center-content");
	qdiv2.classList.remove("left-bottom", "right-bottom", "left-top", "right-bottom", "center-content");
	qdiv3.classList.remove("left-bottom", "right-bottom", "left-top", "right-bottom", "center-content");
	qdiv4.classList.remove("left-bottom", "right-bottom", "left-top", "right-bottom", "center-content");
	qdiv5.classList.remove("left-bottom", "right-bottom", "left-top", "right-bottom", "center-content");
	qdiv6.classList.remove("left-bottom", "right-bottom", "left-top", "right-bottom", "center-content");	
	if (x == 1){
		qdiv1.classList.add("left-bottom");
		qdiv2.classList.add("right-top");
		qdiv3.classList.add("center-content");
		qdiv4.classList.add("center-content");
		qdiv5.classList.add("right-bottom");
		qdiv6.classList.add("center-content");
	}
	else if (x == 2){
		qdiv1.classList.add("center-content");
		qdiv2.classList.add("right-bottom");
		qdiv3.classList.add("center-content");
		qdiv4.classList.add("left-bottom");
		qdiv5.classList.add("right-bottom");
		qdiv6.classList.add("right-top");
	}
	else if (x == 3){
		qdiv1.classList.add("right-top");
		qdiv2.classList.add("left-bottom");
		qdiv3.classList.add("right-bottom");
		qdiv4.classList.add("left-top");
		qdiv5.classList.add("right-bottom");
		qdiv6.classList.add("center-content");
	}
	else if (x == 4){
		qdiv1.classList.add("center-content");
		qdiv2.classList.add("right-bottom");
		qdiv3.classList.add("center-content");
		qdiv4.classList.add("left-bottom");
		qdiv5.classList.add("right-bottom");
		qdiv6.classList.add("right-top");
	}
}

function Calculator() {
   x = Math.floor((Math.random() * 4) + 1);
   return x;
}

function clueTwo(){
	if (document.getElementById("l1").src.match("images/letterN.png") && document.getElementById("l2").src.match("images/letterA.png") && document.getElementById("l3").src.match("images/letterS.png") && document.getElementById("l4").src.match("images/letterT.png") && document.getElementById("l5").src.match("images/letterL.png") && document.getElementById("l6").src.match("images/letterI.png")){
		clue2.classList.remove("opaque");
		bigdiv.classList.remove("background");
		bigdiv.classList.add("stalinbackground");
		q1.classList.add("opaque");
		q2.classList.add("opaque");
		q3.classList.add("opaque");
		q4.classList.add("opaque");
		q5.classList.add("opaque");
		q6.classList.add("opaque");
		q1.classList.remove("light");
		q2.classList.remove("light");
		q3.classList.remove("light");
		q4.classList.remove("light");
		q5.classList.remove("light");
		q6.classList.remove("light");
	}
	else {
		
	}
}

function keyCheck(){
	if (document.getElementById("l1").src.match("images/letterS.png") && document.getElementById("l2").src.match("images/letterT.png") && document.getElementById("l3").src.match("images/letterA.png") && document.getElementById("l4").src.match("images/letterL.png") && document.getElementById("l5").src.match("images/letterI.png") && document.getElementById("l6").src.match("images/letterN.png")){
		clue2.src = "images/key.png";
		clue2.classList.add("grow");
	}
	else {
		
	}
}

function nextImg(el){
	if (el.src.match("images/letterN.png")){
		el.src = "images/letterA.png";
		click.play();
	} else if (el.src.match("images/letterA.png")){
		el.src = "images/letterS.png";
		click.play();
	} else if (el.src.match("images/letterS.png")){
		el.src = "images/letterI.png";
		click.play();
	} else if (el.src.match("images/letterI.png")){
		el.src = "images/letterT.png";
		click.play();
	} else if (el.src.match("images/letterT.png")){
		el.src = "images/letterL.png";
		click.play();
	} else if (el.src.match("images/letterL.png")){
		el.src = "images/letterN.png";
		click.play();
	} else {
		
	}
}

function nextPage(){
	if(clue2.src.match("key.png")) {
		window.location.href = 'https://marianoma.github.io/FinalPhase/wireframe_a/index.html';
	} else {}
}
