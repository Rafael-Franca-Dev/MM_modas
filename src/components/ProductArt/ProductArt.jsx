import './ProductArt.css'

const INK = '#2c1f4a'

// Ilustrações das peças em SVG. Substitua por <img src="..."> quando
// o grupo tiver as fotos reais dos produtos.
const shapes = {
  tee: (c) => (
    <>
      <path
        d="M72 38 L50 46 L24 70 L44 94 L60 84 L60 168 L140 168 L140 84 L156 94 L176 70 L150 46 L128 38 Q100 62 72 38 Z"
        fill={c}
      />
      <path d="M78 40 Q100 56 122 40" fill="none" />
      <text x="100" y="122" textAnchor="middle" className="art-print">MM</text>
    </>
  ),
  shirt: (c) => (
    <>
      <path
        d="M74 36 L50 44 L30 70 L22 150 L42 154 L58 96 L60 170 L140 170 L142 96 L158 154 L178 150 L170 70 L150 44 L126 36 L100 50 Z"
        fill={c}
      />
      <path d="M74 36 L86 64 L100 50 L114 64 L126 36" fill={c} />
      <path d="M100 50 L100 170" fill="none" />
      <g fill={INK} stroke="none">
        <circle cx="106" cy="82" r="3" />
        <circle cx="106" cy="108" r="3" />
        <circle cx="106" cy="134" r="3" />
      </g>
      <path d="M118 88 L134 88 L134 104 L118 104 Z" fill="none" />
    </>
  ),
  hoodie: (c) => (
    <>
      <path
        d="M66 50 L42 60 L26 152 L46 156 L60 96 L60 172 L140 172 L140 96 L154 156 L174 152 L158 60 L134 50 Z"
        fill={c}
      />
      <path d="M68 52 Q70 18 100 18 Q130 18 132 52 Q100 76 68 52 Z" fill={c} />
      <path d="M82 50 Q100 64 118 50" fill="none" />
      <path d="M92 60 L90 88 M108 60 L110 88" fill="none" />
      <path d="M72 130 L128 130 L134 160 L66 160 Z" fill="none" />
    </>
  ),
  jacket: (c) => (
    <>
      <path
        d="M68 40 L44 50 L26 152 L46 156 L60 96 L60 172 L140 172 L140 96 L154 156 L174 152 L156 50 L132 40 Z"
        fill={c}
      />
      <path d="M68 40 L88 72 L100 44 L112 72 L132 40 L118 34 L100 44 L82 34 Z" fill={c} />
      <path d="M100 44 L100 172" fill="none" strokeDasharray="4 4" />
      <path d="M70 110 L90 110 M110 110 L130 110" fill="none" />
      <path d="M60 162 L140 162" fill="none" />
    </>
  ),
  pants: (c) => (
    <>
      <path d="M62 28 L138 28 L148 176 L112 176 L100 82 L88 176 L52 176 Z" fill={c} />
      <path d="M62 42 L138 42" fill="none" />
      <path d="M100 42 L100 82" fill="none" />
      <path d="M58 110 L78 110 L78 136 L56 136 M142 110 L122 110 L122 136 L144 136" fill="none" />
    </>
  ),
  shorts: (c) => (
    <>
      <path d="M54 52 L146 52 L158 134 L110 140 L100 96 L90 140 L42 134 Z" fill={c} />
      <path d="M54 66 L146 66" fill="none" />
      <path d="M94 66 Q92 80 88 84 M106 66 Q108 80 112 84" fill="none" />
    </>
  ),
  dress: (c) => (
    <>
      <path
        d="M78 26 L88 26 Q100 44 112 26 L122 26 L126 72 L116 88 L158 172 L42 172 L84 88 L74 72 Z"
        fill={c}
      />
      <path d="M76 72 Q100 80 124 72" fill="none" />
      <path d="M84 88 Q100 94 116 88" fill="none" />
      <path d="M72 150 Q86 140 100 150 Q114 160 128 150" fill="none" />
    </>
  ),
  cap: (c) => (
    <>
      <path d="M46 124 Q44 58 100 56 Q156 58 154 124 Z" fill={c} />
      <path d="M130 116 Q184 110 192 130 Q160 142 118 128 Z" fill={c} />
      <path d="M100 56 L100 124 M72 64 Q66 92 70 124 M128 64 Q134 92 130 124" fill="none" />
      <circle cx="100" cy="55" r="5" fill={c} />
      <circle cx="84" cy="98" r="10" fill="#fff" />
      <path d="M79 100 Q84 106 89 100" fill="none" strokeWidth="2" />
    </>
  ),
}

function ProductArt({ type = 'tee', color = '#c8b3f0', bg, className = '', label }) {
  const draw = shapes[type] ?? shapes.tee
  return (
    <div className={`product-art ${className}`} style={bg ? { background: bg } : undefined}>
      <svg
        viewBox="0 0 200 200"
        className="product-art__svg"
        {...(label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true })}
      >
        <g stroke={INK} strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round">
          {draw(color)}
        </g>
      </svg>
    </div>
  )
}

export default ProductArt
