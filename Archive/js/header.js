var types = new Array("objc", 
 "about",
 "feature-matrix", 
 "features", 
 "latex", 
 "support", "wiki", "faq");
var step = 0;
var running = true;

function showImage(showType) {

	for(var i = 0; i < types.length; ++i) {

		if(types[i] == showType) {
			if(document.getElementById(types[i])) 
				document.getElementById(types[i]).style.display = 'block';
			if(document.getElementById("handle_" + types[i]))
				document.getElementById("handle_" + types[i]).className = 'highlight';
			if(document.getElementById("link_" + types[i]))
				document.getElementById("link_" + types[i]).className = 'highlight';

		}

		else {
			if(document.getElementById(types[i])) 
				document.getElementById(types[i]).style.display = 'none';
			if(document.getElementById("handle_" + types[i]))
				document.getElementById("handle_" + types[i]).className = '';
			if(document.getElementById("link_" + types[i]))
				document.getElementById("link_" + types[i]).className = '';

		}
	}
}

function hoverImage(type) {
	running = false;
	showImage(type);
}

function endHoverImage() {
	running = true;
}

function advanceStep() {

    var pathname = window.location.pathname;
	
    if(pathname == '/' || pathname == '/index.shtml') {
		if(running) {
			step++;
			if(step >= types.length) step = 0;
			showImage(types[step]);
		}
		setTimeout("advanceStep()", 4000);
    }

	else {
		for(var i = 0; i < types.length; ++i) {
			if(pathname.indexOf(types[i]) != -1) {
				hoverImage(types[i]);
				break;
			}
		}
	} 

}
function getDevicePixelRatio() {
	if(window.devicePixelRatio === undefined) return 1; // No pixel ratio available. Assume 1:1.
	return window.devicePixelRatio;

}

function processHighResImages() {
	if(getDevicePixelRatio() > 1) {
var images = document.getElementsByClassName('highRes');
		for(var i = 0; i < images.length; i++) {
images[i].src  = images[i].src.replace(/\.([^\.]+)$/, '@2x.$1');
}
}
}

document.getElementById("toplogo").width=Math.min(460, document.getElementById("header").offsetWidth*0.7);