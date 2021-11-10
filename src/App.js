import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Navbar from './Components/Shared/Navbar/Navbar';
import ProductDescription from './Components/ProductDescription/ProductDescription';

function App() {
  return (
    <div className="">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/explore">
            <Navbar></Navbar>
            <Products />
          </Route>
          <Route path="/boot/:bootId">
            <ProductDescription/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
