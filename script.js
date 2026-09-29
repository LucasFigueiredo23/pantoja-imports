/* =============================================================
   Pantoja Imports: script principal
   -------------------------------------------------------------
   No dia a dia você só precisa mexer nas 4 listas abaixo:
     1. CONFIG       -> dados da loja (WhatsApp, Instagram, endereço...)
     2. PRODUTOS     -> aparelhos e acessórios da vitrine
     3. DEPOIMENTOS  -> avaliações de clientes
     4. CORES_HERO   -> cores do iPhone grande do topo da página
   Depois do aviso "DAQUI PARA BAIXO" fica a lógica do site.
   ============================================================= */

/* ---------- 1. CONFIG ---------- */
const CONFIG = {
  nomeLoja: 'Pantoja Imports',
  dono: 'Amir Pantoja',

  // Só números: DDI (55) + DDD + número. Ex.: 5591988887777
  whatsapp: '5591999999999',

  instagram: 'pantojaimports', // sem o @
  tiktok: '',                  // ex.: 'pantojaimports' (vazio = não aparece)
  facebook: '',                // ex.: 'pantojaimports' (vazio = não aparece)

  endereco: 'Rua Exemplo, 123, Centro',
  cidade: 'Sua cidade, PA',
  horario: ['Segunda a sexta, 9h às 18h', 'Sábado, 9h às 13h'],

  // Google Maps > Compartilhar > Incorporar um mapa > copie só o link que está dentro de src="..."
  // Vazio = mostra um cartão com o botão "Abrir no Google Maps"
  mapaEmbed: '',

  cnpj: '', // ex.: '00.000.000/0001-00' (vazio = não aparece)
  parcelamento: 'ou em até 12x no cartão',

  // Mensagens que já chegam escritas no WhatsApp
  mensagens: {
    geral: 'Olá! Vim pelo site e quero saber mais sobre os aparelhos.',
    troca: 'Olá! Tenho um iPhone usado e quero avaliar para dar na troca.',
  },
};

