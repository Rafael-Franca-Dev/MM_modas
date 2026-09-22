import FilterBar from '../components/FilterBar'
import ProductCard from '../components/ProductCard'

function ProductsPage({
  products,
  search,
  category,
  sort,
  onSearch,
  onCategoryChange,
  onSortChange,
  onAddToCart,
}) {
  // Categorias são calculadas a partir da fonte local para evitar opções desatualizadas.
  const categories = [...new Set(products.map((product) => product.category))]

  return (
    <main className="page-shell container section-block">
      <div className="section-heading">
        <h2>Todos os produtos</h2>
      </div>

      <FilterBar
        search={search}
        onSearch={onSearch}
        category={category}
        onCategoryChange={onCategoryChange}
        sort={sort}
        onSortChange={onSortChange}
        categories={categories}
      />

      {products.length === 0 ? (
        // O estado vazio informa claramente quando os filtros não retornam resultados.
        <div className="empty-state">Nenhum produto encontrado com os filtros atuais.</div>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      )}
    </main>
  )
}

export default ProductsPage
