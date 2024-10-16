import React from "react";
import logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className="navbar">
      <img
        src={logo}
        alt=""
        width="90px"
      />
      <ul>
       <NavLink to="/"><li>Home</li></NavLink>
       <NavLink to="/products"><li>Products</li></NavLink>
       <NavLink to="/contacts"><li>Contacts</li></NavLink>
        <NavLink to="/about"><li>About</li></NavLink>
        <NavLink to="/jobs"><li>Jobs</li></NavLink>

      </ul>
      <button onClick={() => navigate('/about')}>Get Started</button>
    </div>
  );
};
export default Navbar;
