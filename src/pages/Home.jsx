// Importa los hooks necesarios y el componente de lista de productos
import { useEffect, useState } from "react";
import ItemListContainer from "../components/itemListContainer/ItemListContainer";
import { getDefaultProduct } from "../components/services/product.service";

// Componente principal para la página de inicio
const Home = () => {
  // Estado para almacenar los productos obtenidos
  const [products, setProducts] = useState([]);

  // Efecto para obtener los productos por defecto al montar el componente
  useEffect(() => {
    getDefaultProduct().then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  // Renderiza el contenedor de la lista de productos
  return <ItemListContainer products={products} />;
};

export default Home;