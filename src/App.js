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
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="">
      <AuthProvider>
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
          <Route path="/login">
            <Navbar/>
            <Login />
          </Route>
          <Route path="/register">
            <Navbar/>
            <Register />
          </Route>
          <PrivateRoute path="/boot/:bootId">
            <ProductDescription/>
          </PrivateRoute>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
