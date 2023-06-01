let audio;
      let progress;
  
    document.querySelector(".btn").addEventListener("click", function () {
      if (audio && !audio.paused) {
        audio.pause();
        return;
      }
  
      audio = new Audio("검정치마(The Black Skirts) - Diamond.mp3");
      audio.loop = true;
      audio.volume = 0.5;
      audio.play();
  
      progress = setInterval(updateProgress, 100);
    });
    function updateProgress() {
      if (audio && audio.duration) {
        const progressBar = document.querySelector(".progress-bar");
        progressBar.value = (audio.currentTime / audio.duration) * 100;
      }
    }