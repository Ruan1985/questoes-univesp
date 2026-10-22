const $app = document.getElementById("app");
const LETRAS = ["A", "B", "C", "D", "E"];

// Rótulo da prova, derivado do id (2017 = 2º sem.; 2018 = 1º sem.; 2018s2 = 2º sem.)
const PROVAS = { "2017": "2017 (2º sem.)", "2018": "2018 (1º sem.)", "2018s2": "2018 (2º sem.)", "2019s2": "2019 (2º sem.)", "2020": "2020", "2021": "2021 (2º sem.)", "2022": "2022 (2º sem.)", "2023": "2023 (2º sem.)", "2024": "2024" };
const provaDe = (q) => PROVAS[q.id.split("-")[0]] || q.ano;

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

let g = null; // estado da sessão

function home() {
  g = null;
  const cards = [...new Set(QUESTIONS.map((q) => q.tema))].map((t) => {
    const n = QUESTIONS.filter((q) => q.tema === t).length;
    return `<button class="tema" data-t="${esc(t)}"><b>${esc(t)}</b><small>${n} questões</small></button>`;
  }).join("");
  $app.className = "";
  $app.innerHTML = `
    <h1>Questões Univesp</h1>
    <p class="sub">Escolha um tema</p>
    <div class="grid">
      ${cards}
      <button class="tema wide" data-t="*"><b>Todos os temas</b><small>${QUESTIONS.length} questões misturadas</small></button>
    </div>`;
  $app.querySelectorAll(".tema").forEach((b) => b.onclick = () => inicia(b.dataset.t));
}

// lista: opcional, para refazer só um subconjunto (as questões erradas)
function inicia(tema, lista) {
  const pool = lista || (tema === "*" ? QUESTIONS : QUESTIONS.filter((q) => q.tema === tema));
  // do mais fácil para o mais difícil, embaralhando dentro de cada nível
  const qs = shuffle(pool).sort((a, b) => a.d - b.d);
  g = { tema, qs, i: 0, sel: null, revelada: false, erradas: [], acertos: 0 };
  jogo(true);
}

function jogo(zeraScroll = false) {
  const q = g.qs[g.i];
  const n = g.qs.length;
  const ctx = [q.t ? TEXTOS[q.t] : "", q.ctx || ""].filter(Boolean).join("\n\n");
  const alts = q.a.map((t, k) => {
    let cls = "alt";
    if (g.revelada) { if (k === q.r) cls += " ok"; else if (k === g.sel) cls += " bad"; }
    else if (k === g.sel) cls += " sel";
    return `<button class="${cls}" data-k="${k}" ${g.revelada ? "disabled" : ""}><b>${LETRAS[k]})</b><span>${esc(t)}</span></button>`;
  }).join("");
  const passos = g.qs.map((_, k) => `<i class="${k < g.i ? "done" : k === g.i ? "now" : ""}"></i>`).join("");
  const ultima = g.i + 1 >= n;

  let resultado = "", botoes;
  if (!g.revelada) {
    botoes = `<button class="btn" id="ok" ${g.sel === null ? "disabled" : ""}>Confirmar</button>
      <button class="btn sec" id="pular" ${ultima ? "disabled" : ""}>Pular</button>`;
  } else {
    const acertou = g.sel === q.r;
    resultado = `<div class="res ${acertou ? "res-ok" : "res-bad"}" id="res">${acertou ? "Correto!" : `Resposta certa: ${LETRAS[q.r]}`}</div>
      ${q.exp ? `<div class="exp"><b>Explicação:</b> ${esc(q.exp)}</div>` : ""}`;
    botoes = `<button class="btn" id="prox">${ultima ? "Concluir" : "Próxima"}</button>`;
  }

  // a pergunta rola em cima; os botões ficam numa faixa fixa embaixo, sem cobrir nada
  const rolagem = document.querySelector(".conteudo");
  const scrollAnterior = rolagem ? rolagem.scrollTop : 0;
  $app.className = "jogo";
  $app.innerHTML = `
    <div class="conteudo">
      <div class="top"><button class="btn sec" id="sair" style="padding:6px 12px">‹ Temas</button>
        <span class="prize">${g.i + 1} / ${n}</span></div>
      <div class="steps">${passos}</div>
      <div class="meta">${esc(q.tema)} · Prova ${esc(provaDe(q))}, questão ${q.n}</div>
      ${q.semFigura ? `<div class="warn">⚠ Esta questão tem figura no PDF; confira lá se precisar.</div>` : ""}
      ${ctx ? `<div class="ctx">${esc(ctx)}</div>` : ""}
      ${(q.img || []).map((f) => `<img class="fig" src="img/${esc(f)}" alt="Figura da questão ${q.n}" loading="lazy">`).join("")}
      <div class="q">${esc(q.q)}</div>
      ${alts}
      ${resultado}
    </div>
    <div class="acoes">${botoes}</div>`;
  const novo = document.querySelector(".conteudo");
  novo.scrollTop = zeraScroll ? 0 : scrollAnterior;
  if (g.revelada) document.getElementById("res").scrollIntoView({ block: "center" });

  $app.querySelectorAll(".alt").forEach((b) => b.onclick = () => { if (!g.revelada) { g.sel = +b.dataset.k; jogo(); } });
  const on = (id, fn) => { const e = document.getElementById(id); if (e) e.onclick = fn; };
  on("sair", home);
  on("ok", () => {
    g.revelada = true;
    if (g.sel === q.r) g.acertos++; else g.erradas.push(q);
    jogo();
  });
  on("pular", () => {
    // manda a questão para o fim da fila
    g.qs.push(g.qs.splice(g.i, 1)[0]);
    g.sel = null;
    jogo(true);
  });
  on("prox", () => {
    if (ultima) return fim();
    g.i++; g.sel = null; g.revelada = false;
    jogo(true);
  });
}

function fim() {
  const { tema, erradas, acertos } = g;
  const n = g.qs.length;
  const lista = erradas.map((q) => `<li>Prova ${esc(provaDe(q))}, questão ${q.n} (${esc(q.tema)})</li>`).join("");
  $app.className = "";
  $app.innerHTML = `
    <h1>${erradas.length ? "Fim das questões" : "Parabéns!"}</h1>
    <p class="sub">${tema === "*" ? "Todos os temas" : esc(tema)}</p>
    <div class="grid placar">
      <div class="card center"><div class="big ok-txt">${acertos}</div>${acertos === 1 ? "acerto" : "acertos"}</div>
      <div class="card center"><div class="big bad-txt">${erradas.length}</div>${erradas.length === 1 ? "erro" : "erros"}</div>
    </div>
    ${erradas.length ? `<div class="card" style="margin-top:12px"><h2>Para rever</h2><ul class="list">${lista}</ul></div>` : `<p class="center">Você acertou todas as ${n} questões.</p>`}
    <div class="row">
      ${erradas.length ? `<button class="btn" id="erros">Refazer as ${erradas.length} que errei</button>` : ""}
      <button class="btn ${erradas.length ? "sec" : ""}" id="de-novo">Refazer tudo</button>
      <button class="btn sec" id="menu">Temas</button>
    </div>`;
  const on = (id, fn) => { const e = document.getElementById(id); if (e) e.onclick = fn; };
  on("erros", () => inicia(tema, erradas));
  on("de-novo", () => inicia(tema));
  on("menu", home);
}

home();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}
