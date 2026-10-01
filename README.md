# Site Pantoja Imports

Vitrine de iPhones feita em HTML, CSS e JavaScript puros. Não tem login, carrinho nem pagamento: todo botão de compra leva ao WhatsApp com a mensagem já escrita.

## Estrutura

```
pantoja-imports/
├── index.html          estrutura da página (textos fixos, seções, SEO)
├── style.css           visual: cores, espaçamentos, animações, celular, tema escuro
├── produtos.js         OS APARELHOS DA VITRINE (único arquivo que você edita para mudar produtos)
├── script.js           dados da loja (WhatsApp, endereço...), depoimentos e interações
├── README.md           este guia
├── wrangler.jsonc      configuração do Cloudflare
├── _headers            cache e segurança (Cloudflare)
├── .assetsignore       arquivos que não vão para o site
└── assets/
    ├── fontes/               Archivo (títulos expandidos e textos), servida pelo próprio site
    ├── logo.svg              logo (monograma)
    ├── favicon.svg           ícone da aba do navegador
    ├── favicon-16.png        ícone da aba (navegadores antigos)
    ├── favicon-32.png
    ├── apple-touch-icon.png  ícone ao salvar o site na tela do iPhone
    ├── logo-512.png          logo em PNG para usos gerais
    ├── logo-instagram.svg    foto de perfil do Instagram (vetor)
    ├── logo-instagram.png    foto de perfil do Instagram, 1080x1080
    ├── og-image.png          imagem que aparece ao compartilhar o link
    ├── loja.webp             (você adiciona) foto da loja para a seção "Sobre"
    ├── hero.webp             (opcional) foto do topo da página
    └── produtos/             (você adiciona) fotos reais dos aparelhos
```

## Trocar o número do WhatsApp (e outros dados)

Arquivo: `script.js`, bloco `CONFIG`, no topo.

```js
whatsapp: '5591988887777', // só números: 55 + DDD + número
instagram: 'pantojaimports', // sem o @
```

No mesmo bloco ficam endereço, horário, TikTok, Facebook, CNPJ, mapa e as mensagens prontas. Todos os botões de WhatsApp do site usam esse número automaticamente.

O nome da loja aparece também no `<title>` e nas tags `og:` do `index.html`. Se mudar o nome, troque lá também.

## Adicionar um produto

Arquivo: `produtos.js`. Copie um bloco inteiro (de `{` até `},`), cole abaixo e edite:

```js
{
  modelo: 'iPhone 15 Pro',
  armazenamento: '256 GB',
  cor: 'Titânio preto',
  condicao: 'seminovo',            // 'novo' | 'seminovo' | 'acessorio'
  bateria: 90,                     // só seminovo
  preco: 4999,                     // ou null para mostrar "Consulte"
  selo: '',                        // ex.: 'Oportunidade' (aparece sobre a foto)
  destaque: true,                  // true = aparece na faixa "Em destaque"
  fotos: [
    'assets/produtos/iphone-15-pro-preto-1.webp',
    'assets/produtos/iphone-15-pro-preto-2.webp',
  ],
  detalhes: ['Saúde da bateria em 90%', 'Garantia da loja de 90 dias'],
},
```

- A ordem dos blocos é a ordem no site.
- Para remover um aparelho vendido, apague o bloco.
- O botão "Tenho interesse" já abre o WhatsApp com modelo, armazenamento, cor e condição escritos.
- A faixa "Em destaque" (logo abaixo do topo) mostra os produtos com `destaque: true`. Mostra 4 por linha no computador e vira faixa de arrastar no celular. Se nenhum tiver destaque, a seção some.

## Usar fotos reais

Só fotos tiradas por vocês dos aparelhos da loja. Nada de foto oficial da Apple.

**Formato para exportar:** WebP, **1200 x 1500 px** (vertical, proporção 4:5), qualidade por volta de 80, até uns 250 KB cada. Para converter de graça: squoosh.app (escolha WebP e redimensione para 1200 de largura).

