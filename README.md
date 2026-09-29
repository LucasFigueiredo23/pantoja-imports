# Site Pantoja Imports

Vitrine de iPhones feita em HTML, CSS e JavaScript puros. Não tem login, carrinho nem pagamento: todo botão de compra leva ao WhatsApp com a mensagem já escrita.

## Estrutura

```
pantoja-imports/
├── index.html          estrutura da página (textos fixos, seções, SEO)
├── style.css           visual: cores, fontes, espaçamentos, animações, celular
├── script.js           dados da loja, produtos, depoimentos e interações
├── README.md           este guia
├── wrangler.jsonc      configuração do Cloudflare
├── _headers            cache e segurança (Cloudflare)
├── .assetsignore       arquivos que não vão para o site
└── assets/
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

Arquivo: `script.js`, lista `PRODUTOS`. Copie um bloco inteiro (de `{` até `},`), cole abaixo e edite:

```js
{
  id: 'iphone-15-pro-256-preto',   // único, sem espaços
  modelo: 'iPhone 15 Pro',
  categoria: 'seminovo',           // 'novo' | 'seminovo' | 'acessorio'
  armazenamento: '256 GB',
  cor: 'Titânio preto',
  corHex: '#3b3c3e',               // cor do desenho e do fundo do card
  bateria: 90,                     // só seminovo
  cameras: 3,                      // 2 ou 3
  preco: 4999,                     // ou null para "Consulte"
  selo: '',                        // ex.: 'Oportunidade'
  imagens: [],                     // fotos reais (ver abaixo)
  detalhes: ['Saúde da bateria em 90%', 'Garantia da loja de 90 dias'],
},
```

Para remover, apague o bloco. Para vender, apague ou mude o preço para `null`.

## Usar fotos reais

1. Salve as fotos em `assets/produtos/` (ideal: `.webp`, 1200x1500 px, fundo liso).
2. No produto, preencha `imagens: ['assets/produtos/iphone-15-pro-1.webp', 'assets/produtos/iphone-15-pro-2.webp']`.
3. A primeira foto aparece no card; todas aparecem no modal, com miniaturas.

Sem fotos, o site mostra um desenho do aparelho na cor escolhida em `corHex`. Para converter JPG em WebP de graça: squoosh.app.

Use fotos tiradas por vocês. Fotos oficiais da Apple têm direitos de imagem.

## Foto da loja

Salve como `assets/loja.webp`. Se o arquivo não existir, aparece o monograma no lugar.

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
- `_headers`: cache (página/CSS/JS sempre atualizados, imagens guardadas por 1 dia) e cabeçalhos de segurança.

Depois de publicar, troque no `index.html` o `og:url` e o `og:image` pelo endereço final do site, por exemplo `https://pantojaimports.com.br/assets/og-image.png`. Sem isso, a imagem pode não aparecer ao compartilhar o link no WhatsApp.

## Cores e fontes

Arquivo: `style.css`, bloco `:root` no início. As cores do modo escuro estão logo abaixo. Fontes: Unbounded (títulos) e Onest (textos), do Google Fonts.
