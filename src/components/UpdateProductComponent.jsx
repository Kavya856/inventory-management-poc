import React, { Component } from "react";
import ProductService from "../services/ProductService";

export default class UpdateProductComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prodId: this.props.match.params.prodId,
      prodName: "",
      prodPrice: "",
    };
    this.changeProdNameHandler = this.changeProdNameHandler.bind(this);
    this.changeProdPriceHandler = this.changeProdPriceHandler.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
  }

  componentDidMount() {
    ProductService.getProductById(this.state.prodId).then((res) => {
      let product = res.data;
      this.setState({
        prodName: product.prodName,
        prodPrice: product.prodPrice,
      });
    });
  }

  updateProduct = (e) => {
    e.preventDefault();
    let product = {
      prodName: this.state.prodName,
      prodPrice: this.state.prodPrice,
    };
    console.log("product => " + JSON.stringify(product));

    ProductService.updateProduct(product, this.state.prodId).then((res) => {
      this.props.history.push("/products");
    });
  };

  changeProdNameHandler = (event) => {
    this.setState({ prodName: event.target.value });
  };

  changeProdPriceHandler = (event) => {
    this.setState({ prodPrice: event.target.value });
  };

  cancel() {
    this.props.history.push("/products");
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Update Product</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Product Name: </label>
                    <input
                      placeholder="Product Name"
                      name="productName"
                      className="form-control"
                      value={this.state.prodName}
                      onChange={this.changeProdNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Price : </label>
                    <input
                      placeholder="Product Price"
                      name="productPrice"
                      className="form-control"
                      value={this.state.prodPrice}
                      onChange={this.changeProdPriceHandler}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={this.updateProduct}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
