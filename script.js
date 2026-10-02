/* =============================================================
   Pantoja Imports: script principal
   -------------------------------------------------------------
   Os aparelhos ficam em produtos.js. Aqui você só mexe em:
     1. CONFIG       -> dados da loja (WhatsApp, Instagram, entrega...)
     2. DEPOIMENTOS  -> avaliações de clientes
   Depois do aviso "DAQUI PARA BAIXO" fica a lógica do site.
   ============================================================= */

/* ---------- 1. CONFIG ---------- */
const CONFIG = {
  nomeLoja: 'Pantoja Imports',
  dono: 'Amir Pantoja',

  // Só números: DDI (55) + DDD + número. Ex.: 5591988887777
  whatsapp: '5591982042885',

  instagram: 'pantojaimports', // sem o @
  tiktok: '',                  // ex.: 'pantojaimports' (vazio = não aparece)
  facebook: '',                // ex.: 'pantojaimports' (vazio = não aparece)

  // Horário de atendimento pelo WhatsApp (a loja trabalha só com entrega)
  horario: ['Segunda a sexta, 9h às 18h', 'Sábado, 9h às 13h'],

  // Bloco "Como funciona a entrega", na seção Contato.
  // Campo vazio ('') = a linha não aparece.
  // ATENÇÃO: textos provisórios, confirme cada um antes de publicar.
  entrega: {
    area: 'Castanhal e cidades da região',               // cidades ou bairros atendidos
    prazo: 'No mesmo dia para pedidos até 16h',
    taxa: 'Grátis em Castanhal, a combinar em outras cidades',
    pagamento: 'Pix ou cartão em até 12x',
  },

  cnpj: '', // ex.: '00.000.000/0001-00' (vazio = não aparece)
  parcelamento: 'ou em até 12x no cartão',

  // Mensagens que já chegam escritas no WhatsApp
  mensagens: {
    geral: 'Olá! Vim pelo site e quero saber mais sobre os aparelhos.',
    troca: 'Olá! Tenho um iPhone usado e quero avaliar para dar na troca.',
    entrega: 'Olá! Quero saber o prazo e a taxa de entrega para o meu endereço. Bairro e cidade: ',
  },
};

/* ---------- 2. DEPOIMENTOS (troque pelos reais, com autorização do cliente) ---------- */
const DEPOIMENTOS = [
  { nome: 'Juliana M.', detalhe: 'Comprou um iPhone 15', texto: 'Atendimento muito rápido no WhatsApp. O aparelho chegou exatamente como nas fotos, bateria ótima.' },
  { nome: 'Rafael S.', detalhe: 'Deu o usado na troca', texto: 'Dei meu 12 na troca e peguei um 15 Pro. Avaliação justa e resolvi tudo no mesmo dia.' },
  { nome: 'Carla T.', detalhe: 'Comprou um iPhone 17', texto: 'Tirei todas as dúvidas antes de fechar. Lacrado, com nota e parcelado no cartão.' },
  { nome: 'Diego A.', detalhe: 'Comprou um iPhone 14 Pro', texto: 'Segundo aparelho que compro aqui. Seminovo impecável, parecia novo.' },
  { nome: 'Patrícia L.', detalhe: 'Comprou acessórios', texto: 'Aplicaram a película na hora e ainda deram dicas para cuidar da bateria.' },
];


/* =============================================================
   DAQUI PARA BAIXO: lógica do site
   ============================================================= */

const $ = (seletor, el = document) => el.querySelector(seletor);
const $$ = (seletor, el = document) => [...el.querySelectorAll(seletor)];
const reduzMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Evita que aspas ou < > nos textos dos produtos quebrem o HTML
const esc = (texto) => String(texto ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const ICONES = {
  whats: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.6a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5 5 16a8.4 8.4 0 1 1 15.5-4.4Z"/></svg>',
  check: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.2 2.4 2.4 4.6-4.9"/></svg>',
  // Bloco de entrega: mapa dobrado, relógio, etiqueta e cartão
  area: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 4 3.5 6v14L9 18l6 2 5.5-2V4L15 6 9 4Z"/><path d="M9 4v14M15 6v14"/></svg>',
  prazo: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3 2"/></svg>',
  taxa: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 12.4V4.5a1 1 0 0 1 1-1h7.9l8.1 8.1a1.5 1.5 0 0 1 0 2.1l-6.8 6.8a1.5 1.5 0 0 1-2.1 0l-8.1-8.1Z"/><circle cx="8.3" cy="8.3" r="1.5"/></svg>',
  pagamento: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5.5" width="18" height="13" rx="2.5"/><path d="M3 10h18M7 15h4"/></svg>',
  // Monograma da loja, usado no fundo de produto sem foto
  logo: '<svg viewBox="0 0 64 64" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round"><line x1="22" y1="16" x2="22" y2="48"/><circle cx="33" cy="27" r="11"/><circle cx="33" cy="27" r="3.5" fill="currentColor" stroke="none"/></svg>',
};

/* ---------- Textos e links ---------- */
function linkWhats(mensagem) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

const formatoReal = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

const CONDICOES = { novo: 'Novo', seminovo: 'Seminovo', acessorio: 'Acessório' };

function textoPreco(p) {
  return p.preco == null ? 'Consulte' : formatoReal.format(p.preco);
}

function textoParcelas(p) {
  // Parcelamento só aparece em aparelhos (não em acessórios baratos)
  return p.preco != null && p.condicao !== 'acessorio' ? `<small>${esc(CONFIG.parcelamento)}</small>` : '';
}

// "128 GB · Titânio deserto · Bateria 91%"
function textoSpec(p) {
  const bateria = p.condicao === 'seminovo' && p.bateria ? `Bateria ${p.bateria}%` : '';
  return [p.armazenamento, p.cor, bateria].filter(Boolean).join(' · ');
}

function nomeCompleto(p) {
  return [p.modelo, p.armazenamento, p.cor].filter(Boolean).join(', ');
}

function mensagemProduto(p) {
  let texto = p.modelo;
  if (p.armazenamento) texto += ` ${p.armazenamento}`;
  if (p.cor) texto += `, cor ${p.cor}`;
  if (p.condicao === 'novo' || p.condicao === 'seminovo') texto += ` (${p.condicao})`;
  const preco = p.preco == null ? '' : `, por ${formatoReal.format(p.preco)}`;
  return `Olá! Vi no site e tenho interesse no ${texto}${preco}. Ainda está disponível?`;
}

/* ---------- Fotos e galeria (usada no card, nos destaques e no modal) ---------- */

// Aceita 'caminho.webp' ou { src, alt }
function fotosDe(p) {
  return (p.fotos || []).map((f) => (typeof f === 'string' ? { src: f } : f));
}

function altFoto(p, foto, i, total) {
  if (foto.alt) return foto.alt;
  return total > 1 ? `${nomeCompleto(p)}, foto ${i + 1} de ${total}` : nomeCompleto(p);
}

/*
  modo: 'card'  -> pontinhos sobre a foto; tocar na foto abre o produto
        'modal' -> miniaturas embaixo
  limite: quantas fotos mostrar (a faixa de destaques usa só a primeira)
*/
function galeriaHTML(p, { modo = 'card', limite = Infinity } = {}) {
  const fotos = fotosDe(p).slice(0, limite);
  const total = fotos.length;
  const indice = PRODUTOS.indexOf(p);
  const lazy = modo === 'card' ? ' loading="lazy"' : '';

  const slides = total
    ? fotos.map((f, i) => `<li class="galeria__slide"><img src="${esc(f.src)}" alt="${esc(altFoto(p, f, i, total))}" width="1200" height="1500" decoding="async"${lazy}></li>`).join('')
    : `<li class="galeria__slide"><div class="foto-vazia">${ICONES.logo}</div></li>`;

  // Com mais de uma foto o trilho rola; precisa ser focável para quem usa teclado (setas)
  const rolavel = total > 1 ? ` tabindex="0" aria-label="Fotos de ${esc(p.modelo)}. Use as setas para ver as outras."` : '';
  const abrir = modo === 'card' ? ` data-abrir="${indice}"` : '';

  let controles = '';
  if (total > 1 && modo === 'card') {
    // Para mouse e toque; quem usa teclado rola o trilho com as setas
    controles = `<div class="galeria__pontos" aria-hidden="true">${fotos.map((_, i) =>
      `<button type="button" tabindex="-1" data-ir-foto="${i}"${i === 0 ? ' aria-current="true"' : ''}></button>`).join('')}</div>`;
  } else if (total > 1) {
    controles = `<div class="galeria__miniaturas">${fotos.map((f, i) =>
      `<button type="button" data-ir-foto="${i}" aria-label="Ver foto ${i + 1} de ${total}"${i === 0 ? ' aria-current="true"' : ''}><img src="${esc(f.src)}" alt="" width="1200" height="1500" loading="lazy" decoding="async"></button>`).join('')}</div>`;
  }

  return `<div class="galeria galeria--${modo}" data-galeria>
    <ul class="galeria__trilho" data-trilho${rolavel}${abrir}>${slides}</ul>
    ${controles}
  </div>`;
}

function irParaFoto(galeria, i) {
  const trilho = $('[data-trilho]', galeria);
  trilho.scrollTo({ left: i * trilho.clientWidth, behavior: reduzMovimento ? 'auto' : 'smooth' });
}

function iniciarGalerias() {
  // Pontinhos e miniaturas
  document.addEventListener('click', (e) => {
    const botao = e.target.closest('[data-ir-foto]');
    if (!botao) return;
    irParaFoto(botao.closest('[data-galeria]'), Number(botao.dataset.irFoto));
  });

  // Marca a foto atual enquanto o trilho rola (arrastando, pelas setas ou pelos botões)
  let quadro = 0;
  document.addEventListener('scroll', (e) => {
    const trilho = e.target;
    if (!(trilho instanceof Element) || !trilho.matches('[data-trilho]')) return;
    cancelAnimationFrame(quadro);
    quadro = requestAnimationFrame(() => {
      const atual = Math.round(trilho.scrollLeft / trilho.clientWidth);
      $$('[data-ir-foto]', trilho.closest('[data-galeria]')).forEach((b, i) => {
        if (i === atual) b.setAttribute('aria-current', 'true');
        else b.removeAttribute('aria-current');
      });
    });
  }, { capture: true, passive: true });
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

  $('#horario').innerHTML = CONFIG.horario.map((h) => `<span>${esc(h)}</span>`).join('');

  const extras = [
    CONFIG.tiktok && `<a href="https://tiktok.com/@${esc(CONFIG.tiktok)}" target="_blank" rel="noopener">TikTok</a>`,
    CONFIG.facebook && `<a href="https://facebook.com/${esc(CONFIG.facebook)}" target="_blank" rel="noopener">Facebook</a>`,
  ].filter(Boolean);
  if (extras.length) {
    $('#redesExtras').innerHTML = extras.join('');
    $('#redesExtrasLinha').hidden = false;
  }

  $('#ano').textContent = new Date().getFullYear();
  if (CONFIG.cnpj) $('#cnpj').textContent = `CNPJ ${CONFIG.cnpj}.`;

  // Como funciona a entrega: uma linha por campo preenchido em CONFIG.entrega
  const LINHAS_ENTREGA = [
    ['area', 'Área atendida'],
    ['prazo', 'Prazo'],
    ['taxa', 'Taxa de entrega'],
    ['pagamento', 'Pagamento'],
  ];
  const entrega = CONFIG.entrega || {};
  $('#entregaLista').innerHTML = LINHAS_ENTREGA
    .filter(([campo]) => entrega[campo])
    .map(([campo, titulo]) => `<div><dt>${ICONES[campo]}${titulo}</dt><dd>${esc(entrega[campo])}</dd></div>`)
    .join('');
}

/* ---------- Catálogo ---------- */
const CATEGORIAS = [
  ['todos', 'Todos'],
  ['novo', 'Novos'],
  ['seminovo', 'Seminovos'],
  ['acessorio', 'Acessórios'],
];
let filtroAtual = 'todos';

// O mesmo card serve para a vitrine e para a faixa de destaques
function cardHTML(p, { limiteFotos = Infinity } = {}) {
  const i = PRODUTOS.indexOf(p);
  const spec = textoSpec(p);
  const nome = esc(nomeCompleto(p));

  return `<li class="card">
    <div class="card__midia">
      ${p.selo ? `<span class="selo">${esc(p.selo)}</span>` : ''}
      ${galeriaHTML(p, { modo: 'card', limite: limiteFotos })}
    </div>
    <div class="card__info">
      <p class="etiqueta" data-condicao="${esc(p.condicao)}">${CONDICOES[p.condicao] || ''}</p>
      <h3 class="card__nome"><button type="button" data-abrir="${i}">${esc(p.modelo)}</button></h3>
      ${spec ? `<p class="card__spec">${esc(spec)}</p>` : ''}
      <p class="card__preco">${textoPreco(p)}${textoParcelas(p)}</p>
      <div class="card__acoes">
        <a class="btn btn--escuro" href="${linkWhats(mensagemProduto(p))}" target="_blank" rel="noopener" aria-label="Tenho interesse: ${nome}, abrir WhatsApp">${ICONES.whats}Tenho interesse</a>
        <button class="btn btn--linha" type="button" data-abrir="${i}" aria-label="Detalhes: ${nome}">Detalhes</button>
      </div>
    </div>
  </li>`;
}

function renderizarFiltros() {
  const contar = (cat) => (cat === 'todos' ? PRODUTOS.length : PRODUTOS.filter((p) => p.condicao === cat).length);
  $('#filtros').innerHTML = CATEGORIAS
    .filter(([cat]) => contar(cat) > 0)
    .map(([cat, nome]) => `<button class="filtro" type="button" data-filtro="${cat}" aria-pressed="${cat === filtroAtual}">${nome} <span>${contar(cat)}</span></button>`)
    .join('');
}

function renderizarProdutos() {
  const lista = filtroAtual === 'todos' ? PRODUTOS : PRODUTOS.filter((p) => p.condicao === filtroAtual);
  $('#grade').innerHTML = lista.map((p) => cardHTML(p)).join('');
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

  // Nome, botão "Detalhes" ou toque na foto abrem o produto (na vitrine e nos destaques)
  document.addEventListener('click', (e) => {
    const alvo = e.target.closest('[data-abrir]');
    if (alvo) abrirModal(PRODUTOS[Number(alvo.dataset.abrir)]);
  });
}

/* ---------- Destaques: produtos com destaque: true ---------- */
function iniciarDestaques() {
  const lista = PRODUTOS.filter((p) => p.destaque);
  if (!lista.length) return; // a seção continua escondida
  // Na faixa o arraste move a faixa, então cada card mostra só a foto principal
  $('#faixaDestaques').innerHTML = lista.map((p) => cardHTML(p, { limiteFotos: 1 })).join('');
  $('#destaques').hidden = false;
}

/* ---------- Modal do produto ---------- */
const modal = $('#modal');

function abrirModal(p) {
  if (!p) return;

  $('#modalGaleria').innerHTML = galeriaHTML(p, { modo: 'modal' });
  const condicao = $('#modalCondicao');
  condicao.textContent = CONDICOES[p.condicao] || '';
  condicao.dataset.condicao = p.condicao;
  $('#modalTitulo').textContent = p.modelo;
  $('#modalSpec').textContent = textoSpec(p);
  $('#modalPreco').innerHTML = textoPreco(p) + textoParcelas(p);
  $('#modalDetalhes').innerHTML = (p.detalhes || []).map((d) => `<li>${ICONES.check}<span>${esc(d)}</span></li>`).join('');
  $('#modalWhats').href = linkWhats(mensagemProduto(p));

  document.documentElement.classList.add('travado');
  modal.showModal();
}

function iniciarModal() {
  $('#modalFechar').addEventListener('click', () => modal.close());
  // Clicar fora do conteúdo (no fundo escuro) fecha
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.close(); });
  modal.addEventListener('close', () => document.documentElement.classList.remove('travado'));
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
}

/* ---------- Tema: segue o sistema até a pessoa escolher pelo botão ---------- */
function iniciarTema() {
  const raiz = document.documentElement;
  const btnTema = $('#btnTema');
  const sistemaEscuro = window.matchMedia('(prefers-color-scheme: dark)');
  const temaAtual = () => raiz.dataset.theme || (sistemaEscuro.matches ? 'dark' : 'light');

  const atualizar = () => {
    const tema = temaAtual();
    btnTema.setAttribute('aria-label', tema === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro');
    // Cor da barra do navegador no celular: com escolha manual, vale a escolha
    if (raiz.dataset.theme) {
      $$('meta[name="theme-color"]').forEach((m) => { m.content = tema === 'dark' ? '#131416' : '#EDEEEF'; });
    }
  };

  btnTema.addEventListener('click', () => {
    const novo = temaAtual() === 'dark' ? 'light' : 'dark';
    raiz.dataset.theme = novo;
    try { localStorage.setItem('tema', novo); } catch (e) { /* navegador sem armazenamento: só não lembra */ }
    atualizar();
  });
  sistemaEscuro.addEventListener('change', atualizar);
  atualizar();
}

/* ---------- WhatsApp flutuante: aparece depois que o topo sai da tela ---------- */
function iniciarWhatsFlutuante() {
  const botao = $('#whatsFlutuante');
  if (!('IntersectionObserver' in window)) { botao.classList.add('visivel'); return; }
  new IntersectionObserver(([entrada]) => {
    botao.classList.toggle('visivel', !entrada.isIntersecting);
  }).observe($('#inicio'));
}

/* ---------- Depoimentos (carrossel) ---------- */
function iniciarDepoimentos() {
  const lista = $('#depoimentos');
  lista.innerHTML = DEPOIMENTOS.map((d) => `
    <li class="depo">
      <blockquote><p>${esc(d.texto)}</p></blockquote>
      <footer><strong>${esc(d.nome)}</strong><span>${esc(d.detalhe)}</span></footer>
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
iniciarDestaques();
iniciarCatalogo();
iniciarGalerias();
iniciarModal();
iniciarTopo();
iniciarTema();
iniciarWhatsFlutuante();
iniciarDepoimentos();
iniciarRevelar();
