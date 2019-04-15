import React, { Fragment } from "react";
import Navbar from "../components/navbar";
import { Route } from "react-router-dom";
import LoginPage from "../components/auth/login";
import SignupPage from "../components/auth/signup";

import "./App.css";

const App = () => {
  const Navdata = [
    {
      id: 1,
      name: "Product",
      url: "/products"
    },
    {
      id: 2,
      name: "Contact",
      url: "/contact"
    }
  ];
  return (
    <Fragment>
      <Navbar data={Navdata} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
      <Route />
    </Fragment>
  );
};

export default App;
