import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type PesquisaState = {
  nome: string
}

const initialState: PesquisaState = {
  nome: ''
}

const pesquisaSlice = createSlice({
  name: 'pesquisa',
  initialState,
  reducers: {
    alteraNome: (state, action: PayloadAction<string>) => {
      state.nome = action.payload
    }
  }
})

export const { alteraNome } = pesquisaSlice.actions
export default pesquisaSlice.reducer
