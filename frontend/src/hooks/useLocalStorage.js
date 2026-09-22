import { useEffect, useState } from 'react'

// Inicializa o estado com os dados persistidos ou usa o valor padrão informado.
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = window.localStorage.getItem(key)
      return storedValue ? JSON.parse(storedValue) : initialValue
    } catch {
      return initialValue
    }
  })

  // Sincroniza qualquer alteração do estado com o armazenamento do navegador.
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      console.error('Não foi possível salvar no localStorage')
    }
  }, [key, value])

  return [value, setValue]
}
