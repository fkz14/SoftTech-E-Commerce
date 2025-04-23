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
        <MenuList>
            <MenuItem>Inicio</MenuItem>
            <MenuItem>Tienda</MenuItem>
            <MenuItem>Soporte</MenuItem>
        </MenuList>
        </Menu>
          <CartWidget/>
      </div>
      </>
    );
  };
  
  export default NavBar;
  