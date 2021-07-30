import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portolio from "./components/Portfolio/Portfolio";
import { PROJECT_ROUTE, CONTACT_ROUTE } from "./tools/routes";
import ProjectPage from "./components/project-page/ProjectPage";
import Contact from "./components/contact/Contact";

class App extends Component {
  render() {
    return (
        <Router>
        <Switch>
          <Route exact path={PROJECT_ROUTE} component={ProjectPage} />
          <Route exact path={CONTACT_ROUTE} component={Contact} />
          <Route exact path='/' component={Portolio} />
        </Switch>
        </Router>
    );
  }
}

export default App;
