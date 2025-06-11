// Importa los hooks useEffect y useState de React
import { useEffect, useState } from "react";
// Importa las funciones getDoc y doc de Firebase Firestore
import { getDoc, doc } from "firebase/firestore";
// Importa la instancia de la base de datos de Firebase
import { db } from "../services/config/firebase";

// Exporta el hook personalizado useGetItemFirestore
export const useGetItemFirestore = (collectionName, id) => {
  // Estado para almacenar el producto obtenido
  const [item, setItem] = useState({});
  // Estado para indicar si está cargando
  const [loading, setLoading] = useState(true);

  // Efecto que se ejecuta cuando cambian collectionName o id
  useEffect(() => {
    // Crea una referencia al documento en la colección y con el id especificado
    const itemDoc = doc(db, collectionName, id);
    // Obtiene el documento de Firestore
    getDoc(itemDoc)
      .then((snapshot) => {
        // Actualiza el estado con los datos del documento y su id
        setItem({ id: snapshot.id, ...snapshot.data() });
      })
      .catch((e) => console.error(e)) // Muestra errores en consola
      .finally(() => setLoading(false)); // Finaliza la carga
  }, [collectionName, id]); // El efecto depende de collectionName e id

  // Devuelve el producto y el estado de carga
  return { item, loading };
};