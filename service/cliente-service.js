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

const detalhaCLiente = async (id) => {
  const resposta = await fetch(`http://localhost:3000/profile/${id}`)
  return await resposta.json()
}

const atualizaCleinte = async (id, nome, email) => {
  const resposta = await fetch(`http://localhost:3000/profile/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nome: nome,
      email: email
    })
  })
  
  return await resposta.json()
}

export const clienteService = {
  listaClientes,
  criaCliente,
  deletaCliente,
  detalhaCLiente,
  atualizaCleinte
}
