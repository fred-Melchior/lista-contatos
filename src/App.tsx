import { Provider } from 'react-redux'
import Barra from './containers/Barra'
import Lista from './containers/Lista'
import EstiloGlobal, { Container } from './styles/styles'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Barra />
        <Lista />
      </Container>
    </Provider>
  )
}

export default App
