import styled, { createGlobalStyle } from 'styled-components'
import _var from './var'

const EstiloGlobal = createGlobalStyle`
  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: 'Bebas Neue', cursive;

      li{
        list-style: none;
      }
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
  background-color: ${_var.fundo};
`

export const Input = styled.input`
  padding: 8px;
  margin: 24px auto;
  border-radius: 4px;
  width: 80%;
  border: none;
`

export const Botao = styled.button`
  padding: 4px;
  margin: 16px;
  width: 80%;
  border: none;
  font-size: 20px;
  color: #fff;
  box-shadow: 2px 2px 4px #000;
  border-radius: 3px;
  background-image: linear-gradient(
    to left,
    ${_var.lightBlue},
    ${_var.darkBlue}
  );
  cursor: pointer;
`

export const BotaoEditar = styled(Botao)`
  width: 25%;
`

export const BotaoRemover = styled(Botao)`
  background-image: linear-gradient(to right, ${_var.fundo}, ${_var.darkBlue});
  width: 25%;
`

export default EstiloGlobal
