const CACHE = "questoes-univesp-v9";
const ARQUIVOS = ["./", "index.html", "style.css", "app.js", "questions.js", "manifest.webmanifest", "icon-192.png", "icon-512.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => c.addAll(ARQUIVOS).then(() => precarregaImagens(c)))
      .then(() => self.skipWaiting())
  );
});

// Baixa também as figuras listadas em questions.js, para funcionarem offline desde o primeiro uso.
async function precarregaImagens(cache) {
  try {
    const src = await (await fetch("questions.js")).text();
    const arquivos = [...new Set([...src.matchAll(/"(20\d\d[\w-]*\.png)"/g)].map((m) => "img/" + m[1]))];
    await Promise.all(arquivos.map((f) => cache.add(f).catch(() => {})));
  } catch (e) { /* sem rede: as figuras entram no cache conforme forem abertas */ }
}

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())
  );
});

// Rede primeiro (pega questões novas quando online), cache como reserva offline.
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then((r) => { const copia = r.clone(); caches.open(CACHE).then((c) => c.put(e.request, copia)); return r; })
      .catch(() => caches.match(e.request))
  );
});

