import * as React from "react";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import ItemListContainer from "./containers/ItemListContainer";
import Cart from "./pages/Cart";
<<<<<<< HEAD
import Login from "./components/Login/login";
=======
import Login from "./components/Login/login"

>>>>>>> f8340b1b83c4d283ad2e9ac10a8639d802dc3b8e

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Login />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/productos/:id" component={ProductDetail} />
        <Route exact path="/category/:category">
          {" "}
          <ItemListContainer />{" "}
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
      <footer> Copyright 2021 Rincón Natural • All Rights Reserved</footer>
    </BrowserRouter>
  );
}

export default App;
