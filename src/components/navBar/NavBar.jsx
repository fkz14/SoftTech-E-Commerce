import "./NavBar.css";
import CartWidget from "../cartWidget/CartWidget";
import { Menu, MenuButton, MenuList, MenuItem, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { db } from "../../services/config/firebase";
import { collection, getDocs } from "firebase/firestore";

// Componente de barra de navegación principal
function NavBar() {
  // Estado para almacenar las categorías obtenidas desde la base de datos
  const [categories, setCategories] = useState([]);
  // Hook para navegar entre rutas de la aplicación
  const navigate = useNavigate();

  // Efecto para obtener las categorías al montar el componente
  useEffect(() => {
    // Referencia a la colección "categories" en Firestore
    const categoriesCollection = collection(db, "categories");

    // Obtiene todos los documentos de la colección "categories"
    getDocs(categoriesCollection)
      .then((snapshot) => {
        // Mapea los documentos a objetos con id y datos
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // Actualiza el estado con las categorías obtenidas
        setCategories(data);
      })
      .catch(); // Aquí podrías manejar errores si lo deseas
  }, []);

  // Renderiza la barra de navegación con el logo, menú de categorías y el widget del carrito
  return (
    <>
      <div className="container">
        {/* Logo que navega al inicio */}
        <Text
          className="title"
          cursor={"pointer"}
          onClick={() => navigate("/")}
          fontFamily={"monospace"}
          borderBottom={"2px"}
          backgroundColor={""}
          fontSize={"4xl"}
        >
          SoftTech
        </Text>
        {/* Menú desplegable de categorías */}
        <Menu>
          <MenuButton className="menu">Menu</MenuButton>
          <MenuList>
            {/* Lista de categorías obtenidas de la base de datos */}
            {categories.map((item) => {
              return (
                <MenuItem
                  key={item.slug}
                  onClick={() => navigate(`/category/${item.slug}`)}
                >
                  {item.name}
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
        {/* Widget del carrito */}
        <CartWidget />
      </div>
    </>
  );
}

export default NavBar;