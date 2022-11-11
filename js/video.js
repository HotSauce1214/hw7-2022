var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay)
	console.log("Loop is set to" + video.autoplay)

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= .90
	console.log("Speed is", video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate *= 1.11
	console.log("Speed is", video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Video");
	if ((video.currentTime += 10) >= video.duration) {
		video.currentTime = 0
		video.pause()
	}
	else {
		video.currentTime += 10
	}
	console.log("Location is", video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true) {
		video.muted = false
		document.getElementById("mute").innerHTML = "Mute"
		console.log("Unmuting Video")
	}
	else {
		video.muted = true
		document.getElementById("mute").innerHTML = "Unmute"
		console.log("Muting Video")
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Slider Used");
	volume = this.value / 100
	video.volume = volume
	document.querySelector("#volume").innerHTML = volume * 100 + "%"
});

document.querySelector('#vintage').addEventListener("click", function() {
	document.body.classList.add("oldSchool")
});

document.querySelector('#orig').addEventListener("click", function() {
	document.body.classList.remove("oldSchool")
});



// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });