/* =============================================================
   Pantoja Imports: produtos da vitrine
   -------------------------------------------------------------
   Este é o único arquivo que você edita para mudar os aparelhos.
   Para adicionar: copie um bloco inteiro (de { até },), cole e edite.
   Para remover: apague o bloco. A ordem aqui é a ordem no site.

   Campos:
   modelo         nome que aparece no card (ex.: 'iPhone 15 Pro')
   armazenamento  ex.: '128 GB' (deixe '' em acessório)
   cor            nome da cor (ex.: 'Titânio natural'; '' se não se aplica)
   condicao       'novo' | 'seminovo' | 'acessorio'
   bateria        saúde da bateria em %, só para seminovo (ex.: 91)
   preco          número em reais (ex.: 5499) ou null para mostrar "Consulte"
   selo           destaque curto na foto (ex.: 'Oportunidade') ou ''
   destaque       true = aparece também na faixa "Em destaque" logo abaixo do topo
   fotos          fotos reais em assets/produtos/ (WebP, 1200x1500, ver README).
                  A primeira é a foto principal. Pode ser só o caminho:
                    fotos: ['assets/produtos/iphone-15-rosa-1.webp', 'assets/produtos/iphone-15-rosa-2.webp'],
                  ou com uma descrição própria (melhor para quem usa leitor de tela):
                    fotos: [{ src: 'assets/produtos/iphone-15-rosa-1.webp', alt: 'iPhone 15 rosa, traseira' }],
                  Sem foto ([]), aparece um fundo neutro com o logo da loja.
   detalhes       lista que aparece ao abrir o produto
   ============================================================= */

const PRODUTOS = [
  {
    modelo: 'iPhone 15 Pro Max',
    armazenamento: '256 GB',
    cor: 'Azul intenso',
    condicao: 'novo',
    preco: 8999,
    selo: 'Mais vendido',
    destaque: true,
    fotos: ['assets/produtos/iphone15pro.webp'],
    detalhes: ['Lacrado, com nota fiscal', 'Garantia Apple de 1 ano', 'Acompanha cabo USB-C'],
  },
  {
    modelo: 'iPhone 15 Pro Max',
    armazenamento: '256 GB',
    cor: 'cinza espacial',
    condicao: 'novo',
    preco: 9499,
    selo: 'Lançamento',
    destaque: true,
    fotos: ['assets/produtos/iphone15profosco.webp'],
    detalhes: ['Lacrado, com nota fiscal', 'Garantia Apple de 1 ano', 'Acompanha cabo USB-C'],
  },
  {
    modelo: 'iPhone 15',
    armazenamento: '256 GB',
    cor: 'Sálvia',
    condicao: 'novo',
    preco: 6799,
    selo: '',
    destaque: true,
    fotos: ['assets/produtos/iphone13.webp'],
    detalhes: ['Lacrado, com nota fiscal', 'Garantia Apple de 1 ano', 'Acompanha cabo USB-C'],
  },
  {
    modelo: 'iPhone 16 Pro Max',
    armazenamento: '128 GB',
    cor: 'Titânio deserto',
    condicao: 'seminovo',
    bateria: 91,
    preco: 5499,
    selo: '',
    destaque: true,
    fotos: ['assets/produtos/iphone12promax.webp'],
    detalhes: ['Saúde da bateria em 91%', 'Sem marcas de uso na tela', 'Face ID e câmeras revisados', 'Garantia da loja de 90 dias'],
  },
  {
    modelo: 'iPhone 15',
    armazenamento: '128 GB',
    cor: 'Rosa',
    condicao: 'seminovo',
    bateria: 88,
    preco: 3299,
    selo: '',
    destaque: false,
    fotos: [],
    detalhes: ['Saúde da bateria em 88%', 'Pequenos sinais de uso na lateral', 'Face ID e câmeras revisados', 'Garantia da loja de 90 dias'],
  },
  {
    modelo: 'iPhone 14 Pro',
    armazenamento: '256 GB',
    cor: 'Roxo-profundo',
    condicao: 'seminovo',
    bateria: 85,
    preco: 3899,
    selo: 'Oportunidade',
    destaque: true,
    fotos: [],
    detalhes: ['Saúde da bateria em 85%', 'Tela sem riscos', 'Face ID e câmeras revisados', 'Garantia da loja de 90 dias'],
  },
  {
    modelo: 'Carregador USB-C 20W',
    armazenamento: '',
    cor: 'Branco',
    condicao: 'acessorio',
    preco: 149,
    selo: '',
    destaque: false,
    fotos: [],
    detalhes: ['Carregamento rápido', 'Compatível com todos os iPhones com USB-C ou Lightning (com cabo)', 'Garantia de 90 dias'],
  },
  {
    modelo: 'Película de vidro 3D',
    armazenamento: '',
    cor: '',
    condicao: 'acessorio',
    preco: 49,
    selo: '',
    destaque: false,
    fotos: [],
    detalhes: ['Para todos os modelos de iPhone', 'Borda a borda', 'Aplicação na hora, na loja', 'Diga o seu modelo no WhatsApp'],
  },
];
