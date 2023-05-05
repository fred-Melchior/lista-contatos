import styled from 'styled-components'
import _var from '../../styles/var'

export const Container = styled.div`
  height: 100vh;
  overflow-y: scroll;
  padding: 16px;
  margin: 8px;
  border-radius: 8px;
  background-image: linear-gradient(
    to bottom left,
    ${_var.darkBlue},
    ${_var.lightBlue},
    ${_var.softBlue}
  );
`
