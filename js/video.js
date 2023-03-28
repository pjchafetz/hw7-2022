let video;

// On page load, get the video element and disable autoplay and looping
// This script is loaded with defer, so the video element is guaranteed to exist in the DOM
window.addEventListener("load", () => {
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
});

// Update the volume display and the video volume, and play the video
document.querySelector("#play").addEventListener("click", () => {
	const vol = document.querySelector("#slider").value;
	document.querySelector("#volume").innerHTML = vol + "%";
	video.volume = vol / 100;
	video.play();
});

// Pause the video
document.querySelector("#pause").addEventListener("click", () => {
	video.pause();
});

// Slow down the video by 10% and log the playback rate
document.querySelector("#slower").addEventListener("click", () => {
	video.playbackRate *= 0.9;
	console.log("Slower - Playback rate:", video.playbackRate);
});

// Speed up the video by the inverse proportional rate (11.1%) and log the playback rate
document.querySelector("#faster").addEventListener("click", () => {
	video.playbackRate /= 0.9;
	console.log("Faster - Playback rate:", video.playbackRate);
});

// Skip ahead 10 seconds and log the current time
// If the video is within 10 seconds of the end, start over
document.querySelector("#skip").addEventListener("click", () => {
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}
	console.log("Skip Ahead - Current Time: ", video.currentTime);
	video.play();
});

// Mute the video and update the button text
document.querySelector("#mute").addEventListener("click", () => {
	video.muted = !video.muted;
	if (video.muted) {
		document.querySelector("#mute").innerHTML = "Unmute";
	} else {
		document.querySelector("#mute").innerHTML = "Mute";
	}
});

// On change, update the volume display and the video volume
document.querySelector("#slider").addEventListener("change", () => {
	const vol = document.querySelector("#slider").value;
	document.querySelector("#volume").innerHTML = vol + "%";
	video.volume = vol / 100;
});

// Apply the oldSchool class to the video
document.querySelector("#vintage").addEventListener("click", () => {
	video.classList.add("oldSchool");
});

// Remove the oldSchool class from the video
document.querySelector("#orig").addEventListener("click", () => {
	video.classList.remove("oldSchool");
});
