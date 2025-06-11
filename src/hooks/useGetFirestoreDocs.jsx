// Importa los hooks useEffect y useState de React
import { useEffect, useState } from "react";
// Importa las funciones collection y getDocs de Firebase Firestore
import { collection, getDocs } from "firebase/firestore";
// Importa la instancia de la base de datos de Firebase
import { db } from "../services/config/firebase";

// Exporta el hook personalizado useGetFirestoreDocs
export const useGetFirestoreDocs = (collectionName) => {
  // Estado para almacenar los productos obtenidos
  const [items, setItems] = useState([]);
  // Estado para indicar si está cargando
  const [loading, setLoading] = useState(true);
  // Estado para indicar si hubo un error
  const [error, setError] = useState(false);

  // Efecto que se ejecuta cuando cambia collectionName
  useEffect(() => {
    // Crea una referencia a la colección en Firestore
    const itemsCollection = collection(db, collectionName);

    // Obtiene todos los documentos de la colección
    getDocs(itemsCollection)
      .then((snapshot) => {
        // Mapea los documentos a objetos con id y datos
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // Actualiza el estado con los productos obtenidos
        setItems(data);
      })
      .catch(() => setError(true)) // Si hay error, actualiza el estado de error
      .finally(() => setLoading(false)); // Finaliza la carga
  }, [collectionName]); // El efecto depende de collectionName

  // Devuelve el estado de carga, error y los productos
  return { loading, error, items };
};