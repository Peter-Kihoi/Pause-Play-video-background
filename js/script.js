let playIcon = document.querySelector(".btn");
let video = document.querySelector(".video");


playIcon.addEventListener("click", playVideo);


function playVideo() {
    video.classList.add("active"); 

    if(video.paused) {
        video.play();
        playIcon.setAttribute("src", "images/pause.png" )
    } else {
        video.pause();
        playIcon.setAttribute("src", "images/play.png" )
    }
}