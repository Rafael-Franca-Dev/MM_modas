import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard/ProductCard.jsx'
import Mascot from '../../components/Logo/Mascot.jsx'
import { SearchIcon } from '../../components/Icons.jsx'
import { categories, products } from '../../data/products.js'
import '../../components/ProductCard/ProductCard.css'
import './Shop.css'

const sortOptions = {
  relevancia: 'Relevância',
  'menor-preco': 'Menor preço',
  'maior-preco': 'Maior preço',
  nome: 'Nome (A–Z)',
}

function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('categoria') ?? 'todas'
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('relevancia')
  const [onlyPromo, setOnlyPromo] = useState(false)

  const selectCategory = (id) => {
    if (id === 'todas') setSearchParams({})
    else setSearchParams({ categoria: id })
  }

  // Filtra e ordena os produtos sempre que algum filtro muda
  const visible = useMemo(() => {
    let list = products.filter((p) => {
      const matchCategory = activeCategory === 'todas' || p.category === activeCategory
      const matchQuery = p.name.toLowerCase().includes(query.trim().toLowerCase())
      const matchPromo = !onlyPromo || Boolean(p.oldPrice)
      return matchCategory && matchQuery && matchPromo
    })

    if (sort === 'menor-preco') list = [...list].sort((a, b) => a.price - b.price)
    if (sort === 'maior-preco') list = [...list].sort((a, b) => b.price - a.price)
    if (sort === 'nome') list = [...list].sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'))
    return list
  }, [activeCategory, query, sort, onlyPromo])

  const title = activeCategory === 'todas' ? 'Toda a loja' : categories.find((c) => c.id === activeCategory)?.name

  return (
    <div className="container shop">
      <header className="page-head">
        <span className="eyebrow">Loja MM</span>
        <h1>{title}</h1>
        <p className="muted">
          {visible.length} {visible.length === 1 ? 'peça encontrada' : 'peças encontradas'}
        </p>
      </header>

      <div className="shop__chips" role="tablist" aria-label="Categorias">
        {[{ id: 'todas', name: 'Todas' }, ...categories].map((c) => (
          <button
            key={c.id}
            type="button"
            role="tab"
            aria-selected={activeCategory === c.id}
            className={`chip ${activeCategory === c.id ? 'chip--active' : ''}`}
            onClick={() => selectCategory(c.id)}
          >
            {c.name}
          </button>
        ))}
      </div>

      <div className="shop__toolbar">
        <label className="shop__search">
          <SearchIcon size={18} />
          <span className="sr-only">Buscar produto</span>
          <input
            type="search"
            placeholder="Buscar peça..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>

        <label className="shop__check">
          <input type="checkbox" checked={onlyPromo} onChange={(e) => setOnlyPromo(e.target.checked)} />
          Só promoções
        </label>

        <label className="shop__sort">
          Ordenar:
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            {Object.entries(sortOptions).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {visible.length > 0 ? (
        <div className="product-grid">
          {visible.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <div className="shop__empty">
          <Mascot size={110} title="" />
          <h2>Nada por aqui…</h2>
          <p className="muted">O Menino Mau escondeu tudo? Tenta outra busca ou limpa os filtros.</p>
          <button
            type="button"
            className="btn btn--accent"
            onClick={() => {
              setQuery('')
              setOnlyPromo(false)
              selectCategory('todas')
            }}
          >
            Limpar filtros
          </button>
        </div>
      )}
    </div>
  )
}

export default Shop
