import { useEffect, useState } from "react";
import ItemListContainer from "../components/itemListContainer/ItemListContainer";
import { getDefaultProduct } from "../components/services/product.service";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getDefaultProduct().then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  return <ItemListContainer products={products} />;
};

export default Home;
