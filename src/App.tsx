import BarraLateral from './containers/BarraLateral'
import ListaDeTarefa from './containers/ListaDeTarefa'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefa />
      </Container>
    </>
  )
}

export default App
