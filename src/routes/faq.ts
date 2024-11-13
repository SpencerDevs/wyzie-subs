/** @format */

export default eventHandler(() => {
  const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Wyzie Subs - FAQ</title>
    <meta name="description" content="A powerful subtitle scraping API for anything. <3" />
    <meta name="keywords" content="subtitles, subtitle scraper, API, movie subtitles, Wyzie Subs" />
    <meta name="author" content="BadDeveloper" />
    <link rel="icon" href="https://i.postimg.cc/L5ppKYC5/cclogo.png" alt="Wyzie Subs Logo" />
    <meta property="og:title" content="Wyzie Subs - FAQ" />
    <meta property="og:description" content="A powerful subtitle scraping API for anything. <3" />
    <meta property="og:image" content="https://i.postimg.cc/L5ppKYC5/cclogo.png" alt="Wyzie Subs Logo" />
    <meta property="og:url" content="https://sub.wyzie.ru" />
    <meta property="og:type" content="website" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://sub.wyzie.ru" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="Wyzie Subs - FAQ" />
    <meta name="twitter:description" content="A powerful subtitle scraping API for anything. <3" />
    <meta name="twitter:image" content="https://i.postimg.cc/L5ppKYC5/cclogo.png" alt="Wyzie Subs Logo" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
    <script src="https://cdn.tailwindcss.com"></script>
    <script type="application/ld+json">
      {
        "@context": "http://schema.org",
        "@type": "WebSite",
        "name": "Wyzie Subs",
        "url": "https://sub.wyzie.ru",
        "logo": "https://i.postimg.cc/L5ppKYC5/cclogo.png",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://sub.wyzie.ru/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    </script>
    <script>
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8" },
              mono: { background: "#0b0b0b", card: "#111", accent: "#181818" },
              type: { emphasized: "#e0e0e0", subheader: "#d0d0d0", dimmed: "#c0c0c0", footer: "#6b7280" },
            },
          },
        },
      };
    </script>
  </head>

  <body class="bg-mono-background min-h-screen flex flex-col items-center justify-center p-4 cursor-default">
    <div class="bg-mono-card rounded-lg shadow-xl py-6 px-8 max-w-xl w-full">
      <header class="flex items-center justify-between mb-5">
        <h1 class="text-4xl font-bold text-primary-700"><a class="hover:underline" href="https://wyzie.ru" alt="Toolset homepage" title="Toolset Homepage">Wyzie</a> <span class="text-type-emphasized">FAQ</span></h1>
        <div class="group w-10 h-auto shadow-md transition-shadow duration-500 hover:shadow-xl">
          <a href="/" title="Home" alt="Home">
            <img src="https://i.postimg.cc/L5ppKYC5/cclogo.png" class="w-full h-auto transition-transform duration-300 group-hover:scale-110" alt="Wyzie Subs logo" />
          </a>
        </div>
      </header>

      <div class="space-y-4 mb-3">
        <div class="bg-mono-accent shadow-xl p-4 rounded-md flex flex-col gap-1">
          <h3 class="font-semibold text-type-subheader">Are there any restrictions?</h3>
          <p class="text-type-dimmed text-sm">
            Wyzie Subs has absolutely no restrictions, you can use it for anything you want. However much you want.
          </p>
        </div>
        <div class="bg-mono-accent shadow-xl p-4 rounded-md flex flex-col gap-1">
          <h3 class="font-semibold text-type-subheader">How reliable is it?</h3>
          <p class="text-type-dimmed text-sm">
            We pride ourselves on our consistent uptime and almost daily updates as well as fast caching.
          </p>
        </div>
        <div class="bg-mono-accent shadow-xl p-4 rounded-md flex flex-col gap-1">
          <h3 class="font-semibold text-type-subheader">How to implement this into my project?</h3>
          <p class="text-type-dimmed text-sm">
            We have pre-written implementations for Node.js, Python, and Typescript. You can find them
            <a href="/implement" class="text-primary-500 hover:text-primary-600 transition duration-100" alt="Implementations" title="Implement">here</a>.
          </p>
        </div>
        <div class="bg-mono-accent shadow-xl p-4 rounded-md flex flex-col gap-1">
          <h3 class="font-semibold text-type-subheader">Can I use this for a streaming site?</h3>
          <p class="text-type-dimmed text-sm">
            Almost all of our users are streaming sites, so yes, you can use it for a streaming site.
          </p>
        </div>
        <div class="bg-mono-accent shadow-xl p-4 rounded-md flex flex-col gap-1">
          <h3 class="font-semibold text-type-subheader">Will you guys do sketchy stuff with my info?</h3>
          <p class="text-type-dimmed text-sm">
            No. I pinky swear aside from cloudflare logs (for trouble shooting and health checks) nothing is stored.
          </p>
        </div>
        <div class="bg-mono-accent shadow-xl p-4 rounded-md flex flex-col gap-1">
          <h3 class="font-semibold text-type-subheader">Why is it kinda slow?</h3>
          <p class="text-type-dimmed text-sm">
            Well, we first have to get a valid proxy (which sometimes has to start up), if your using TMDB then we have to convert it to IMDB and then finally we get the subtitles. So use IMDB for the fastest results.
          </p>
        </div>
      </div>
      <section>
        <div class="flex justify-between text-s text-type-footer mt-6">
          <p class="text-left">
            <a href="/" class="text-primary-500 hover:text-primary-600 transition duration-100" alt="Back" title="Back">← Back</a>
          </p>
        </div>
      </section>
    </div>
  </body>
</html>
  `;

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
});
