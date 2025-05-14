import axios from "axios";

export async function getAllProductos() {
    return await axios.get('https://dummyjson.com/products');
}