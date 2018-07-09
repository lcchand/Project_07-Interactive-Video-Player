thetime = videoTranscriptSpans[15].dataset.timestart;
splitTheTime = thetime.split(";");

for (i = 0; i < splitthetime.length; i++) {
console.log(splitthetime[i]);
}

for (i = 0; i < videoTranscriptSpans.length; i++) {
console.log(videoTranscriptSpans[i].dataset.timestart);
}


// data-timestart 00:00:00.240
// data-timeend 00:00:04.130
var h = parseInt(videoTranscriptSpans[0].dataset.timestart.substr(0, 2) * 3600);
var m = parseInt(videoTranscriptSpans[0].dataset.timestart.substr(3, 2) * 60);
var s = parseInt(videoTranscriptSpans[0].dataset.timestart.substr(6, 6));
var hms = h + m + s; // Total Seconds for Hour, Minutes & Seconds combined


// Log Event Objects to the Console - anything that is clicked on the page
document.addEventLister('click', (event) => {
    console.log(event.target);
});


// Example: Only change Case on LI elements - Requires a <DIV id='listDiv'>
listDiv.addEventLister("mouseover", (event) => {
    if (event.target.tagName == "LI") {
	event.target.textContent = event.target.textContent.toUpperCase();
    }
});

listDiv.addEventLister("mouseout", (event) => {
    if (event.target.tagName == "LI") {
	event.target.textContent = event.target.textContent.toLowerCase();
    }
});




// Full Screen Button Object - Toggle Fullscreen state for Browser
var fullScreenButton = document.getElementById("fullscreen");
fullScreenButton.onclick = function() {
    if (isFullScreen()) {
	if (document.exitFullscreen) document.exitFullscreen();
	else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
	else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
	else if (document.msExitFullscreen) document.msExitFullscreen();
    }
    if (video1.requestFullscreen) video1.requestFullscreen();
    else if (video1.mozRequestFullScreen) video1.mozRequestFullScreen();
    else if (video1.webkitRequestFullscreen) video1.webkitRequestFullscreen();
};

// Check if in Fullscreen Mode
var isFullScreen = function() {
   return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
};

