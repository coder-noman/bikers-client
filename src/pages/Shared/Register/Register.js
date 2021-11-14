import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const {user, registerUser, isLoading, authError} = useAuth()


    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e =>{
        e.preventDefault();
        if(loginData.password !== loginData.password2){
            alert('your password did not match..');
            return;
        }
        registerUser(loginData.email, loginData.password,loginData.name,history);
    }
    return (
        <div className="my-5 container">
            <h1 className="text-center bg-dark text-white">Register</h1>
            {user?.email && <h6 className="text-center  text-success">*User Created SuccesFully</h6> }
            {authError && <h6 className="text-center  text-danger">{authError}</h6> }
            <div className="d-flex justify-content-center mt-5">
            {!isLoading && <form className="w-50" onSubmit={handleLoginSubmit}>
                <div className="row mb-3">
                    <label  className="col-sm-2 col-form-label fw-bold">Name</label>
                    <div className="col-sm-10">
                    <input type="text" name="name"
                    onBlur={handleOnBlur} className="form-control" required/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label  className="col-sm-2 col-form-label fw-bold">Email</label>
                    <div className="col-sm-10">
                    <input type="email" name="email"
                    onBlur={handleOnBlur} className="form-control" required/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label fw-bold">Password</label>
                    <div className="col-sm-10">
                    <input type="password" name="password"
                    onBlur={handleOnBlur} className="form-control" required/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label fw-bold">Retype-Password</label>
                    <div className="col-sm-10">
                    <input type="password"  name="password2"
                    onBlur={handleOnBlur} className="form-control" required/>
                    </div>
                </div>
                <div className="text-center">
                <button type="submit" className="btn btn-dark me-2 fw-bold">Register</button>
                    </div>     
            </form>}
            <span class="visually-hidden"></span>
            {isLoading &&  <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>}
            </div>
            <div className="text-center">
            <Link to="/login" className="mt-2 text-dark fw-bold">Already Register?</Link>
            </div>
            
        </div>
    );
};

export default Register;