/* ---------- 2. PRODUTOS ----------
   Campos:
   id            texto único, sem espaços (ex.: 'iphone-15-128-rosa')
   modelo        nome que aparece no card
   categoria     'novo' | 'seminovo' | 'acessorio'
   armazenamento ex.: '128 GB' (vazio em acessório)
   cor           nome da cor
   corHex        cor usada no desenho e no fundo do card
   bateria       só para seminovo (número, em %)
   cameras       2 ou 3 (muda o desenho do iPhone)
   ilustracao    'iphone' (padrão) | 'carregador' | 'pelicula'
   preco         número em reais, ou null para mostrar "Consulte"
   selo          texto do selo (ex.: 'Mais vendido') ou ''
   imagens       fotos reais em assets/produtos/. Se ficar vazio, aparece o desenho
   detalhes      lista que aparece ao abrir o produto
*/
const PRODUTOS = [
  {
    id: 'iphone-17-pro-max-256-azul',
    modelo: 'iPhone 17 Pro Max',
    categoria: 'novo',
    armazenamento: '256 GB',
    cor: 'Azul intenso',
    corHex: '#34405a',
    cameras: 3,
    preco: 10999,
    selo: 'Mais vendido',
    imagens: [],
    detalhes: ['Lacrado, com nota fiscal', 'Garantia Apple de 1 ano', 'Acompanha cabo USB-C'],
  },
  {
    id: 'iphone-17-pro-256-laranja',
    modelo: 'iPhone 17 Pro',
    categoria: 'novo',
    armazenamento: '256 GB',
    cor: 'Laranja cósmico',
    corHex: '#d8773a',
    cameras: 3,
    preco: 9499,
    selo: 'Lançamento',
    imagens: [],
    detalhes: ['Lacrado, com nota fiscal', 'Garantia Apple de 1 ano', 'Acompanha cabo USB-C'],
  },
  {
    id: 'iphone-17-256-salvia',
    modelo: 'iPhone 17',
    categoria: 'novo',
    armazenamento: '256 GB',
    cor: 'Sálvia',
    corHex: '#a9b8a0',
    cameras: 2,
    preco: 6799,
    selo: '',
    imagens: [],
    detalhes: ['Lacrado, com nota fiscal', 'Garantia Apple de 1 ano', 'Acompanha cabo USB-C'],
  },
  {
    id: 'iphone-16-pro-128-deserto',
    modelo: 'iPhone 16 Pro',
    categoria: 'seminovo',
    armazenamento: '128 GB',
    cor: 'Titânio deserto',
    corHex: '#c2a488',
    bateria: 91,
    cameras: 3,
    preco: 5499,
    selo: '',
    imagens: [],
    detalhes: ['Saúde da bateria em 91%', 'Sem marcas de uso na tela', 'Face ID e câmeras revisados', 'Garantia da loja de 90 dias'],
  },
  {
    id: 'iphone-15-128-rosa',
    modelo: 'iPhone 15',
    categoria: 'seminovo',
    armazenamento: '128 GB',
    cor: 'Rosa',
    corHex: '#efcfcd',
    bateria: 88,
    cameras: 2,
    preco: 3299,
    selo: '',
    imagens: [],
    detalhes: ['Saúde da bateria em 88%', 'Pequenos sinais de uso na lateral', 'Face ID e câmeras revisados', 'Garantia da loja de 90 dias'],
  },
  {
    id: 'iphone-14-pro-256-roxo',
    modelo: 'iPhone 14 Pro',
    categoria: 'seminovo',
    armazenamento: '256 GB',
    cor: 'Roxo-profundo',
    corHex: '#5a4e66',
    bateria: 85,
    cameras: 3,
    preco: 3899,
    selo: 'Oportunidade',
    imagens: [],
    detalhes: ['Saúde da bateria em 85%', 'Tela sem riscos', 'Face ID e câmeras revisados', 'Garantia da loja de 90 dias'],
  },
  {
    id: 'carregador-20w',
    modelo: 'Carregador USB-C 20W',
    categoria: 'acessorio',
    armazenamento: '',
    cor: 'Branco',
    corHex: '#f2f2f2',
    ilustracao: 'carregador',
    preco: 149,
    selo: '',
    imagens: [],
    detalhes: ['Carregamento rápido', 'Compatível com todos os iPhones com USB-C ou Lightning (com cabo)', 'Garantia de 90 dias'],
  },
  {
    id: 'pelicula-3d',
    modelo: 'Película de vidro 3D',
    categoria: 'acessorio',
    armazenamento: '',
    cor: 'Todos os modelos',
    corHex: '#b9c3cc',
    ilustracao: 'pelicula',
    preco: 49,
    selo: '',
    imagens: [],
    detalhes: ['Borda a borda', 'Aplicação na hora, na loja', 'Diga o seu modelo no WhatsApp'],
  },
];

/* ---------- 3. DEPOIMENTOS (troque pelos reais, com autorização do cliente) ---------- */
const DEPOIMENTOS = [
  { nome: 'Juliana M.', detalhe: 'Comprou um iPhone 15', texto: 'Atendimento muito rápido no WhatsApp. O aparelho chegou exatamente como nas fotos, bateria ótima.' },
  { nome: 'Rafael S.', detalhe: 'Deu o usado na troca', texto: 'Dei meu 12 na troca e peguei um 15 Pro. Avaliação justa e resolvi tudo no mesmo dia.' },
  { nome: 'Carla T.', detalhe: 'Comprou um iPhone 17', texto: 'Tirei todas as dúvidas antes de fechar. Lacrado, com nota e parcelado no cartão.' },
  { nome: 'Diego A.', detalhe: 'Comprou um iPhone 14 Pro', texto: 'Segundo aparelho que compro aqui. Seminovo impecável, parecia novo.' },
  { nome: 'Patrícia L.', detalhe: 'Comprou acessórios', texto: 'Aplicaram a película na hora e ainda deram dicas para cuidar da bateria.' },
];

/* ---------- 4. CORES_HERO ---------- */
const CORES_HERO = [
  { nome: 'Titânio natural', hex: '#bcb6ac' },
  { nome: 'Azul intenso', hex: '#34405a' },
  { nome: 'Laranja cósmico', hex: '#d8773a' },
  { nome: 'Titânio deserto', hex: '#c2a488' },
  { nome: 'Prata', hex: '#dcdde0' },
];


