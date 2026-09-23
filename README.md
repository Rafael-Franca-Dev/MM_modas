# MM MODAS — Front-end

E-commerce de roupas com personalidade. O nome vem do apelido de um dos integrantes do grupo: **Menino Mau**.

Stack: **React (componentes funcionais) · JavaScript · CSS tradicional · Vite · React Router**.

## Como rodar

```bash
npm install
npm run dev       # abre em http://localhost:5173
npm run build     # gera a versão de produção em /dist
npm run preview   # testa o build
```

## Páginas (rotas)

| Rota | Página |
| --- | --- |
| `/` | Início: hero, categorias, drop da semana, manifesto, newsletter |
| `/loja` | Catálogo com filtro por categoria (`?categoria=`), busca, promoções e ordenação |
| `/produto/:slug` | Detalhe do produto: cor, tamanho, quantidade, adicionar ao carrinho |
| `/carrinho` | Carrinho com barra de frete grátis e cupom (`MENINOMAU10`) |
| `/checkout` | Formulário com validação e confirmação do pedido |
| `/sobre` | A história do Menino Mau |
| `/contato` | Formulário de contato + FAQ |
| `*` | Página 404 |

## Estrutura

```
src/
├── components/        # Header, Footer, Logo/Mascot, ProductCard, ProductArt, Toast, Icons
├── context/           # CartContext (useReducer + localStorage) e regras do carrinho
├── data/products.js   # catálogo fictício
├── pages/             # uma pasta por página (JSX + CSS)
├── styles/global.css  # variáveis de cor, tipografia, botões, formulários
└── utils/format.js    # formatação de preço (R$)
```

Cada componente tem o seu próprio arquivo `.css`, importado no `.jsx`.

## Identidade visual

- **Laranja claro** `#ffc596` e **roxo claro** `#c8b3f0` como cores de marca; tinta roxa escura `#2c1f4a` para textos.
- Botão principal em roxo `#6c4cbb` com texto branco (contraste AA).
- Fontes: *Bricolage Grotesque* (títulos) e *DM Sans* (texto), via Google Fonts.
- Mascote em SVG (`src/components/Logo/Mascot.jsx`) inspirado na caricatura do Menino Mau.

Todas as cores ficam em `:root` no `global.css` — mude ali e o site inteiro acompanha.

## Fotos dos produtos

As peças são ilustrações em SVG (`ProductArt`). Para usar fotos reais, troque o
`<ProductArt ... />` por `<img src={product.image} alt={product.name} />` e adicione
o campo `image` em `data/products.js`.
