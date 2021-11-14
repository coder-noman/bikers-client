import React, { useState } from 'react';
import {useLocation, useHistory, Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const LogIn = () => {
  const [error, setError] = useState('');
  const [loginData, setLoginData] = useState({})
    const {signInUsingGoogle, user, loginUser,authError} = useAuth()
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'
    const handleGoogleLogIn = () =>{
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri)
        })
        .catch((error) => {
          setError(error.message)
        })
    }
    const handleonChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e =>{
        loginUser(loginData.email, loginData.password, location, history)

        e.preventDefault();
    }
    return (
        <div className="my-5 container">
            <h1 className="text-center bg-dark text-white">Login</h1>
            {user?.email && <h6 className="text-center  text-success">*User SignIn SuccesFully</h6> }
            {authError && <h6 className="text-center  text-danger">{authError}</h6> }
            <div className="d-flex justify-content-center mt-5"> 
            <form className="w-50" onSubmit={handleLoginSubmit}>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                    <input type="email" name="email"
                    onBlur={handleonChange} className="form-control" id="inputEmail3"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                    <input type="password" name="password"
                    onBlur={handleonChange} className="form-control" id="inputPassword3"/>
                    </div>
                </div>
                <div><p className="text-danger">{error}</p></div>
                <div className="text-center">
                <button type="submit" className="btn btn-dark fw-bold">Sign In</button>
                </div>
            </form>
            </div>
            <Link to="/register" className="mt-1 text-dark fw-bold d-flex justify-content-center align-item-center">New User?</Link>
            <div className="text-center ">
            <button className="btn btn-dark  mt-3 me-2 fw-bold" onClick={handleGoogleLogIn}>Google Sign In</button>
            </div>
        </div>
    );
};

export default LogIn;