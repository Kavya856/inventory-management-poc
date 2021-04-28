import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListProductComponent from "./components/ListProductComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateProductComponent from "./components/CreateProductComponent";
import UpdateProductComponent from "./components/UpdateProductComponent";
import ViewProductComponent from "./components/ViewProductComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListProductComponent}></Route>
            <Route path="/products" component={ListProductComponent}></Route>
            <Route
              path="/add-product/:prodId"
              component={CreateProductComponent}
            ></Route>
            <Route
              path="/view-product/:prodId"
              component={ViewProductComponent}
            ></Route>

            {/*  <Route
              path="/update-product/:prodId"
              component={UpdateProductComponent}
            ></Route> */}
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
