import axios from "axios";

export async function getDefaultProduct() {
  return await axios.get("https://dummyjson.com/products/category/smartphones");
}

export async function getProductById(id) {
  return await axios.get(`https://dummyjson.com/products/${id}`);
}

export async function getProductsByCategory(id) {
  return await axios.get(`https://dummyjson.com/products/category/${id}`);
}

export function getAllCategories() {
  const categories = [
    "smartphones",
    "mobile-accessories",
    "tablets",
    "laptops",
  ];
  return Promise.resolve({
    data: categories.map((cat) => ({
      name: cat.charAt(0).toUpperCase() + cat.slice(1).replace("-", " "),
      slug: cat,
    })),
  });
}