1. Salve em `assets/produtos/` com nome simples, sem espaço nem acento: `iphone-15-pro-preto-1.webp`.
2. Coloque os caminhos em `fotos` no produto. A primeira é a foto principal do card.
3. Com mais de uma foto, o card vira uma galeria: arrastar no celular, pontinhos no computador e miniaturas ao abrir o produto.

O site gera a descrição da foto para leitores de tela ("iPhone 15 Pro, 256 GB, Titânio preto, foto 2 de 3"). Se quiser descrever melhor uma foto específica:

```js
fotos: [{ src: 'assets/produtos/iphone-15-pro-preto-2.webp', alt: 'iPhone 15 Pro preto, lateral com pequeno risco' }],
```

Produto sem foto (`fotos: []`) mostra um fundo neutro com o logo da loja bem apagado.

## Foto no topo da página (hero)

Hoje o topo é só texto. Para colocar uma foto depois, sem refazer nada:

1. Salve a foto em `assets/hero.webp` (mesmo formato: WebP 1200 x 1500).
2. No `index.html`, na seção HERO, troque `<section class="hero" id="inicio">` por `<section class="hero hero--com-foto" id="inicio">`.
3. Logo abaixo, descomente o bloco `<figure class="hero__foto">` (apague o `<!--` e o `-->` em volta) e escreva no `alt` o que aparece na foto.

Com a classe `hero--com-foto`, o layout vira duas colunas no computador (texto à esquerda, foto à direita) e a foto desce para baixo do texto no celular.

## Foto da loja

Salve como `assets/loja.webp` (1200 x 1500) e, no `index.html`, seção SOBRE, descomente a linha do `<img src="assets/loja.webp" ...>`. Enquanto isso, aparece o monograma.

## Mapa

No Google Maps, abra o endereço da loja, clique em Compartilhar, depois em Incorporar um mapa. Copie só o link que está dentro de `src="..."` e cole em `CONFIG.mapaEmbed`.

## Ícones de redes sociais

Os botões usam ícones genéricos (balão de conversa e @). Se quiser os ícones oficiais do WhatsApp e do Instagram, baixe nas páginas de marca de cada empresa e siga as regras de uso delas.

## Publicar de graça

Qualquer uma destas funciona com os arquivos como estão: Cloudflare, Netlify (arraste a pasta em app.netlify.com/drop), Vercel ou GitHub Pages.

### Cloudflare

1. No painel do Cloudflare: Workers & Pages → Create → Import a repository → escolha `pantoja-imports`.
2. Build command: deixe vazio. Deploy command: `npx wrangler deploy` (é o padrão).
3. Salve. A cada push na `main` o site é atualizado sozinho.

Arquivos usados pelo Cloudflare:
- `wrangler.jsonc`: nome do projeto e pasta publicada (a raiz, sem build).
- `.assetsignore`: o que não vai para o site (README, configs, `.git`).
- `_headers`: cache (página, CSS, JS e `produtos.js` sempre atualizados; imagens guardadas por 1 dia; fontes por 1 ano) e cabeçalhos de segurança.

A imagem de compartilhamento (`og:image`) está comentada no `index.html`. Descomente o bloco e coloque o endereço completo da imagem (1200 x 630), por exemplo `https://pantojaimports.com.br/assets/og-image.png`. Se mudar de domínio, troque também `canonical` e `og:url`. Sem `og:image`, o WhatsApp mostra o link sem imagem.

## Tema claro e escuro

Na primeira visita o site segue o tema do celular/computador da pessoa. Se ela tocar no botão de lua/sol, a escolha fica salva naquele aparelho.

## Cores, espaços e fontes

Arquivo: `style.css`, bloco `:root` no início: cores, escala de espaçamento (`--e-1` a `--e-8`), raios (`--raio-*`), sombras e velocidades de animação. As cores do modo escuro estão logo abaixo. Fonte: Archivo, em `assets/fontes/`. É uma fonte variável: os títulos usam a versão expandida (`--display-largura: 125%`) e os textos a normal. Para títulos menos largos, diminua esse valor (mínimo 100%).
