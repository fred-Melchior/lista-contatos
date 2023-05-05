import { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { adicionar } from '../../store/reducers/contatos'
import { alteraNome } from '../../store/reducers/pesquisa'

import * as S from './styles'
import { Botao, Input } from '../../styles/styles'

const Barra = () => {
  const { nome: contato } = useSelector((state: RootReducer) => state.pesquisa)
  const dispatch = useDispatch()
  const [adicionando, setAdicionando] = useState(false)
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  const addContato = (e: FormEvent) => {
    e.preventDefault()

    dispatch(
      adicionar({
        nome,
        telefone,
        email
      })
    )
    setAdicionando(false)
    setNome('')
    setEmail('')
    setTelefone('')
  }
  return (
    <S.Barra>
      <S.Div>
        <h3>Contatos</h3>
        {adicionando ? (
          <form onSubmit={addContato}>
            <Input
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Nome completo"
            />
            <Input
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              placeholder="(__) ____-____"
            />
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
            />
            <Botao type="submit">Salvar contato</Botao>
            <Botao onClick={() => setAdicionando(false)}>Cancelar</Botao>
          </form>
        ) : (
          <>
            <Input
              type="text"
              placeholder="pesquisar"
              value={contato}
              onChange={(e) => dispatch(alteraNome(e.target.value))}
            />
            <Botao onClick={() => setAdicionando(true)}>Adicionar</Botao>
          </>
        )}
      </S.Div>
    </S.Barra>
  )
}

export default Barra
