const content = document.querySelector(".content"),
  Playimage = content.querySelector(".music-image img"),
  musicName = content.querySelector(".music-titles .name"),
  musicArtist = content.querySelector(".music-titles .artist"),
  Audio = content.querySelector(".main-song"),
  playBtn = content.querySelector(".play-pause"),
  playBtnIcon = content.querySelector(".play-pause span"),
  prevBtn = content.querySelector(".control-btn span:nth-child(2)"),
  nextBtn = content.querySelector("#next"),
  progressBar = content.querySelector(".progress-bar"),
  progressDetails = content.querySelector(".progress-details"),
  repeatBtn = content.querySelector("#repeat"),
  shuffle = content.querySelector("#shuffle");

let index = 1;

window.addEventListener("load", () => {
  loadData(index);
});

function loadData(indexValue) {
  const song = songs[indexValue - 1];
  musicName.innerHTML = song.name;
  musicArtist.innerHTML = song.artist;
  Playimage.src = "images/" + song.img + ".png";
 // Audio.src = "audios/" + song.audio + ".mp3";
  Audio.src = "audios/"+songs[indexValue -1].audio+".mp3";

}

playBtn.addEventListener("click", () => {
  const isMusicPaused = content.classList.contains("paused");
  if (isMusicPaused) {
    pauseSong();
  } else {
    playSong();
  }
});

function playSong() {
  content.classList.add("paused");
  playBtnIcon.innerHTML = "pause";
  Audio.play();
}

function pauseSong() {
  content.classList.remove("paused");
  playBtnIcon.innerHTML = "play_arrow";
  Audio.pause();
}

nextBtn.addEventListener("click", () => {
  nextSong();
});

prevBtn.addEventListener("click", () => {
  prevSong();
});

function nextSong() {
  index++;
  if (index > songs.length) {
    index = 1;
  }
  loadData(index);
  playSong();
}

function prevSong() {
  index--;
  if (index <= 0) {
    index = songs.length;
  }
  loadData(index);
  playSong();
}

Audio.addEventListener("timeupdate", (e) => {
  const initialTime = e.target.currentTime;
  const finalTime = e.target.duration;
  let Barwidth = (initialTime / finalTime) * 100;
  progressBar.style.width = Barwidth + "%";

  let currentTimeData = content.querySelector(".current");
  let currentMinutes = Math.floor(initialTime / 60);
  let currentSeconds = Math.floor(initialTime % 60);
  if (currentSeconds < 10) currentSeconds = "0" + currentSeconds;
  currentTimeData.innerText = currentMinutes + ":" + currentSeconds;
});

progressDetails.addEventListener("click", (e) => {
  let progressWidth = progressDetails.clientWidth;
  let clickedOffsetX = e.offsetX;
  let musicDuration = Audio.duration;
  Audio.currentTime = (clickedOffsetX / progressWidth) * musicDuration;
});

Audio.addEventListener("loadeddata", () => {
  let finalTimeData = content.querySelector(".final");
  let AudioDuration = Audio.duration;
  let finalMinutes = Math.floor(AudioDuration / 60);
  let finalSeconds = Math.floor(AudioDuration % 60);
  if (finalSeconds < 10) finalSeconds = "0" + finalSeconds;
  finalTimeData.innerText = finalMinutes + ":" + finalSeconds;
});

repeatBtn.addEventListener("click", () => {
  Audio.currentTime = 0;
});

shuffle.addEventListener("click", () => {
  var randIndex = Math.floor(Math.random() * songs.length) + 1;
  index = randIndex;
  loadData(index);
  playSong();
});

Audio.addEventListener("ended", () => {
  nextSong();
});
