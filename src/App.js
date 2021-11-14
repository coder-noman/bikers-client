import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './pages/Shared/Header/Header'
import Footer from './pages/Shared/Footer/Footer'
import Home from './pages/Homes/Home/Home'
import About from './pages/Abouts/About/About'
import Bikes from './pages/Bikes/Bikes/Bikes'
import PageNotFound from './pages/NotFound/PageNotFound/PageNotFound'
import LogIn from './pages/Shared/LogIn/LogIn';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import BikeRegister from './pages/Bikes/BikeRegister/BikeRegister';
import Register from './pages/Shared/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/about">
          <About></About>
          </Route>
          <Route exact path="/bikes">
          <Bikes></Bikes>
          </Route>
          <Route path="/dashboard">
          <Dashboard></Dashboard>
          </Route>
          <PrivateRoute exact path="/bikeregister/:bikename">
          <BikeRegister></BikeRegister>
          </PrivateRoute>
          <Route path="/login">
          <LogIn></LogIn>
          </Route>
          <Route path="/register">
          <Register></Register>
          </Route>
          <Route path="*">
          <PageNotFound></PageNotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
