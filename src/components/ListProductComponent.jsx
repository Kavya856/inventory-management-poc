import React, { Component } from "react";
import ProductService from "../services/ProductService";

export default class ListProductComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    this.addProduct = this.addProduct.bind(this);
    this.editProduct = this.editProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.viewProduct = this.viewProduct.bind(this);
  }

  deleteProduct(prodId) {
    ProductService.deleteProduct(prodId).then((res) => {
      this.setState({
        products: this.state.products.filter(
          (product) => product.prodId !== prodId
        ),
      });
    });
  }
  viewProduct(prodId) {
    this.props.history.push(`/view-product/${prodId}`);
  }

  editProduct(prodId) {
    this.props.history.push(`/add-product/${prodId}`);
  }

  componentDidMount() {
    ProductService.getProducts().then((res) => {
      this.setState({ products: res.data });
    });
  }

  addProduct() {
    this.props.history.push("/add-product/_add");
  }
  render() {
    return (
      <div>
        <h2 className="text-center">Products List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addProduct}>
            Add Product
          </button>
        </div>
        <br />
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.products.map((product) => (
                <tr key={product.prodId}>
                  <td>{product.prodName}</td>
                  <td>{product.prodPrice}</td>
                  <td>
                    <button
                      onClick={() => this.editProduct(product.prodId)}
                      className="btn btn-info"
                    >
                      Update
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteProduct(product.prodId)}
                      className="btn btn-danger"
                    >
                      Delete{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewProduct(product.prodId)}
                      className="btn btn-info"
                    >
                      View{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
