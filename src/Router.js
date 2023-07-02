import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import { PrimaryMenuItems } from "./components/Navbar/MenuItems"
import About from "./components/PrimaryMenu/About"
import Something from "./components/PrimaryMenu/MoreItems/Something"
import Index from "./components/PrimaryMenu/DummyWebsite/Index"
import InvalidRoute from "./components/InvalidRoute"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import BackDrop from "./components/PrimaryMenu/MoreItems/BackDrop"
import React from "react";

const Router = () => {
  return (
    <div className="main-container">
      <BrowserRouter>
        <Navbar menuItems={PrimaryMenuItems} />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/something" component={Something} />
          <Route exact path="/something/backdrop" component={BackDrop} />
          <Route exact path="/" component={Index} />
          <Route exact path="/my-gh-website" component={Index} />
          <Route component={InvalidRoute} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default Router
