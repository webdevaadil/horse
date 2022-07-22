import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";
import { Loginbtn } from "./Loginbtn";

export const Header = () => {
  const { user, isAuthenticated, loading } = useSelector((state) => state);
console.log(user)

  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar">
        <h1> The Goat Tips</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sports">Sports</Link>
          </li>
        </ul>

<Loginbtn/>

      </nav>
    </>
  );
};
