import { useParams } from "react-router";
import ItemListContainer from "../components/itemListContainer/ItemListContainer";
import { useEffect, useState } from "react";
import { getProductsByCategory } from "../components/services/product.service";

const Category = () => {
  const [products, setProducts] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    getProductsByCategory(id)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return <ItemListContainer products={products} />;
};

export default Category;
