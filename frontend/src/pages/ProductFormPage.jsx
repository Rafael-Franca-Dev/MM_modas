import { useState } from 'react'

function ProductFormPage({ onCreateProduct }) {
  // O formulário mantém cada campo no estado para permitir validação controlada.
  const [form, setForm] = useState({
    name: '',
    category: 'Feminino',
    price: '',
    description: '',
  })
  const [feedback, setFeedback] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // Nome, preço e descrição são obrigatórios para criar um produto válido.
    if (!form.name.trim() || !form.price || !form.description.trim()) {
      setFeedback('Preencha todos os campos obrigatórios.')
      return
    }

    const newProduct = {
      // O identificador local permite editar a lista sem depender de uma API.
      id: Date.now(),
      name: form.name,
      category: form.category,
      price: Number(form.price),
      rating: 4.8,
      featured: false,
      description: form.description,
      image:
        'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
      colors: ['Padrão'],
      sizes: ['P', 'M', 'G'],
    }

    onCreateProduct(newProduct)
    setFeedback('Produto cadastrado com sucesso!')
    setForm({ name: '', category: 'Feminino', price: '', description: '' })
  }

  return (
    <main className="page-shell container section-block">
      <div className="section-heading">
        <h2>Novo produto</h2>
      </div>

      <form className="form-card" onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="name">Nome do produto</label>
          <input id="name" name="name" value={form.name} onChange={handleChange} />
        </div>

        <div className="input-block">
          <label htmlFor="category">Categoria</label>
          <select id="category" name="category" value={form.category} onChange={handleChange}>
            <option value="Feminino">Feminino</option>
            <option value="Masculino">Masculino</option>
            <option value="Esportivo">Esportivo</option>
            <option value="Acessórios">Acessórios</option>
          </select>
        </div>

        <div className="input-block">
          <label htmlFor="price">Preço</label>
          <input id="price" name="price" type="number" min="0" step="0.01" value={form.price} onChange={handleChange} />
        </div>

        <div className="input-block">
          <label htmlFor="description">Descrição</label>
          <textarea id="description" name="description" rows="4" value={form.description} onChange={handleChange} />
        </div>

        {feedback && <p className={`feedback ${feedback.includes('sucesso') ? 'success' : 'error'}`}>{feedback}</p>}

        <button className="primary-button" type="submit">
          Salvar produto
        </button>
      </form>
    </main>
  )
}

export default ProductFormPage
