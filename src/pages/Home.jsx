// Importa los hooks necesarios y el componente de lista de productos
import { useEffect, useState } from "react";
import ItemListContainer from "../components/itemListContainer/ItemListContainer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../components/services/config/firebase";

// Componente principal para la página de inicio
const Home = () => {
  // Estado para almacenar los productos obtenidos desde la base de datos
  const [products, setProducts] = useState([]);

  // Efecto para obtener los productos al montar el componente
  useEffect(() => {
    // Referencia a la colección "products" en Firestore
    const productsCollection = collection(db, "products");

    // Obtiene todos los documentos de la colección "products"
    getDocs(productsCollection)
      .then((snapshot) => {
        // Mapea los documentos a objetos con id y datos
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // Actualiza el estado con los productos obtenidos
        setProducts(data);
      })
      .catch() // Aquí podrías manejar errores si lo deseas
      .finally(); // Aquí podrías realizar acciones finales si lo deseas
  }, []);

  // Renderiza el contenedor de la lista de productos, pasando los productos obtenidos
  return <ItemListContainer products={products} />;
};

export default Home;