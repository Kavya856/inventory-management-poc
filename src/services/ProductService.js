import axios from "axios";

const PRODUCT_API_BASE_URL = "http://localhost:8080/api/v1/products";
class ProductService {
  getProducts() {
    return axios.get(PRODUCT_API_BASE_URL);
  }

  createProduct(product) {
    return axios.post(PRODUCT_API_BASE_URL, product);
  }

  getProductById(prodId) {
    return axios.get(PRODUCT_API_BASE_URL + "/" + prodId);
  }

  updateProduct(product, prodId) {
    return axios.put(PRODUCT_API_BASE_URL + "/" + prodId, product);
  }

  deleteProduct(prodId) {
    return axios.delete(PRODUCT_API_BASE_URL + "/" + prodId);
  }
}
export default new ProductService();
