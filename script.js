const songs = [
  {
    id: 1,
    title: "Nee Pothum Ennaku",
    src: "./songs/neepothum.mp3",
    category: "Melonchaly",
    artist: "Pradeep",
    imageulr: "./images/neepothum.jpg",
    fav: true,
  },
  {
    id: 2,
    title: "Aasa kooda",
    src: "./songs/aasakooda.mp3",
    category: "Love",
    artist: "Sai Abyankar",
    imageulr: " ./images/aasakooda.jpg",
    fav: false,
  },
  {
    id: 3,
    title: "Muththa Mazhai",
    src: "./songs/muththamazhai.mp3",
    category: "Love",
    artist: "Chinmayi",
    imageulr: " ./images/muththamazhai.jpg",
    fav: false,
  },
  {
    id: 4,
    title: "Vikram Title",
    src: "./songs/vikramtitle.mp3",
    category: "Action",
    artist: "Anirudh",
    imageulr: " ./images/vikramtitle.jpg",
    fav: false,
  },
  {
    id: 5,
    title: "Nee Kavithaigala",
    src: "./songs/neekavithaigala.mp3",
    category: "Romantic",
    artist: "Pradeep Kumar",
    imageulr: "./images/neekavithai.jpg",
    fav: true,
  },
];

function switchTab(tabName) {
  // 1. Hide all tab contents
  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.add("hidden");
  });

  // 2. Show the selected tab content
  const selectedTab = document.getElementById("tab-" + tabName);
  if (selectedTab) {
    selectedTab.classList.remove("hidden");
  }

  // 3. Reset all buttons (white bg, no border)
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("text-gray-900");
    btn.classList.add("text-gray-500");
  });

  // 4. Highlight the active button (black bg)
  const activeBtn = document.getElementById("btn-" + tabName);
  if (activeBtn) {
    activeBtn.classList.add("text-gray-900");
  }
}

// Audio engine

const audio = new Audio();
let currentSongIndex = 0;
let isPlaying = false;

const SongTitleDis = document.getElementById("song-title");
const SongArtistDis = document.getElementById("song-artist");
const playBtn = document.getElementById("play-pause-btn");
const NextBtn = document.getElementById("next-btn");
const PrevBtn = document.getElementById("prev-btn");
const loopBtn = document.getElementById("loop-btn");

function toggleLoop() {
  if (audio.loop) {
    // Turn OFF
    audio.loop = false;
    // Visuals: Make it gray (inactive)
    loopBtn.classList.remove("text-black");
    loopBtn.classList.add("text-gray-400");
  } else {
    // Turn ON
    audio.loop = true;
    // Visuals: Make it black (active)
    loopBtn.classList.remove("text-gray-400");
    loopBtn.classList.add("text-black");
  }
}

function loadSong(song) {
  audio.src = song.src;
  SongTitleDis.innerHTML = song.title;
  SongArtistDis.innerHTML = song.artist;
}

function playSong() {
  audio.play();
  isPlaying = true;
  playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
}

function pauseSong() {
  audio.pause();
  isPlaying = false;
  playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
}

function togglePlayPause() {
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
}

function nextSong() {
  currentSongIndex++;
  if (currentSongIndex > songs.length - 1) {
    currentSongIndex = 0;
  }
  loadSong(songs[currentSongIndex]);

  if (isPlaying) {
    playSong();
  }
}

function prevSong() {
  currentSongIndex--;
  if (currentSongIndex < 0) {
    currentSongIndex = songs.length - 1;
  }
  loadSong(songs[currentSongIndex]);

  if (isPlaying) {
    playSong();
  }
}

loadSong(songs[currentSongIndex]);

playBtn.addEventListener("click", togglePlayPause);
NextBtn.addEventListener("click", nextSong);
PrevBtn.addEventListener("click", prevSong);
loopBtn.addEventListener("click", toggleLoop);

// --- PROGRESS BAR SELECTORS ---
const progressBar = document.getElementById("progress-bar");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");

// 1. Update Progress Bar & Time as song plays
audio.addEventListener("timeupdate", () => {
  // Calculate percentage (Current / Total * 100)
  // "|| 0" handles the case where duration is NaN (not loaded yet)
  const progressPercent = (audio.currentTime / audio.duration) * 100 || 0;

  // Update the slider value
  progressBar.value = progressPercent;

  // Update the text numbers
  currentTimeEl.innerText = formatTime(audio.currentTime);
  durationEl.innerText = formatTime(audio.duration || 0);
});

// 2. Seek (Jump to time) when user drags slider
progressBar.addEventListener("input", () => {
  // Calculate new time: (SliderValue / 100) * TotalDuration
  const seekTime = (progressBar.value / 100) * audio.duration;
  audio.currentTime = seekTime;
});

// 3. Helper Function: Convert seconds (125) to format (2:05)
function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  // Add a '0' if seconds are less than 10 (e.g., "2:05" instead of "2:5")
  return `${min}:${sec < 10 ? "0" : ""}${sec}`;
}

// 4. Auto-play next song when current one ends
audio.addEventListener("ended", () => {
  // If Loop is ON, just play again
  if (audio.loop) {
    audio.currentTime = 0;
    audio.play();
  } else {
    // Otherwise, go to next song
    nextSong();
  }
});

// Function to play a specific song by its Index ID
function playSpecificSong(songIndex) {
  // 1. Update the global index
  currentSongIndex = songIndex;

  // 2. Load the data (Title, Artist, Audio Source)
  loadSong(songs[currentSongIndex]);

  // 3. Start Playing immediately
  playSong();
}

function separateFavSongs() {
  let favSongs = [];
  for (let i = 0; i < songs.length; i++) {
    if (songs[i].fav) {
      favSongs.push(songs[i]);
    }
  }
  return favSongs;
}

function addFavSongs() {
  const favSongContainer = document.getElementById("song-container");
  favSongContainer.innerHTML = "";
  const favoriteSongs = separateFavSongs();

  favoriteSongs.forEach((song) => {
    const SongHtml = `
    <div
                    class="flex items-center justify-between p-2 hover:bg-gray-200 rounded-lg transition group shadow-md hover:shadow-lg transition duration-300"
                  >
                    <div class="flex items-center gap-4">
                      <img
                        src="${song.imageulr}"
                        class="w-12 h-12 rounded-md border-2 border-black object-cover"
                      />
                      <div>
                        <h4 class="font-bold leading-none">
                         ${song.title}
                        </h4>
                        <p class="text-xs text-gray-500">${song.artist}</p>
                      </div>
                    </div>

                    <button
                      onclick="playSpecificSong(${song.id - 1})"
                      class="border-2 border-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-black hover:text-white transition"
                    >
                      <i class="fa-solid fa-play"></i>
                    </button>
                  </div>
`;

    favSongContainer.innerHTML += SongHtml;
  });
}

addFavSongs();
