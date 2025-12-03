console.log("Script loaded successfully.");
//theader component
class THeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
         <header
      class="w-full p-4 flex flex-wrap md:flex-nowrap justify-between items-center gap-4"
    >
      <!--sector 1-->
      <div class="w-full md:w-[70%] flex flex-row items-center gap-4">
        <div class="flex flex-row items-center shrink-0">
          <img src="./assets/logo.png" alt="" class="h-[40px] rounded-full" />
          <h1 class="text-3xl md:text-5xl ml-2 font-bold">Music2D</h1>
        </div>

        <div
          class="flex items-center flex-1 bg-[#e4e4e4] border-2 border-black rounded-full px-4 py-2"
        >
          <button class="text-black mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>

          <input
            type="text"
            placeholder="Search..."
            class="w-full bg-transparent outline-none border-none placeholder-gray-600 text-black"
          />
        </div>
      </div>
      <!--sector 2-->
      <div
        class="w-full md:w-auto flex flex-row justify-end md:justify-end items-center  gap-4"
      >
        <button class="hover:text-gray-600 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-7 h-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33h.01A1.65 1.65 0 0011 3.09V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51h.01a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V12a1.65 1.65 0 00.33 1.5z"
            />
          </svg>
        </button>

        <button class="hover:text-gray-600 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-7 h-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </button>

        <button class="hover:text-gray-600 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-7 h-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163z"
            />
          </svg>
        </button>
      </div>
    </header> `;
  }
}

customElements.define("t-header", THeader);

//tsidebar component
// 1. Define the Icon Sidebar
class TSidebar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <aside class="fixed bottom-0 left-0 w-full h-20 z-50 md:relative md:h-screen md:w-24 bg-[#e4e4e4] flex flex-row md:flex-col items-center justify-around md:justify-start md:gap-8  md:border-t-0 md:border-r-0 border-black md:py-6">
        
        <button data-tab="home" class="tab-btn p-3 md:p-4 rounded-full border-2 border-transparent hover:border-black hover:bg-white transition-all group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform">
            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
        </button>

        <button data-tab="favorites" class="tab-btn p-3 md:p-4 rounded-full border-2 border-transparent hover:border-black hover:bg-white transition-all group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </button>

        <button data-tab="library" class="tab-btn p-3 md:p-4 rounded-full border-2 border-transparent hover:border-black hover:bg-white transition-all group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform">
            <path stroke-linecap="round" stroke-linejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Z" />
          </svg>
        </button>

        <button data-tab="albums" class="tab-btn p-3 md:p-4 rounded-full border-2 border-transparent hover:border-black hover:bg-white transition-all group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
          </svg>
        </button>

        <button data-tab="equalizer" class="tab-btn p-3 md:p-4 rounded-full border-2 border-transparent hover:border-black hover:bg-white transition-all group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
          </svg>
        </button>
        
         <button data-tab="offers" class="tab-btn p-3 md:p-4 rounded-full border-2 border-transparent hover:border-black hover:bg-white transition-all group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
          </svg>
        </button>

      </aside>
    `;
  }
}

customElements.define("t-sidebar", TSidebar);
// 2. The Content Generator (Returns HTML based on tab name)
function getTabContent(tabName) {
  switch (tabName) {
    case "home":
      return `
       <div class="flex flex-col  items-center gap-8 mb-8 w-[80%]">
        <!-- THE NEW MINI COMPONENT -->
        <div>
            <h1 class="text-4xl font-bold">Good Evening!</h1>
            <p class="text-gray-600">Ready to spin some tracks?</p>
        </div>
        <mini-phonograph></mini-phonograph>
        
        
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div class="h-32 bg-purple-200 w-[200px] rounded-lg border-2 border-black flex items-center justify-center font-bold">Mix 1</div>
        <div class="h-32 bg-blue-200 w-[200px] rounded-lg border-2 border-black flex items-center justify-center font-bold">Top Hits</div>
        <div class="h-32 bg-green-200 w-[200px] rounded-lg border-2 border-black flex items-center justify-center font-bold">Podcasts</div>
    </div>
        
      `;
    case "favorites":
      return `
        <h1 class="text-4xl font-bold mb-4">Liked Songs 💖</h1>
        <ul class="space-y-2">
            <li class="p-3 border-2 border-black rounded flex justify-between hover:bg-gray-100"><span>Starboy</span> <span>3:50</span></li>
            <li class="p-3 border-2 border-black rounded flex justify-between hover:bg-gray-100"><span>After Hours</span> <span>6:01</span></li>
            <li class="p-3 border-2 border-black rounded flex justify-between hover:bg-gray-100"><span>Die For You</span> <span>4:20</span></li>
        </ul>
      `;
    case "library":
      return `
        <h1 class="text-4xl font-bold mb-4">Your Library</h1>
        <div class="flex gap-4">
            <div class="w-32 h-32 bg-gray-300 rounded border-2 border-black"></div>
            <div class="w-32 h-32 bg-gray-300 rounded border-2 border-black"></div>
        </div>
      `;
    case "albums":
      return `
        <h1 class="text-4xl font-bold mb-4">Albums</h1>
        <div class="grid grid-cols-4 gap-4">
            <div class="aspect-square rounded-full border-2 border-black bg-black animate-spin-slow"></div>
            <div class="aspect-square rounded-full border-2 border-black bg-gray-800"></div>
        </div>
      `;
    case "equalizer":
      return `
        <h1 class="text-4xl font-bold mb-4">Equalizer</h1>
        <div class="flex gap-4 items-end h-40 border-b-2 border-black pb-2">
            <div class="w-8 h-[60%] bg-black"></div>
            <div class="w-8 h-[80%] bg-black"></div>
            <div class="w-8 h-[40%] bg-black"></div>
            <div class="w-8 h-[90%] bg-black"></div>
            <div class="w-8 h-[50%] bg-black"></div>
        </div>
      `;
    case "offers":
      return `
        <h1 class="text-4xl font-bold mb-4">Premium Plans</h1>
        <div class="p-6 border-2 border-black bg-yellow-200 rounded-lg">
            <h2 class="text-2xl font-bold">Get Music2D Pro</h2>
            <p>No ads, offline listening.</p>
            <button class="mt-4 px-4 py-2 bg-black text-white rounded font-bold">Buy Now</button>
        </div>
      `;
    default:
      return `<h1 class="text-4xl">Select a tab</h1>`;
  }
}

