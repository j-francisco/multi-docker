import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import OtherPage from "./OtherPage";
import Fib from "./Fib";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/otherpage">Other Page</Link>
            </div>
          </nav>
        </header>
        <div>
          <Switch>
            <Route path="/otherpage">
              <OtherPage />
            </Route>
            <Route exact path="/">
              <Fib />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
