import "./NavBar.css";
import CartWidget from "../cartWidget/CartWidget";
import { Menu, MenuButton, MenuList, MenuItem, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { getAllCategories } from "../services/product.service";

// Componente de barra de navegación principal
function NavBar() {
  // Estado para almacenar las categorías obtenidas
  const [categories, setCategories] = useState([]);
  // Hook para navegar entre rutas
  const navigate = useNavigate();

  // Efecto para obtener las categorías al montar el componente
  useEffect(() => {
    getAllCategories()
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
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