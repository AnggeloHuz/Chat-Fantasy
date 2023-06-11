import Inicio from "./components/Inicio"
import { BrowserRouter } from "react-router-dom";
import { ContextoProvider } from './context/Contexto'

function App() {

  return (
    <>
      <ContextoProvider>
        <BrowserRouter>
          <Inicio />
        </BrowserRouter>
      </ContextoProvider>
    </>
  )
}

export default App
