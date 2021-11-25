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
import Dashboard from './Components/Dashboard/Dashboard';
import Footer from './Components/Shared/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import ExploreProducts from './Components/ExploreProducts/ExploreProducts';
import AdminRoute from './Components/Login/AdminRoute/AdminRoute';
import EditProduct from './Components/Dashboard/EditProduct/EditProduct';

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
            {/* <Products /> */}
            <ExploreProducts/>
            <Footer/>
          </Route>
          <Route path="/login">
            <Navbar/>
            <Login />
            <Footer/>
          </Route>
                    <Route path="/register">
            <Navbar/>
            <Register />
            <Footer/>
          </Route>
          <PrivateRoute path="/boot/:bootId">
            <ProductDescription/>
          </PrivateRoute>
          <AdminRoute path="/edit/:bootId">
            <EditProduct/>
          </AdminRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
