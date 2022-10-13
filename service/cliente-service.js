const listaClientes = async () => {
  const response = await fetch('http://localhost:3000/profile')
  return await response.json()
}

export const clienteService = {
  listaClientes
}
