import axios from "axios";

// Obtiene los productos por defecto (smartphones) desde la API
export async function getDefaultProduct() {
  return await axios.get("https://dummyjson.com/products/category/smartphones");
}

// Obtiene un producto por su ID desde la API
export async function getProductById(id) {
  return await axios.get(`https://dummyjson.com/products/${id}`);
}

// Obtiene los productos de una categoría específica desde la API
export async function getProductsByCategory(id) {
  return await axios.get(`https://dummyjson.com/products/category/${id}`);
}

// Devuelve una lista mockeada de categorías disponibles
export function getAllCategories() {
  const categories = [
    "smartphones",
    "mobile-accessories",
    "tablets",
    "laptops",
  ];
  // Formatea las categorías para mostrar nombre y slug
  return Promise.resolve({
    data: categories.map((cat) => ({
      name: cat.charAt(0).toUpperCase() + cat.slice(1).replace("-", " "),
      slug: cat,
    })),
  });
}