const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

export function formatPrice(value) {
  return brl.format(value)
}

export function installments(value, max = 3) {
  return `ou ${max}x de ${formatPrice(value / max)} sem juros`
}
