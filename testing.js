// 1. Define the HTML for each tab
function getTabContent(tabName) {
  switch (tabName) {
    case "home":
      // Notice: The Phonograph HTML is now just plain HTML here
      return `
        <div class="flex flex-col xl:flex-row gap-12 h-full">
            <div class="w-full xl:w-[400px] shrink-0 flex flex-col items-center">
                <div class="mb-6 scale-110">
                   <div class="phono-unit">
                      <div class="phono-deck">
                        <div class="phono-platter">
                          <div class="phono-grooves">
                            <div class="phono-label"></div>
                          </div>
                        </div>
                      </div>
                      <div class="phono-arm-pivot"></div>
                      <div class="phono-arm-wand"></div>
                    </div>
                </div>

                <div class="w-full text-left mb-2">
                    <h1 class="text-4xl font-bold mb-1">The Suffering</h1>
                    <span class="bg-black text-white text-xs px-2 py-1 rounded-full uppercase tracking-wider">Classic</span>
                </div>

                <div class="w-full flex items-center gap-1 h-12 mb-6 opacity-70">
                    <div class="w-1 h-4 bg-black rounded-full"></div>
                    <div class="w-1 h-8 bg-black rounded-full"></div>
                    <div class="w-1 h-6 bg-black rounded-full"></div>
                    <div class="w-1 h-12 bg-black rounded-full"></div>
                    <div class="w-1 h-5 bg-black rounded-full"></div>
                    <span class="ml-auto font-mono text-sm">3:35</span>
                </div>

                <div class="w-full flex items-center justify-between px-4">
                     <button class="hover:text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 0 1 0-1.953l7.108-4.062A1.125 1.125 0 0 1 21 8.688v8.123ZM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 0 1 0-1.953L9.567 7.71a1.125 1.125 0 0 1 1.683.977v8.123Z" /></svg></button>
                     <button class="bg-black text-white p-4 rounded-full hover:scale-105 transition-transform shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" /></svg></button>
                     <button class="hover:text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 0 1 0 1.953l-7.108 4.062A1.125 1.125 0 0 1 3 16.81V8.688ZM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 0 1 0 1.953l-7.108 4.062a1.125 1.125 0 0 1-1.683-.977V8.688Z" /></svg></button>
                </div>
            </div>

            <div class="flex-1">
                <h2 class="text-4xl font-bold mb-4">Music Categories</h2>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                     <div class="aspect-square bg-gray-300 rounded border-2 border-black flex items-center justify-center font-bold">Chaos</div>
                     <div class="aspect-square bg-gray-400 rounded border-2 border-black flex items-center justify-center font-bold">Simple</div>
                     <div class="aspect-square bg-gray-300 rounded border-2 border-black flex items-center justify-center font-bold">Bad</div>
                </div>
            </div>
        </div>
      `;

    case "favorites":
      return `<h1 class="text-4xl font-bold">Favorites Tab</h1><p>Your content goes here...</p>`;
    case "library":
      return `<h1 class="text-4xl font-bold">Library Tab</h1><p>Your content goes here...</p>`;
    case "albums":
      return `<h1 class="text-4xl font-bold">Albums Tab</h1><p>Your content goes here...</p>`;
    default:
      return `<h1 class="text-4xl">Select a tab</h1>`;
  }
}

// 2. Logic to handle clicks
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".tab-btn");
  if (!btn) return; // If we didn't click a tab button, do nothing

  // 1. Get which tab we clicked
  const tabName = btn.getAttribute("data-tab");

  // 2. Update the Content Div
  const contentArea = document.getElementById("tab-content");
  contentArea.innerHTML = getTabContent(tabName);

  // 3. Update Button Styles (Visual Feedback)
  document.querySelectorAll(".tab-btn").forEach((b) => {
    b.classList.remove("bg-black", "text-white", "border-black");
    b.classList.add("border-transparent");
    b.querySelector("svg").classList.remove("text-white");
  });

  // Highlight the clicked one
  btn.classList.remove("border-transparent");
  btn.classList.add("bg-black", "text-white", "border-black");
  btn.querySelector("svg").classList.add("text-white");
});

// 3. Load Home by default
const defaultTab = document.querySelector('[data-tab="home"]');
if (defaultTab) {
  // Simulate a click on the Home button to load it
  defaultTab.click();
}
