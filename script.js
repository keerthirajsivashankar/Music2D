const songs = [
  { id: 1, title: "Nee Pothum Ennaku", src: "./songs/neepothum.mp4" },
  { id: 2, title: "Aasa kooda", src: "./songs/aasakooda.mp4" },
  { id: 3, title: "Muththa Mazhai", src: "./songs/muththamazhai.mp4" },
  { id: 4, title: "Vikram Title", src: "./songs/vikramtitle.mp4" },
  { id: 5, title: "Nee Kavithaigala", src: "./songs/neekavithaigala.mp4" },
  { id: 6, title: "Ullala Ullala", src: "./songs/ullalaullala.mp4" },
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
