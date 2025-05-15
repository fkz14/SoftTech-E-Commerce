// Importa los hooks y servicios necesarios para obtener productos por categoría
import { useParams } from "react-router";
import ItemListContainer from "../components/itemListContainer/ItemListContainer";
import { useEffect, useState } from "react";
import { getProductsByCategory } from "../components/services/product.service";

// Componente para mostrar productos filtrados por categoría
const Category = () => {
  // Estado para almacenar los productos obtenidos
  const [products, setProducts] = useState([]);
  // Obtiene el parámetro de ID de la categoría desde la URL
  const { id } = useParams();

  // Efecto para obtener los productos de la categoría seleccionada
  useEffect(() => {
    getProductsByCategory(id)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  // Renderiza el contenedor de la lista de productos filtrados por categoría
  return <ItemListContainer products={products} />;
};

export default Category;