function FilterBar({ search, onSearch, category, onCategoryChange, sort, onSortChange, categories }) {
  // Os controles são componentes controlados e refletem diretamente o estado da página.
  return (
    <div className="toolbar">
      <div className="input-block input-search">
        <label htmlFor="search">Buscar</label>
        <input
          id="search"
          type="text"
          value={search}
          onChange={(event) => onSearch(event.target.value)}
          placeholder="Nome do produto"
        />
      </div>

      <div className="input-block">
        <label htmlFor="category">Categoria</label>
        <select id="category" value={category} onChange={(event) => onCategoryChange(event.target.value)}>
          <option value="Todos">Todos</option>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="input-block">
        <label htmlFor="sort">Ordenar</label>
        <select id="sort" value={sort} onChange={(event) => onSortChange(event.target.value)}>
          <option value="relevancia">Relevância</option>
          <option value="menor-preco">Menor preço</option>
          <option value="maior-preco">Maior preço</option>
          <option value="nome">Nome</option>
        </select>
      </div>
    </div>
  )
}

export default FilterBar