// 3. The Click Listener
document.addEventListener("click", (e) => {
  // Use closest() to find the button even if they click the icon SVG
  const btn = e.target.closest(".tab-btn");
  if (!btn) return;

  const tabName = btn.getAttribute("data-tab");
  const contentArea = document.getElementById("tab-content");

  // Load Content
  contentArea.innerHTML = getTabContent(tabName);

  // Styling: Reset all buttons
  document.querySelectorAll(".tab-btn").forEach((b) => {
    b.classList.remove("bg-black", "text-white", "border-black");
    b.classList.add("border-transparent");
    // Make icons default color
    b.querySelector("svg").classList.remove("text-white");
  });

  // Styling: Active button
  btn.classList.remove("border-transparent");
  btn.classList.add("bg-black", "text-white", "border-black");
  btn.querySelector("svg").classList.add("text-white");
});

// 4. Initialize Default Tab (Home)
// This runs automatically when the page loads
const defaultTabName = "home";
const contentArea = document.getElementById("tab-content");

// Step A: Load the HTML content
contentArea.innerHTML = getTabContent(defaultTabName);

// Step B: Highlight the button
// We use a small timeout to make sure the Custom Element <t-sidebar> has finished building the buttons
setTimeout(() => {
  const homeBtn = document.querySelector(`[data-tab="${defaultTabName}"]`);
  if (homeBtn) {
    // Apply the "Active" styles manually
    homeBtn.classList.remove("border-transparent");
    homeBtn.classList.add("bg-black", "text-white", "border-black");

    // Don't forget to color the icon white too!
    homeBtn.querySelector("svg").classList.add("text-white");
  }
}, 0);

class MiniPhonograph extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          width: 250px;
          height: 250px;
        }

        /* --- CONTAINER (200x200) --- */
        .unit {
          position: relative;
          width: 250px;
          height: 250px;
          background: linear-gradient(145deg, #dee2e6, #adb5bd);
          border-radius: 15px;
          box-shadow: 5px 5px 15px #bebebe, -5px -5px 15px #ffffff;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* --- DECK AREA --- */
        .deck {
          position: relative;
          width: 210px;
          height: 210px;
          background: #dee2e6;
          border-radius: 50%;
          box-shadow: inset 2px 2px 5px #a0a0a0, inset -2px -2px 5px #ffffff;
        }

        /* --- SPINNING PLATTER --- */
        .platter {
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          width: 190px;
          height: 190px;
          background: #495057;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          animation: spin 2s linear infinite;
        }

        /* GROOVES */
        .grooves {
          width: 90%;
          height: 90%;
          border-radius: 50%;
          background: repeating-radial-gradient(
            circle, 
            #212529, 
            #212529 2px, 
            #495057 3px, 
            #495057 4px
          );
        }

        /* LABEL */
        .label {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60px;
          height: 60px;
          background: #dee2e6;
          border-radius: 50%;
          border: 2px solid #212529;
        }

        /* --- TONEARM (Simplified for small size) --- */
        .arm-pivot {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 30px;
          height: 40px;
          background: #495057;
          border-radius: 50%;
          z-index: 10;
          box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
        }
        
        .arm-wand {
          position: absolute;
          top: 15px;
          right: 25px;
          width: 80px;
          height: 6px;
          background: #adb5bd;
          transform-origin: right center;
          transform: rotate(-25deg);
          border-radius: 3px;
          z-index: 9;
        }

        @keyframes spin {
          from { transform: translateX(-50%) rotate(0deg); }
          to { transform: translateX(-50%) rotate(360deg); }
        }
      </style>

      <div class="unit">
        <div class="deck">
          <div class="platter">
            <div class="grooves">
              <div class="label"></div>
            </div>
          </div>
        </div>
        
        <!-- Decoration Arm -->
        <div class="arm-pivot"></div>
        <div class="arm-wand"></div>
      </div>
    `;
  }
}
customElements.define("mini-phonograph", MiniPhonograph);
