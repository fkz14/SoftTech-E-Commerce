import { useParams } from "react-router";
import ItemDetailContainer from "../components/itemDetailContainer/itemDetailContainer";
import { useEffect, useState } from "react";
import { getProductById } from "../components/services/product.service";

const Item = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id)
      .then((res) => setProduct(res.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [id]);

  return loading ? <>Loading...</> : <ItemDetailContainer product={product} />;
};

export default Item;
