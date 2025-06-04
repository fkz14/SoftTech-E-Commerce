import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../components/services/config/firebase";

// Componente para agregar un nuevo producto a la base de datos
const AddDoc = () => {
  // Estado para manejar los valores del formulario
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    price: 0.0,
    thumbnail: "",
    category: "",
  });

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario

    // Referencia a la colección "products" en Firestore
    const productsCollection = collection(db, "products");

    // Agrega un nuevo documento a la colección con los datos del formulario
    addDoc(productsCollection, formState)
      .then(({ id }) => {
        // Muestra el ID del nuevo producto en consola
        console.log(id);
      })
      .catch((e) => console.error(e)); // Muestra errores en consola si ocurren
  };

  // Renderiza el formulario para crear un nuevo producto
  return (
    <form onSubmit={handleSubmit}>
      {/* Input para el título del producto */}
      <Input
        type="text"
        placeholder="Titulo"
        onChange={(e) => {
          setFormState({
            ...formState,
            title: e.target.value,
          });
        }}
      />
      {/* Input para la descripción del producto */}
      <Input
        type="text"
        placeholder="Descripcion"
        onChange={(e) => {
          setFormState({
            ...formState,
            description: e.target.value,
          });
        }}
      />
      {/* Input para el precio del producto */}
      <Input
        type="number"
        placeholder="Precio"
        onChange={(e) => {
          setFormState({
            ...formState,
            price: e.target.value,
          });
        }}
      />
      {/* Input para la URL de la imagen del producto */}
      <Input
        type="text"
        placeholder="Thumbnail"
        onChange={(e) => {
          setFormState({
            ...formState,
            thumbnail: e.target.value,
          });
        }}
      />
      {/* Input para la categoría del producto */}
      <Input
        type="text"
        placeholder="Categoria"
        onChange={(e) => {
          setFormState({
            ...formState,
            category: e.target.value,
          });
        }}
      />
      {/* Botón para enviar el formulario */}
      <Button type="submit"> Crear </Button>
    </form>
  );
};

export default AddDoc;