import axios from "axios";

export async function getAllProductos() {
    return await axios.get('https://dummyjson.com/products');
}

export async function getProductById(id) {
    return await axios.get(`https://dummyjson.com/products/${id}`);
}

export async function getProductsByCategory(id) {
    return await axios.get(`https://dummyjson.com/products/category/${id}`);
}

export async function getAllCategories() {
    return await axios.get('https://dummyjson.com/products/categories');
}

