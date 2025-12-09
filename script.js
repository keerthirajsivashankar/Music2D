const songs = [
  {
    id: 1,
    title: "Nee Pothum Ennaku",
    src: "./songs/neepothum.mp3",
    category: "Melonchaly",
    artist: "Pradeep",
    imageulr: "./images/neepothum.jpg",
    fav: true,
    liked: true,
  },
  {
    id: 2,
    title: "Aasa kooda",
    src: "./songs/aasakooda.mp3",
    category: "Love",
    artist: "Sai Abyankar",
    imageulr: " ./images/aasakooda.jpg",
    fav: false,
    liked: true,
  },
  {
    id: 3,
    title: "En Iniya Thanimai",
    src: "./songs/thanimai.mp3",
    category: "Motivation",
    artist: "Sid SriRam",
    imageulr: "./images/thanimai.jpg",
    fav: true,
    liked: false,
  },
  {
    id: 4,
    title: "Vikram Title",
    src: "./songs/vikramtitle.mp3",
    category: "Action",
    artist: "Anirudh",
    imageulr: " ./images/vikramtitle.jpg",
    fav: false,
    liked: true,
  },
  {
    id: 5,
    title: "Nee Kavithaigala",
    src: "./songs/neekavithaigala.mp3",
    category: "Romantic",
    artist: "Pradeep Kumar",
    imageulr: "./images/neekavithai.jpg",
    fav: false,
    liked: true,
  },
  {
    id: 6,
    title: "Ullaallaa Ullaallaa",
    src: "./songs/ullaallaa.mp3",
    category: "Fun",
    artist: "Anirudh",
    imageulr: "./images/ullaallaa.jpg",
    fav: false,
    liked: false,
  },
  {
    id: 7,
    title: "Sithira Puthiri",
    src: "./songs/sithiraputhiri.mp3",
    category: "Love",
    artist: "Sai Abyankar",
    imageulr: "./images/sithitaputhiri.jpg",
    fav: false,
    liked: false,
  },
  {
    id: 8,
    title: "Power House",
    src: "./songs/powerhouse.mp3",
    category: "Action",
    artist: "Anirudh",
    imageulr: "./images/powerhouse.jpg",
    fav: false,
    liked: false,
  },
  {
    id: 9,
    title: "Journey",
    src: "./songs/journey.mp3",
    category: "Motivation",
    artist: "Anirudh",
    imageulr: "./images/journey.jpg",
    fav: true,
    liked: false,
  },
  {
    id: 10,
    title: "Muththa Mazhai",
    src: "./songs/muththamazhai.mp3",
    category: "Love",
    artist: "Chinmayi",
    imageulr: " ./images/muththamazhai.jpg",
    fav: false,
    liked: true,
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
                    class="flex items-center justify-between p-2 hover:bg-gray-200 rounded-lg transition group shadow-md hover:shadow-lg transition duration-300 border border-gray-400"
                  >
                    <div class="flex items-center gap-4">
                      <img
                        src="${song.imageulr}"
                        class="w-12 h-12 rounded-md border border-gray-300 object-cover"
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

function likedsongs() {
  const wholeList = document.getElementById("whole-list");

  songs.forEach((song) => {
    if (song.liked) {
      const listItem = `<li
              class="p-4 border border-gray-400 shadow-sm md:shadow-lg flex justify-between items-center  cursor-pointer hover:bg-gray-100 transition rounded-xl"
            >
              <div class="flex items-center gap-4">
                <div
                  class="w-12 h-12 bg-black text-white flex items-center justify-center rounded-md"
                >
                  <img
                        src="${song.imageulr}"
                        class="w-12 h-12 rounded-md border border-gray-300 object-cover"
                      />
                </div>
                <div>
                  <h3 class="font-bold text-xl">${song.title}</h3>
                  <p class="text-gray-500 text-sm">${song.artist}</p>
                </div>
              </div>
              <button
                      onclick="playSpecificSong(${song.id - 1})"
                      class="border-2 border-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-black hover:text-white transition"
                    >
                      <i class="fa-solid fa-play"></i>
                    </button>
            </li>`;
      wholeList.innerHTML += listItem;
    }
  });
}

likedsongs();

function allSongsList() {
  const library = document.getElementById("library");
  songs.forEach((song) => {
    // Note: Check if your property is named 'img' or 'imageulr' (typo?)
    // I used 'song.img' based on our previous step.
    const songItem = `
      <div class="w-64 border border-gray-300 bg-gray-200 shadow-md rounded-lg hover:shadow-xl transition duration-300 overflow-hidden">
        
        <img 
          src="${song.imageulr}" 
          class="w-full h-58 object-cover" 
          alt="${song.title}" 
        />
        
        <div class="p-2 flex justify-between items-center">
          <div class="overflow-hidden">
             <h2 class="font-bold truncate w-32">${song.title}</h2>
            <p class="text-sm text-gray-600 truncate">${song.artist}</p>
          </div>

          <button
            onclick="playSpecificSong(${song.id})" 
            class="shrink-0 border-2 border-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            <i class="fa-solid fa-play"></i>
          </button>
        </div>
      </div>`;

    library.innerHTML += songItem;
  });
}

allSongsList();

function CategoryList() {
  let categories = [];
  songs.forEach((song) => {
    if (!categories.includes(song.category)) {
      categories.push(song.category);
    }
  });
  return categories;
}

const categories = CategoryList();
console.log(categories);

function displayCategories() {
  const categoryContainer = document.getElementById("albums-container");
  categories.forEach((category) => {
    const categoryItem = `
     <div
            class="flex gap-4 flex-col justify-center items-center w-full"
            
          >
            <h1 class="font-bold text-3xl border-b border-black">${category}</h1>
            <div
              class=" flex flex-wrap justify-center items-center gap-4 w-full"
              id="${category}"
            ></div>
      </div>
    `;
    categoryContainer.innerHTML += categoryItem;
    const currentCategoryDiv = document.getElementById(category);
    songs.forEach((song) => {
      if (song.category === category) {
        const songHtml = `<div
                class="w-64 border border-gray-300 bg-gray-200 shadow-md rounded-lg hover:shadow-xl transition duration-300 overflow-hidden"
              >
                <img
                  src="${song.imageulr}"
                  class="w-full h-58 object-cover"
                  alt="${song.title}"
                />

                <div class="p-2 flex justify-between items-center">
                  <div class="overflow-hidden">
                    <h2 class="font-bold truncate w-32">${song.title}</h2>
                    <p class="text-sm text-gray-600 truncate">${song.artist}</p>
                  </div>

                  <button
                    onclick="playSpecificSong(${song.id - 1})"
                    class="shrink-0 border-2 border-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-black hover:text-white transition"
                  >
                    <i class="fa-solid fa-play"></i>
                  </button>
                </div>
              </div>`;
        currentCategoryDiv.innerHTML += songHtml;
      }
    });
  });
}

displayCategories();
