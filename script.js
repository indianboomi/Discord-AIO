function changeVideo(videoFile) {
    const video = document.getElementById("mainVideo");
    video.src = videoFile;
    video.load();
    video.play();
}
