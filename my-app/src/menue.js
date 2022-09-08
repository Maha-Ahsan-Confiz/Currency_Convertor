import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/home";
// import About from "./pages/about";
// import Contact from "./pages/contact";
// import Faq from "./pages/faq";
import App from "./App";
function menue() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/App" component={App} />
        {/* <Route path="/contact" component={Contact} />
        <Route path="/faq" component={Faq} /> */}
      </Switch>
    </Router>
  );
}
export default menue;
