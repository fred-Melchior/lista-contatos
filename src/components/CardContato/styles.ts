import styled from 'styled-components'
import _var from '../../styles/var'

export const Div = styled.div`
  padding: 16px;
  margin: 8px auto;
  width: 80%;
  background-color: ${_var.lightBlue};
  border-radius: 8px;
  color: #fff;
  box-shadow: 4px 4px 4px ${_var.darkBlue};
`

export const DivDados = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0;
`

export const InputNome = styled.input`
  text-align: center;
  font-size: 32px;
  color: #fff;
  text-shadow: 1px 2px 2px ${_var.darkBlue};
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${_var.darkBlue};

  :disabled {
    border: none;
  }
`

export const InputDados = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 8px;
  margin-right: 8px;
  font-size: 24px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${_var.darkBlue};
  color: ${_var.fundo};

  :disabled {
    color: #000;
    border: none;
    font-size: 28px;
  }
`

export const DivButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`
