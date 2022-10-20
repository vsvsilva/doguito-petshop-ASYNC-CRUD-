const listaClientes = async () => {
  const response = await fetch('http://localhost:3000/profile')
  if(response.ok){
    return await response.json()
  }
  throw new Error('Não foi possível listar os clientes')
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
  if(resposta.ok){
    return resposta.body
  }
  throw new Error('Não foi possível criar o cliente')
}

const deletaCliente = async (id) => {
  const resposta = await fetch(`http://localhost:3000/profile/${id}`, {
    method: 'DELETE'
  })
  if (!resposta.ok) {
    throw new Error('Não foi possível remover o cliente')
  }
}

const detalhaCLiente = async (id) => {
  const resposta = await fetch(`http://localhost:3000/profile/${id}`)
  if(resposta.ok){
    return await resposta.json()
  }
  throw new Error('Não foi possível detalhar o cliente')
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
  if(resposta.ok){
    return await resposta.json()
  }
  throw new Error('Não foi possível atualizar o cliente')
}

export const clienteService = {
  listaClientes,
  criaCliente,
  deletaCliente,
  detalhaCLiente,
  atualizaCleinte
}
