import { ChakraProvider } from "@chakra-ui/react"
import ItemListContainer from "./components/itemListContainer/ItemListContainer"
import MainLayout from "./layout/MainLayout";

function App() { 

  return ( 
    <>  
      <ChakraProvider>
        <MainLayout> 
          <ItemListContainer/>
        </MainLayout>
      </ChakraProvider>
    </>
  )
}

export default App
