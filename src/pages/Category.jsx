import { useParams } from "react-router";
import { useTitle } from "../hooks/useTitle";
import { useGetFirestoreDocs } from "../hooks/useGetFirestoreDocs";
import ItemListContainer from "../components/itemListContainer/ItemListContainer";

const Category = () => {
  useTitle("Categoría | SoftTech");
  const { id } = useParams();

  const { items: allProducts, loading, error } = useGetFirestoreDocs("products");
  const products = allProducts.filter((prod) => prod.category === id);

  if (loading) return <div>Cargando productos...</div>;
  if (error) return <div>Error al cargar productos.</div>;

  return <ItemListContainer products={products} />;
};

export default Category;