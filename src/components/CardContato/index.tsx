import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import Contato from '../../models/Contato'
import { editar, remover } from '../../store/reducers/contatos'

import { BotaoEditar, BotaoRemover } from '../../styles/styles'
import { Div, DivButtons, DivDados, InputDados, InputNome } from './styles'

type Props = Contato

export const Card = ({ nome, telefone, email, id }: Props) => {
  const dispatch = useDispatch()
  const [idOriginal, setIdOriginal] = useState(0)
  const [editando, setEditando] = useState(false)
  const [editaNome, setEditaNome] = useState('')
  const [editaTel, setEditaTel] = useState('')
  const [editaMail, setEditaMail] = useState('')

  useEffect(() => {
    if (nome.length > 0) {
      setEditaNome(nome)
    }
  }, [nome])
  useEffect(() => {
    if (telefone.length > 0) {
      setEditaTel(telefone)
    }
  }, [telefone])
  useEffect(() => {
    if (email.length > 0) {
      setEditaMail(email)
    }
  }, [email])
  useEffect(() => {
    if (idOriginal >= 0) {
      setIdOriginal(idOriginal)
    }
  }, [idOriginal])

  const salvarEdicao = () => {
    dispatch(
      editar({
        nome,
        telefone,
        email,
        id: idOriginal
      })
    )
    setEditando(false)
  }

  const cancelarEdicao = () => {
    setEditaNome(editaNome)
    setEditaTel(editaTel)
    setEditaMail(editaMail)
    setEditando(false)
  }
  return (
    <Div>
      <InputNome
        disabled={!editando}
        value={editaNome}
        onChange={(e) => setEditaNome(e.target.value)}
      />
      <DivDados>
        <InputDados
          disabled={!editando}
          value={editaTel}
          maxLength={14}
          placeholder="(__) _____-____"
          onChange={(e) => setEditaTel(e.target.value)}
        />
        <InputDados
          disabled={!editando}
          value={editaMail}
          onChange={(e) => setEditaMail(e.target.value)}
        />
      </DivDados>
      <DivButtons>
        {editando ? (
          <>
            <BotaoEditar onClick={salvarEdicao}>Salvar</BotaoEditar>
            <BotaoRemover onClick={cancelarEdicao}>Cancelar</BotaoRemover>
          </>
        ) : (
          <>
            <BotaoEditar onClick={() => setEditando(true)}>Editar</BotaoEditar>
            <BotaoRemover onClick={() => dispatch(remover(id))}>
              Remover
            </BotaoRemover>
          </>
        )}
      </DivButtons>
    </Div>
  )
}
