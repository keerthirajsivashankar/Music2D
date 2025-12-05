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
