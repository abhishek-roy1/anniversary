document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("audioPlayer");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const trackName = document.getElementById("trackName");
  const albumArt = document.getElementById("albumArt");
  const progressBar = document.getElementById("progress");
  const currentTimeDisplay = document.getElementById("currentTime");
  const durationDisplay = document.getElementById("duration");
  const volumeSlider = document.getElementById("volume");

  const playlist = [
    {
      name: "cuz u're the loml 💘",
      file: "assets/loml cuz u're the loml.mp3",
      image: "assets/img1.png"
    },
    {
      name: "sweet , just like you! 🧸",
      file: "assets/sweet.mp3",
      image: "assets/img2.jpg"
    },
    {
      name: "say yes to heaven say yes to me 🕊️",
      file: "assets/say yes to heaven.mp3",
      image: "assets/img3.jpg"
    },
    {
      name: "ily",
      file: "assets/creep.mp3",
      image: "assets/img4.jpg"
    }
  ];

  let currentTrack = 0;

  function loadTrack(index) {
    const track = playlist[index];
    audio.src = track.file;
    trackName.textContent = track.name;
    albumArt.src = track.image;
    playPauseBtn.textContent = "▶️";
  }

  function togglePlayPause() {
    if (audio.paused) {
      audio.play();
      playPauseBtn.textContent = "⏸️";
    } else {
      audio.pause();
      playPauseBtn.textContent = "▶️";
    }
  }

  function nextTrack() {
    currentTrack = (currentTrack + 1) % playlist.length;
    loadTrack(currentTrack);
    audio.play();
    playPauseBtn.textContent = "⏸️";
  }

  function prevTrack() {
    currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrack);
    audio.play();
    playPauseBtn.textContent = "⏸️";
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${secs}`;
  }

  // Update progress
  audio.addEventListener("timeupdate", () => {
    progressBar.max = audio.duration;
    progressBar.value = audio.currentTime;
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
    durationDisplay.textContent = formatTime(audio.duration);
  });

  // Allow seeking
  progressBar.addEventListener("input", () => {
    audio.currentTime = progressBar.value;
  });

  // Volume control
  volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value;
  });

  playPauseBtn.addEventListener("click", togglePlayPause);
  nextBtn.addEventListener("click", nextTrack);
  prevBtn.addEventListener("click", prevTrack);
  audio.addEventListener("ended", nextTrack);

  // Load first track
  loadTrack(currentTrack);
});
