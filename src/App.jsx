import { ChakraProvider } from "@chakra-ui/react"
import ItemListContainer from "./components/ItemListContainer"
import Navbar from "./components/NavBar"

function App() { 
  const mensajeBienvenida = "¡Bienvenido a SoftHard, tu tienda de hardware!";

  return ( 
    <>  
      <ChakraProvider>
        <Navbar />
        <ItemListContainer greeting={mensajeBienvenida} />
      </ChakraProvider>
    </>
  )
}

export default App
