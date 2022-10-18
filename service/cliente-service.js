const listaClientes = async () => {
  const response = await fetch('http://localhost:3000/profile')
  return await response.json()
}

const criaCliente = async (nome, email) => {
  const resposta = await fetch('http://localhost:3000/profile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nome: nome,
      email: email
    })
  })
  return resposta.body
}

const deletaCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: 'DELETE'
  })
}

export const clienteService = {
  listaClientes,
  criaCliente,
  deletaCliente
}
