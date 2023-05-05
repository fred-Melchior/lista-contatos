import { useSelector } from 'react-redux'

import { Card } from '../../components/CardContato'
import { Container } from './styles'
import { RootReducer } from '../../store'

const Lista = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { nome } = useSelector((state: RootReducer) => state.pesquisa)

  const pesquisaContatos = () => {
    let contatosFiltrados = itens
    if (nome !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (i) => i.nome.toLowerCase().search(nome.toLowerCase()) >= 0
      )
      return contatosFiltrados
    } else {
      return itens
    }
  }

  const contatos = pesquisaContatos()

  return (
    <Container>
      <ul>
        {contatos.map((c) => (
          <li key={c.nome}>
            <Card
              nome={c.nome}
              telefone={c.telefone}
              email={c.email}
              id={c.id}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default Lista
