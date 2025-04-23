import "./NavBar.css" 
import CartWidget from "./CartWidget"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'


function NavBar () {
    return (
      <>
      <div className="container">
        <h1 className="title">SoftHard</h1>
        <Menu>
        <MenuButton className="menu">
            Menu
        </MenuButton>
        <MenuList backgroundColor={"#292c3e"}>
            <MenuItem 
              backgroundColor={"#292c3e"}
              _hover={{ bg: "#3a3d52" }}
            >Inicio</MenuItem>
            <MenuItem 
              backgroundColor={"#292c3e"}
              _hover={{ bg: "#3a3d52" }}
            >Tienda</MenuItem>
            <MenuItem 
              backgroundColor={"#292c3e"}
              _hover={{ bg: "#3a3d52" }}
            >Soporte</MenuItem>
        </MenuList>
        </Menu>
          <CartWidget/>
      </div>
      </>
    );
  };
  
  export default NavBar;
  