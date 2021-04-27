import React, { Component } from "react";
import ProductService from "../services/ProductService";

class ViewProductComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prodId: this.props.match.params.prodId,
      product: {},
    };
  }

  componentDidMount() {
    ProductService.getProductById(this.state.prodId).then((res) => {
      this.setState({ product: res.data });
    });
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center"> View Product Details</h3>
          <div className="card-body">
            <div className="row">
              <label> Product Name: </label>
              <div> {this.state.product.prodName}</div>
            </div>
            <div className="row">
              <label> Product Price: </label>
              <div> {this.state.product.prodPrice}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewProductComponent;
