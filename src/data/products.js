// Catálogo fictício da MM MODAS.
// "type" define qual ilustração de peça é desenhada (ver ProductArt).

export const categories = [
  { id: 'camisetas', name: 'Camisetas', art: 'tee', bg: 'var(--laranja-200)' },
  { id: 'moletons', name: 'Moletons', art: 'hoodie', bg: 'var(--roxo-200)' },
  { id: 'jaquetas', name: 'Jaquetas', art: 'jacket', bg: 'var(--roxo-100)' },
  { id: 'calcas-shorts', name: 'Calças & Shorts', art: 'pants', bg: 'var(--laranja-100)' },
  { id: 'vestidos', name: 'Vestidos', art: 'dress', bg: 'var(--laranja-200)' },
  { id: 'acessorios', name: 'Acessórios', art: 'cap', bg: 'var(--roxo-200)' },
]

export const products = [
  {
    id: 1,
    slug: 'camiseta-sorriso-maroto',
    name: 'Camiseta Sorriso Maroto',
    category: 'camisetas',
    type: 'tee',
    price: 89.9,
    oldPrice: 119.9,
    colors: [
      { name: 'Lavanda', hex: '#c8b3f0' },
      { name: 'Pêssego', hex: '#ffc596' },
      { name: 'Off-white', hex: '#fbf6ee' },
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    tags: ['drop'],
    description:
      'A camiseta que começou tudo. Algodão penteado 100%, modelagem levemente oversized e o sorriso do Menino Mau estampado no peito. Pra quem não pede licença pra ser quem é.',
  },
  {
    id: 2,
    slug: 'moletom-sem-filtro',
    name: 'Moletom Sem Filtro',
    category: 'moletons',
    type: 'hoodie',
    price: 219.9,
    colors: [
      { name: 'Roxo claro', hex: '#b7a0ea' },
      { name: 'Laranja suave', hex: '#ffb57d' },
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    tags: ['novo'],
    description:
      'Moletom flanelado por dentro, capuz forrado e bolso canguru. Quentinho, mas sem perder a pose. Punhos e barra em ribana reforçada.',
  },
  {
    id: 3,
    slug: 'calca-cargo-role',
    name: 'Calça Cargo Rolê',
    category: 'calcas-shorts',
    type: 'pants',
    price: 179.9,
    colors: [
      { name: 'Areia', hex: '#e9d6bf' },
      { name: 'Grafite lilás', hex: '#6e6190' },
    ],
    sizes: ['36', '38', '40', '42', '44'],
    tags: [],
    description:
      'Sarja com elastano, bolsos laterais de verdade e cordão ajustável na barra. Aguenta o dia inteiro de rolê e ainda sobra estilo.',
  },
  {
    id: 4,
    slug: 'bone-menino-mau',
    name: 'Boné Menino Mau',
    category: 'acessorios',
    type: 'cap',
    price: 79.9,
    colors: [
      { name: 'Pêssego', hex: '#ffc596' },
      { name: 'Lavanda', hex: '#c8b3f0' },
    ],
    sizes: ['Único'],
    tags: ['drop'],
    description:
      'Aba curva, fecho regulável e o mascote bordado na frente. O acessório oficial de quem tem cara de santo, mas não é.',
  },
  {
    id: 5,
    slug: 'jaqueta-corta-vento-atitude',
    name: 'Jaqueta Corta-Vento Atitude',
    category: 'jaquetas',
    type: 'jacket',
    price: 259.9,
    oldPrice: 299.9,
    colors: [
      { name: 'Lilás', hex: '#d3c1f5' },
      { name: 'Tangerina clara', hex: '#ffb989' },
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    tags: ['novo'],
    description:
      'Nylon leve, repelente à água, forro em tela e zíper frontal. Dobra e cabe na mochila — a atitude vai com você pra qualquer lugar.',
  },
  {
    id: 6,
    slug: 'vestido-midi-autentica',
    name: 'Vestido Midi Autêntica',
    category: 'vestidos',
    type: 'dress',
    price: 199.9,
    colors: [
      { name: 'Lavanda', hex: '#c8b3f0' },
      { name: 'Coral claro', hex: '#ffb8a0' },
    ],
    sizes: ['P', 'M', 'G'],
    tags: ['novo'],
    description:
      'Viscose fluida, alcinhas reguláveis e fenda lateral discreta. Leve pra dançar, confortável pra ficar o dia todo.',
  },
  {
    id: 7,
    slug: 'camiseta-sem-pedir-licenca',
    name: 'Camiseta Sem Pedir Licença',
    category: 'camisetas',
    type: 'tee',
    price: 79.9,
    colors: [
      { name: 'Off-white', hex: '#fbf6ee' },
      { name: 'Roxo claro', hex: '#b7a0ea' },
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    tags: [],
    description:
      'Básica? Nunca. Malha fio 30, gola canelada e a frase que resume a marca nas costas. Combina com tudo — principalmente com atitude.',
  },
  {
    id: 8,
    slug: 'shorts-moletom-preguica',
    name: 'Shorts Moletom Preguiça',
    category: 'calcas-shorts',
    type: 'shorts',
    price: 119.9,
    colors: [
      { name: 'Pêssego', hex: '#ffc596' },
      { name: 'Lilás', hex: '#d3c1f5' },
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    tags: [],
    description:
      'Moletom leve, cós de elástico com cordão e bolsos fundos. Feito pro domingo, mas ninguém vai te julgar se usar na segunda.',
  },
  {
    id: 9,
    slug: 'camisa-botao-vibe',
    name: 'Camisa de Botão Vibe',
    category: 'camisetas',
    type: 'shirt',
    price: 159.9,
    colors: [
      { name: 'Lavanda', hex: '#c8b3f0' },
      { name: 'Areia', hex: '#f0dcc4' },
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    tags: ['drop'],
    description:
      'Linho misto, caimento solto e botões de coco. Aberta por cima da camiseta ou fechada pro jantar — você escolhe a vibe.',
  },
  {
    id: 10,
    slug: 'moletom-careta',
    name: 'Moletom Careta',
    category: 'moletons',
    type: 'hoodie',
    price: 229.9,
    colors: [
      { name: 'Pêssego', hex: '#ffc596' },
      { name: 'Off-white', hex: '#fbf6ee' },
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    tags: [],
    description:
      'Nosso moletom mais pesado, com estampa de caretas bordadas nas mangas. Pra quem faz careta pra regra de moda.',
  },
  {
    id: 11,
    slug: 'jaqueta-jeans-cacheada',
    name: 'Jaqueta Jeans Cacheada',
    category: 'jaquetas',
    type: 'jacket',
    price: 279.9,
    colors: [
      { name: 'Jeans lavado', hex: '#a9b8e0' },
      { name: 'Lilás', hex: '#d3c1f5' },
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    tags: [],
    description:
      'Jeans com lavagem clara, botões metálicos e patch do mascote nas costas. Uma peça pra usar por anos e ficar cada vez mais sua.',
  },
  {
    id: 12,
    slug: 'vestido-camiseta-rebelde',
    name: 'Vestido Camiseta Rebelde',
    category: 'vestidos',
    type: 'dress',
    price: 149.9,
    colors: [
      { name: 'Pêssego', hex: '#ffc596' },
      { name: 'Off-white', hex: '#fbf6ee' },
    ],
    sizes: ['P', 'M', 'G'],
    tags: ['drop'],
    description:
      'O conforto de uma camiseta com a presença de um vestido. Algodão macio, comprimento na altura do joelho e zero esforço.',
  },
]

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug)
}

export function getCategoryName(id) {
  return categories.find((c) => c.id === id)?.name ?? id
}
