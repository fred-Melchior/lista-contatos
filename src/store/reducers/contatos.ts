import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: [
    {
      nome: 'José Silva',
      telefone: '(92) 7364-4637',
      email: 'jose.silva@email.com',
      id: 1
    },
    {
      nome: 'Maria Pereira',
      telefone: '(35) 3526-2627',
      email: 'mariaPereira@email.com',
      id: 2
    },
    {
      nome: 'Carlos Alberto',
      telefone: '(91) 8486-1728',
      email: 'carlosalberto@email.com',
      id: 3
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const index = state.itens.findIndex((c) => (c.id = action.payload.id))
      if (index >= 0) {
        state.itens[index] = action.payload
      }
    },
    adicionar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoExistente = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (contatoExistente) {
        alert('Já existe um contato com este nome!')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const novoContato = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(novoContato)
      }
    }
  }
})

export const { remover, editar, adicionar } = contatoSlice.actions
export default contatoSlice.reducer