/* =============================================================
   DAQUI PARA BAIXO: lógica do site
   ============================================================= */

const $ = (seletor, el = document) => el.querySelector(seletor);
const $$ = (seletor, el = document) => [...el.querySelectorAll(seletor)];
const reduzMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const ICONES = {
  whats: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.6a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5 5 16a8.4 8.4 0 1 1 15.5-4.4Z"/></svg>',
  check: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.2 2.4 2.4 4.6-4.9"/></svg>',
  pino: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.2-7-11.5a7 7 0 1 1 14 0C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
};

/* ---------- Textos e links ---------- */
function linkWhats(mensagem) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

const formatoReal = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

function textoPreco(p) {
  return p.preco == null ? 'Consulte' : formatoReal.format(p.preco);
}

function textoEstado(p) {
  if (p.categoria === 'novo') return 'Novo, lacrado';
  if (p.categoria === 'seminovo') return p.bateria ? `Seminovo, bateria ${p.bateria}%` : 'Seminovo';
  return 'Acessório';
}

function textoParcelas(p) {
  // Parcelamento só aparece em aparelhos (não em acessórios baratos)
  return p.preco != null && p.categoria !== 'acessorio' ? `<small>${CONFIG.parcelamento}</small>` : '';
}

function textoSpec(p) {
  return [p.armazenamento, p.cor].filter(Boolean).join(', ');
}

function mensagemProduto(p) {
  const nome = [p.modelo, p.armazenamento, p.cor].filter(Boolean).join(' ');
  const estado = p.categoria === 'novo' ? ' (novo)' : p.categoria === 'seminovo' ? ' (seminovo)' : '';
  const preco = p.preco == null ? '' : `, por ${formatoReal.format(p.preco)}`;
  return `Olá! Vi no site: ${nome}${estado}${preco}. Ainda está disponível?`;
}

