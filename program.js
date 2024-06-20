var audio = new Audio('watasigma.mp3');
document.getElementsByTagName("svg")[0].addEventListener("mousedown", function(){
    audio.play();
})
document.getElementsByTagName("svg")[0].addEventListener("mouseup", function(){
    audio.pause();
    audio.currentTime = 0;
})