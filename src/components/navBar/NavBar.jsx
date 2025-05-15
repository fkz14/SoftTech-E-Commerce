import "./NavBar.css";
import CartWidget from "../cartWidget/CartWidget";
import { Menu, MenuButton, MenuList, MenuItem, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { getAllCategories } from "../services/product.service";

function NavBar() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllCategories()
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="container">
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
        <Menu>
          <MenuButton className="menu">Menu</MenuButton>
          <MenuList>
            {categories.map((item) => {
              return <MenuItem key={item.slug} onClick={() => navigate(`/category/${item.slug}`) }>{item.name}</MenuItem>;
            })}
          </MenuList>
        </Menu>
        <CartWidget />
      </div>
    </>
  );
}

export default NavBar;
