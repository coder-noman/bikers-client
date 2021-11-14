import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'


const Header = () => {
  const {user, logOut, admin} = useAuth();
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid ">
     <h1 class="fw-bold fs-3 text-white">Bikers</h1>
    <button class="navbar-toggler navbar-light bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <nav className="navbar-nav ms-5 ">
            <NavLink to="/home" className="nav-link text-white  active fw-bold fs-5">Home</NavLink>
            <NavLink to="/About" className="nav-link text-white active fw-bold fs-5">About</NavLink>
            <NavLink to="/bikes" className="nav-link text-white active fw-bold fs-5">Bikes</NavLink>
            {user.email && <NavLink to="/dashboard" className="nav-link text-white active fw-bold fs-5">Dashboard</NavLink>}
            {user.email && <p className="nav-link text-white active fw-bold fs-5 text-primary">Hello, {user.displayName}</p>}
            {admin && <p className="nav-link text-white active fw-bold fs-5 text-primary">(Admin)</p>}
            {
              user.email ? 
              <NavLink to="/login" className="nav-link text-white active fw-bold fs-5" onClick={logOut}>Log Out</NavLink>
              :
            <NavLink to="/login" className="nav-link text-white active fw-bold fs-5">Log In</NavLink>}
      </nav>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;