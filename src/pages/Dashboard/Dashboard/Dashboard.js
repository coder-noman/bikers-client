import React from 'react';
import { Link,useRouteMatch,Switch,Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Pay from '../../Dashboard/Pay/Pay'
import AddProducts from '../AddProducts/AddProducts';
import LogOut from '../LogOut/LogOut';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MyOrder from '../MyOrder/MyOrder';
import Review from '../Review/Review';

const Dashboard = () => {
    let {path, url} = useRouteMatch();
    const {admin} = useAuth();
    return (
        <div className="container mt-4">
            <h1 className="text-center bg-dark text-white mt-2 ">Dashboard</h1>
            <div className="row">
                <div className="col-12 col-sm-12 col-lg-2 border border-dark">
                    <h5 className="text-center mt-3 fw-bold border py-3 border-dark">On This page</h5>
                    <Link to={`${url}`} className="nav-link btn btn-dark text-white active fw-bold  fs-5">My Orders</Link>
                    {admin && <div>
                        <Link to={`${url}/makeadmin`} className="nav-link btn btn-dark text-white active fw-bold fs-5 my-2">Make Admin</Link>
                        <Link to={`${url}/addproducts`} className="nav-link btn btn-dark text-white active fw-bold fs-5 my-2">Add Products</Link>
                    </div>
                    }
                    <Link to={`${url}/pay`} className="nav-link btn btn-dark text-white active fw-bold fs-5 my-2">pay</Link>
                    <Link to={`${url}/review`} className="nav-link  btn btn-dark text-white active fw-bold fs-5">Review</Link>
                    <Link to={`${url}/logout`} className="nav-link  btn btn-dark text-white active fw-bold fs-5 my-2">Logout</Link>
                </div>
                <div className="col-12 col-sm-12 col-lg-10 border border-dark">
                    
                    <Switch>
                        <Route exact path={path}>
                            <MyOrder></MyOrder>
                        </Route>
                        <Route path={`${path}/makeadmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route path={`${path}/addproducts`}>
                            <AddProducts></AddProducts>
                        </Route>
                        <Route path={`${path}/pay`}>
                            <Pay></Pay>
                        </Route>
                        <Route path={`${path}/review`}>
                            <Review></Review>
                        </Route>
                        <Route path={`${path}/logout`}>
                            <LogOut></LogOut>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;