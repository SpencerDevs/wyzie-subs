export default eventHandler(() => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Wyzie Subs - Subtitles API</title>
      <link rel="icon" href="https://i.postimg.cc/L5ppKYC5/cclogo.png" />
      <meta property="og:title" content="Wyzie Subs - Subtitles API" />
      <meta property="og:description" content="A powerful subtitle scraping API for anything <3." />
      <meta property="og:image" content="https://i.postimg.cc/L5ppKYC5/cclogo.png" />
      <meta property="og:url" content="https://subs.wyzie.ru" />
      <meta property="og:type" content="website" />
      <script src="https://cdn.tailwindcss.com"></script>
      <script>
        const links = [
          "/search?id=tt3659388&language=en&format=srt",
          "/search?id=872585&language=nl",
          "/search?id=tt1130884&format=srt",
          "/search?id=1023922",
          "/search?id=tt1853728",
          "/search?id=1422&season=2&episode=4",
          "/search?id=126506&season=1&episode=3&language=en",
          "/search?id=tt0264464",
          "/search?id=2567",
        ];

        function redirectToRandomLink() {
          const randomIndex = Math.floor(Math.random() * links.length);
          window.location.href = links[randomIndex];
        }
      </script>
      <script>
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              colors: {
                primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8" },
              },
            },
          },
        };
      </script>
    </head>
    <body class="bg-[#0c0c0c] min-h-screen flex flex-col items-center justify-center p-4 cursor-default">
      <div class="bg-[#111] rounded-lg shadow-2xl p-8 max-w-2xl w-full">
        <h1 class="text-4xl font-bold text-primary-700 mb-6">Wyzie <span class="text-[#e0e0e0]">Subs</span></h1>
        <p class="text-[#c0c0c0] mb-4">
          A free & libre open-subtitles scraping API that uses proxied requests instead of fetching directly from the API.
        </p>

        <h2 class="text-2xl font-semibold text-[#e0e0e0] mb-4 flex items-center">
          Basic Usage
        </h2>

        <div class="space-y-4 mb-8">
          <div class="bg-[#1a1a1a] shadow-xl p-4 rounded-md flex flex-col gap-1">
            <h3 class="font-semibold text-[#d0d0d0]">Search by IMDB / TMDB ID</h3>
            <div class="flex flex-row gap-1">
              <a href="/search?id=tt3659388" alt="Example link: search by IMDB ID">
                <code class="text-sm text-primary-500 hover:text-primary-600 transition duration-100 break-words">/search?id=tt3659388</code>
              </a>
              <span class="text-[#bcbcbc] break-words mx-1">
                or
              </span>
              <a href="/search?id=286217" alt="Example link: search by TMDB ID">
                <code class="text-sm text-primary-500 hover:text-primary-600 transition duration-100 break-words">/search?id=286217</code>
              </a>
            </div>
          </div>
          <div class="bg-[#1a1a1a] shadow-xl p-4 rounded-md flex flex-col gap-1">
            <h3 class="font-semibold text-[#d0d0d0]">Search by season and episode</h3>
            <a href="/search?id=tt0121955&season=1&episode=1" alt="Example link: search by season and episode">
              <code class="text-sm text-primary-500 hover:text-primary-600 transition duration-100 break-words">/search?id=tt0121955&season=1&episode=1</code>
            </a>
          </div>
          <div class="bg-[#1a1a1a] shadow-xl p-4 rounded-md flex flex-col gap-1">
            <h3 class="font-semibold text-[#d0d0d0]">Search by language</h3>
            <a href="/search?id=tt0121955&language=en" alt="Example link: search by language">
              <code class="text-sm text-primary-500 hover:text-primary-600 transition duration-100 break-words">/search?id=tt0121955&language=en</code>
            </a>
          </div>
          <div class="bg-[#1a1a1a] shadow-xl p-4 rounded-md flex flex-col gap-1">
            <h3 class="font-semibold text-[#d0d0d0]">Search by format</h3>
            <a href="/search?id=tt0121955&format=srt" alt="Example link: search by file format">
              <code class="text-sm text-primary-500 hover:text-primary-600 transition duration-100 break-words">/search?id=tt0121955&format=srt</code>
            </a>
          </div>
        </div>
        <a onclick="redirectToRandomLink()" class="flex justify-center" alt="Example check it out button">
          <button class="text-[#e0e0e0] shadow-lg text-lg w-5/6 py-1 rounded bg-primary-700 hover:scale-105 transition duration-100">
            Check it out
          </button>
        </a>
      </div>
      <footer class="mt-12 text-center text-gray-500 text-sm">
        <p class="flex justify-center items-center space-x-2 mt-2">
          <a href="https://github.com/sussy-code" target="_blank" rel="noopener noreferrer" class="hover:text-primary-600 text-dark transition duration-100" alt="Github link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="w-5 h-5 fill-current">
              <path
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              />
            </svg>
          </a>
          <a href="https://twitter.com/SudoFlix" class="hover:text-primary-600 text-dark transition duration-100" alt="Twitter link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 h-5 fill-current">
              <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path
                d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
              />
            </svg>
          </a>
          <a href="https://discord.gg/r5cYshWM4G" class="hover:text-primary-600 text-dark transition duration-100" alt="Discord link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="w-5 h-5 fill-current">
              <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path
                d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"
              />
            </svg>
          </a>
        </p>
        <p class="mt-2 text-dark">
          Created by
          <a href="https://github.com/itzcozi" class="text-primary-500 hover:text-primary-600 transition duration-100 underline" alt="Developer social link">BadDeveloper</a>
          and
          <a href="https://github.com/abdullahdagoat" class="text-primary-500 hover:text-primary-600 transition duration-100 underline" alt="Co-developer social link">AbdullahDaGoat</a>
        </p>
      </footer>
    </body>
  </html>
  `;
});  