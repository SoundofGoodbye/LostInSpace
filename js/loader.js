
window.addEventListener("load", eventWindowLoaded, false);

function eventWindowLoaded () {
	canvasApp(); 
}

function canvasSupport () {
	return Modernizr.canvas; 
}