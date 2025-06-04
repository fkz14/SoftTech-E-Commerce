// Importa los hooks y servicios necesarios para obtener productos por categoría
import { useParams } from "react-router";
import ItemListContainer from "../components/itemListContainer/ItemListContainer";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../components/services/config/firebase";

// Componente para mostrar productos filtrados por categoría
const Category = () => {
  // Estado para almacenar los productos obtenidos
  const [products, setProducts] = useState([]);
  // Obtiene el parámetro de ID de la categoría desde la URL
  const { id } = useParams();

  // Efecto para obtener los productos de la categoría seleccionada
  useEffect(() => {
    // Crea una consulta a Firestore para filtrar productos por categoría
    const productsQuery = query(
      collection(db, "products"),
      where("category", "==", id)
    );

    // Obtiene los productos que cumplen con la categoría seleccionada
    getDocs(productsQuery)
      .then((snapshot) => {
        // Mapea los documentos a objetos con id y datos
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // Actualiza el estado con los productos filtrados
        setProducts(data);
      })
      .catch((e) => console.error(e)); // Muestra errores en consola si ocurren
  }, [id]);

  // Renderiza el contenedor de la lista de productos filtrados por categoría
  return <ItemListContainer products={products} />;
};

export default Category;