/* ---------- Cores das ilustrações ---------- */
function hexParaRgb(hex) {
  let h = hex.replace('#', '');
  if (h.length === 3) h = h.split('').map((c) => c + c).join('');
  const n = parseInt(h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

// Mistura uma cor com outra (p = 0 a 1). Usado para clarear e escurecer.
function misturar(hex, alvo, p) {
  const a = hexParaRgb(hex);
  const b = hexParaRgb(alvo);
  return '#' + a.map((v, i) => Math.round(v + (b[i] - v) * p).toString(16).padStart(2, '0')).join('');
}

function tonsDaCor(hex) {
  return {
    claro: misturar(hex, '#ffffff', 0.22),
    escuro: misturar(hex, '#000000', 0.12),
    moldura: misturar(hex, '#000000', 0.3),
  };
}

/* ---------- Ilustrações em SVG (usadas quando não há foto) ---------- */
let contadorSvg = 0;

function ilustracao(p, { variaveis = false } = {}) {
  const id = `ilu${++contadorSvg}`;
  // No topo da página as cores vêm de variáveis CSS, para animar a troca
  const tons = variaveis
    ? { claro: 'var(--f1)', escuro: 'var(--f2)', moldura: 'var(--f3)' }
    : tonsDaCor(p.corHex || '#c9cbce');

  if (p.ilustracao === 'carregador') return svgCarregador(id, tons);
  if (p.ilustracao === 'pelicula') return svgPelicula(id);
  return svgIphone(id, tons, p.cameras || 3);
}

function svgIphone(id, t, cameras) {
  const lente = (cx, cy) => `
    <circle cx="${cx}" cy="${cy}" r="24" fill="#15171b"/>
    <circle cx="${cx}" cy="${cy}" r="24" fill="none" style="stroke:${t.moldura}" stroke-width="3"/>
    <circle cx="${cx}" cy="${cy}" r="14" fill="#07090d"/>
    <circle cx="${cx}" cy="${cy}" r="7" fill="#1f2d40"/>
    <circle cx="${cx - 5}" cy="${cy - 6}" r="3" fill="#fff" opacity=".6"/>`;

  const tres = cameras === 3;
  const lentes = tres ? lente(72, 72) + lente(72, 126) + lente(122, 99) : lente(74, 74) + lente(118, 118);
  const flash = tres ? [124, 52] : [122, 66];
  const plato = tres ? 136 : 128;

  return `<svg class="ilustracao" viewBox="0 0 300 600" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="${id}c" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" style="stop-color:${t.claro}"/><stop offset="1" style="stop-color:${t.escuro}"/>
      </linearGradient>
      <linearGradient id="${id}b" x1="0" y1="0" x2=".9" y2=".7">
        <stop offset="0" stop-color="#fff" stop-opacity=".38"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <rect x="3" y="140" width="8" height="40" rx="3" style="fill:${t.moldura}"/>
    <rect x="3" y="200" width="8" height="64" rx="3" style="fill:${t.moldura}"/>
    <rect x="3" y="276" width="8" height="64" rx="3" style="fill:${t.moldura}"/>
    <rect x="289" y="190" width="8" height="96" rx="3" style="fill:${t.moldura}"/>
    <rect x="8" y="8" width="284" height="584" rx="54" style="fill:${t.moldura}"/>
    <rect x="15" y="15" width="270" height="570" rx="47" fill="url(#${id}c)"/>
    <rect x="15" y="15" width="270" height="570" rx="47" fill="url(#${id}b)"/>
    <rect x="32" y="32" width="${plato}" height="${plato}" rx="34" style="fill:${t.escuro}" opacity=".6" stroke="#fff" stroke-opacity=".3" stroke-width="1.5"/>
    ${lentes}
    <circle cx="${flash[0]}" cy="${flash[1]}" r="7" fill="#f4ecd6" opacity=".9"/>
  </svg>`;
}

function svgCarregador(id, t) {
  return `<svg class="ilustracao" viewBox="0 0 300 600" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="${id}c" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#ffffff"/><stop offset="1" style="stop-color:${t.escuro}"/>
      </linearGradient>
    </defs>
    <rect x="112" y="116" width="14" height="46" rx="4" fill="#a3a7ad"/>
    <rect x="174" y="116" width="14" height="46" rx="4" fill="#a3a7ad"/>
    <rect x="70" y="150" width="160" height="170" rx="34" fill="url(#${id}c)" stroke="#8a8f96" stroke-opacity=".45" stroke-width="2"/>
    <rect x="128" y="290" width="44" height="12" rx="6" fill="#2a2c30" opacity=".75"/>
    <path d="M150 350 C150 430 70 430 92 505 S 220 545 206 592" fill="none" stroke="#b9bdc3" stroke-width="13" stroke-linecap="round"/>
    <path d="M150 350 C150 430 70 430 92 505 S 220 545 206 592" fill="none" stroke="#fafafa" stroke-width="9" stroke-linecap="round"/>
    <rect x="134" y="314" width="32" height="44" rx="9" fill="#f4f4f4" stroke="#8a8f96" stroke-opacity=".45" stroke-width="2"/>
  </svg>`;
}

function svgPelicula(id) {
  return `<svg class="ilustracao" viewBox="0 0 300 600" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="${id}v" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#fff" stop-opacity=".9"/>
        <stop offset=".5" stop-color="#fff" stop-opacity=".35"/>
        <stop offset="1" stop-color="#fff" stop-opacity=".7"/>
      </linearGradient>
    </defs>
    <rect x="15" y="15" width="270" height="570" rx="47" fill="url(#${id}v)" stroke="#7d848c" stroke-opacity=".55" stroke-width="2.5"/>
    <rect x="108" y="36" width="84" height="24" rx="12" fill="#1c1d1f" opacity=".5"/>
    <path d="M44 270 262 128M44 340 262 198" stroke="#fff" stroke-width="12" stroke-opacity=".8" stroke-linecap="round"/>
  </svg>`;
}

/* ---------- Dados da loja espalhados pela página ---------- */
function aplicarConfig() {
  $$('[data-config]').forEach((el) => {
    const valor = CONFIG[el.dataset.config];
    if (typeof valor === 'string') el.textContent = valor;
  });

  $$('.js-whats').forEach((a) => {
    const msg = CONFIG.mensagens[a.dataset.msg] || CONFIG.mensagens.geral;
    a.href = linkWhats(msg);
    a.target = '_blank';
    a.rel = 'noopener';
  });

  $$('.js-insta').forEach((a) => {
    a.href = `https://instagram.com/${CONFIG.instagram}`;
    a.target = '_blank';
    a.rel = 'noopener';
  });
  $$('[data-insta-user]').forEach((el) => { el.textContent = '@' + CONFIG.instagram; });

  $('#endereco').innerHTML = `<span>${CONFIG.endereco}</span><span>${CONFIG.cidade}</span>`;
  $('#horario').innerHTML = CONFIG.horario.map((h) => `<span>${h}</span>`).join('');

  const extras = [
    CONFIG.tiktok && `<a href="https://tiktok.com/@${CONFIG.tiktok}" target="_blank" rel="noopener">TikTok</a>`,
    CONFIG.facebook && `<a href="https://facebook.com/${CONFIG.facebook}" target="_blank" rel="noopener">Facebook</a>`,
  ].filter(Boolean);
  if (extras.length) {
    $('#redesExtras').innerHTML = extras.join('');
    $('#redesExtrasLinha').hidden = false;
  }

  $('#ano').textContent = new Date().getFullYear();
  if (CONFIG.cnpj) $('#cnpj').textContent = `CNPJ ${CONFIG.cnpj}.`;

  // Mapa
  const mapa = $('#mapa');
  const enderecoCompleto = `${CONFIG.endereco}, ${CONFIG.cidade}`;
  if (CONFIG.mapaEmbed) {
    mapa.innerHTML = `<iframe src="${CONFIG.mapaEmbed}" title="Mapa com a localização da loja" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>`;
  } else {
    const link = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(enderecoCompleto)}`;
    mapa.innerHTML = `<div class="mapa__vazio">${ICONES.pino}<p>${enderecoCompleto}</p>
      <a class="btn btn--escuro btn--sm" href="${link}" target="_blank" rel="noopener">Abrir no Google Maps</a></div>`;
  }
}

/* ---------- Catálogo ---------- */
const CATEGORIAS = [
  ['todos', 'Todos'],
  ['novo', 'Novos'],
  ['seminovo', 'Seminovos'],
  ['acessorio', 'Acessórios'],
];
let filtroAtual = 'todos';

function cardHTML(p, i) {
  const spec = textoSpec(p);
  const foto = p.imagens && p.imagens.length
    ? `<img src="${p.imagens[0]}" alt="" loading="lazy" decoding="async" width="600" height="750">`
    : ilustracao(p);
  const rotulo = [p.modelo, spec, p.selo].filter(Boolean).join(', ');

  return `<li class="card" style="--i:${i}; --tom:${p.corHex || '#cfd1d4'}">
    <button class="card__abrir" type="button" data-abrir="${p.id}" aria-label="Ver detalhes: ${rotulo}">
      <span class="card__foto">${p.selo ? `<span class="selo">${p.selo}</span>` : ''}${foto}</span>
    </button>
    <div class="card__info">
      <h3>${p.modelo}</h3>
      ${spec ? `<p class="card__spec">${spec}</p>` : ''}
      <p class="card__estado" data-cat="${p.categoria}">${textoEstado(p)}</p>
      <p class="card__preco">${textoPreco(p)}${textoParcelas(p)}</p>
      <div class="card__acoes">
        <a class="btn btn--escuro" href="${linkWhats(mensagemProduto(p))}" target="_blank" rel="noopener">${ICONES.whats}Tenho interesse</a>
        <button class="btn btn--linha" type="button" data-abrir="${p.id}">Detalhes</button>
      </div>
    </div>
  </li>`;
}

function renderizarFiltros() {
  const contar = (cat) => (cat === 'todos' ? PRODUTOS.length : PRODUTOS.filter((p) => p.categoria === cat).length);
  $('#filtros').innerHTML = CATEGORIAS
    .filter(([cat]) => contar(cat) > 0)
    .map(([cat, nome]) => `<button class="filtro" type="button" data-filtro="${cat}" aria-pressed="${cat === filtroAtual}">${nome} <span>${contar(cat)}</span></button>`)
    .join('');
}

function renderizarProdutos() {
  const lista = filtroAtual === 'todos' ? PRODUTOS : PRODUTOS.filter((p) => p.categoria === filtroAtual);
  $('#grade').innerHTML = lista.map(cardHTML).join('');
  $('#gradeVazio').hidden = lista.length > 0;
}

function iniciarCatalogo() {
  renderizarFiltros();
  renderizarProdutos();

  $('#filtros').addEventListener('click', (e) => {
    const botao = e.target.closest('[data-filtro]');
    if (!botao || botao.dataset.filtro === filtroAtual) return;
    filtroAtual = botao.dataset.filtro;
    $$('.filtro').forEach((b) => b.setAttribute('aria-pressed', b === botao));
    renderizarProdutos();
  });

  $('#grade').addEventListener('click', (e) => {
    const alvo = e.target.closest('[data-abrir]');
    if (alvo) abrirModal(alvo.dataset.abrir);
  });
}

/* ---------- Modal do produto ---------- */
const modal = $('#modal');

function abrirModal(id) {
  const p = PRODUTOS.find((x) => x.id === id);
  if (!p) return;

  const temFotos = p.imagens && p.imagens.length > 0;
  $('#modalGaleria').style.setProperty('--tom', p.corHex || '#cfd1d4');
  $('#modalPrincipal').innerHTML = temFotos
    ? `<img src="${p.imagens[0]}" alt="${p.modelo}, foto 1">`
    : ilustracao(p);

  $('#modalMiniaturas').innerHTML = temFotos && p.imagens.length > 1
    ? p.imagens.map((src, i) => `<button type="button" data-foto="${i}" aria-label="Ver foto ${i + 1}" aria-pressed="${i === 0}"><img src="${src}" alt=""></button>`).join('')
    : '';

  const estado = $('#modalEstado');
  estado.textContent = textoEstado(p);
  estado.dataset.cat = p.categoria;
  $('#modalTitulo').textContent = p.modelo;
  $('#modalSpec').textContent = textoSpec(p);
  $('#modalPreco').innerHTML = textoPreco(p) + textoParcelas(p);
  $('#modalDetalhes').innerHTML = (p.detalhes || []).map((d) => `<li>${ICONES.check}<span>${d}</span></li>`).join('');
  $('#modalWhats').href = linkWhats(mensagemProduto(p));

  // Trocar foto pelas miniaturas
  $('#modalMiniaturas').onclick = (e) => {
    const b = e.target.closest('[data-foto]');
    if (!b) return;
    const i = Number(b.dataset.foto);
    $('#modalPrincipal').innerHTML = `<img src="${p.imagens[i]}" alt="${p.modelo}, foto ${i + 1}">`;
    $$('#modalMiniaturas button').forEach((x) => x.setAttribute('aria-pressed', x === b));
  };

  document.documentElement.classList.add('travado');
  modal.showModal();
}

function iniciarModal() {
  $('#modalFechar').addEventListener('click', () => modal.close());
  // Clicar fora do conteúdo (no fundo escuro) fecha
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.close(); });
  modal.addEventListener('close', () => document.documentElement.classList.remove('travado'));
}

/* ---------- Hero: troca de cor do iPhone ---------- */
function iniciarHero() {
  const aparelho = $('#heroAparelho');
  const grupo = $('#heroCores');
  const nome = $('#heroCorNome');
  const gigante = $('#heroCorGigante');

  aparelho.innerHTML = ilustracao({ cameras: 3 }, { variaveis: true });
  grupo.innerHTML = CORES_HERO.map((c, i) =>
    `<button class="swatch" type="button" data-i="${i}" style="--c:${c.hex}" aria-label="${c.nome}" aria-pressed="${i === 0}"></button>`
  ).join('');

  let timer;
  function aplicarCor(i, animar = true) {
    const cor = CORES_HERO[i];
    const t = tonsDaCor(cor.hex);
    aparelho.style.setProperty('--f1', t.claro);
    aparelho.style.setProperty('--f2', t.escuro);
    aparelho.style.setProperty('--f3', t.moldura);
    nome.textContent = cor.nome;
    $$('.swatch', grupo).forEach((b) => b.setAttribute('aria-pressed', Number(b.dataset.i) === i));

    const escrever = () => {
      gigante.innerHTML = cor.nome.split(' ').map((palavra) => `<span>${palavra}</span>`).join('');
      gigante.classList.remove('trocando');
    };
    clearTimeout(timer);
    if (animar && !reduzMovimento) {
      gigante.classList.add('trocando');
      timer = setTimeout(escrever, 280);
    } else {
      escrever();
    }
  }

  aplicarCor(0, false);
  grupo.addEventListener('click', (e) => {
    const b = e.target.closest('.swatch');
    if (b) aplicarCor(Number(b.dataset.i));
  });
}

/* ---------- Topo: sombra ao rolar, menu do celular e tema ---------- */
function iniciarTopo() {
  const topo = $('#topo');
  const atualizar = () => topo.classList.toggle('rolou', window.scrollY > 8);
  window.addEventListener('scroll', atualizar, { passive: true });
  atualizar();

  const menu = $('#menu');
  const btnMenu = $('#btnMenu');
  const fecharMenu = () => { menu.classList.remove('aberto'); btnMenu.setAttribute('aria-expanded', 'false'); btnMenu.setAttribute('aria-label', 'Abrir menu'); };
  btnMenu.addEventListener('click', () => {
    const abrir = !menu.classList.contains('aberto');
    menu.classList.toggle('aberto', abrir);
    btnMenu.setAttribute('aria-expanded', String(abrir));
    btnMenu.setAttribute('aria-label', abrir ? 'Fechar menu' : 'Abrir menu');
  });
  $$('a', menu).forEach((a) => a.addEventListener('click', fecharMenu));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') fecharMenu(); });

  // Tema claro/escuro
  const raiz = document.documentElement;
  const btnTema = $('#btnTema');
  const metaCor = $('meta[name="theme-color"]');
  const aplicarTema = (tema) => {
    raiz.dataset.theme = tema;
    btnTema.setAttribute('aria-label', tema === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro');
    if (metaCor) metaCor.content = tema === 'dark' ? '#131416' : '#EDEEEF';
  };
  aplicarTema(raiz.dataset.theme === 'dark' ? 'dark' : 'light');
  btnTema.addEventListener('click', () => {
    const novo = raiz.dataset.theme === 'dark' ? 'light' : 'dark';
    aplicarTema(novo);
    try { localStorage.setItem('tema', novo); } catch (e) { /* navegador sem armazenamento: só não lembra */ }
  });
}

/* ---------- Depoimentos (carrossel) ---------- */
function iniciarDepoimentos() {
  const lista = $('#depoimentos');
  lista.innerHTML = DEPOIMENTOS.map((d) => `
    <li class="depo">
      <blockquote><p>${d.texto}</p></blockquote>
      <footer><strong>${d.nome}</strong><span>${d.detalhe}</span></footer>
    </li>`).join('');

  const anterior = $('#depoAnterior');
  const proximo = $('#depoProximo');
  const passo = () => {
    const card = $('.depo', lista);
    return card ? card.getBoundingClientRect().width + 20 : 300;
  };
  const rolar = (direcao) => lista.scrollBy({ left: direcao * passo(), behavior: reduzMovimento ? 'auto' : 'smooth' });
  anterior.addEventListener('click', () => rolar(-1));
  proximo.addEventListener('click', () => rolar(1));

  const atualizarSetas = () => {
    anterior.disabled = lista.scrollLeft < 4;
    proximo.disabled = lista.scrollLeft + lista.clientWidth >= lista.scrollWidth - 4;
  };
  lista.addEventListener('scroll', atualizarSetas, { passive: true });
  window.addEventListener('resize', atualizarSetas);
  atualizarSetas();
}

/* ---------- Foto da loja (se não existir, mostra o monograma) ---------- */
function iniciarFotoLoja() {
  const figura = $('#fotoLoja');
  const img = $('img', figura);
  const semFoto = () => figura.classList.add('sem-foto');
  img.addEventListener('error', semFoto);
  if (img.complete && img.naturalWidth === 0) semFoto();
}

/* ---------- Revelar seções ao rolar ---------- */
function iniciarRevelar() {
  if (reduzMovimento || !('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('js-revelar');
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visivel');
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  $$('.revelar').forEach((el) => observador.observe(el));
}

/* ---------- Início ---------- */
aplicarConfig();
iniciarHero();
iniciarCatalogo();
iniciarModal();
iniciarTopo();
iniciarDepoimentos();
iniciarFotoLoja();
iniciarRevelar();
