import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Article from "./components/Article";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app__side"> {/* this is the div containing the whole component and it is a flex box in row direction*/}
        <Navbar />
        <div className="app__bodyFlex"> {/* this is the div containing the header and a body class div component in flex box with column direction*/}
          <Header />
          <div className="body">
            <Switch> {/* to alternate between different pages in the web app*/}
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/article">
                <Article />
              </Route>
              <Route path="/about">
                <About />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
