import styled from 'styled-components'
import _var from '../../styles/var'

export const Barra = styled.aside`
  padding: 8px;
  margin: 8px;
  height: 100vh;
  background-image: linear-gradient(
    to bottom right,
    ${_var.lightBlue},
    ${_var.softBlue}
  );
  border-radius: 8px;
  box-shadow: 4px 4 px 8px 8px ${_var.lightBlue};
`

export const Div = styled.div`
  margin-top: 32px;
  color: #fff;
  text-align: center;

  h3 {
    font-size: 32px;
    letter-spacing: 2px;
    margin: 8px auto;
    text-shadow: 1px 2px 2px ${_var.darkBlue};
  }
`
