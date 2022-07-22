import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Loginbtn = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, loading } = useSelector((state) => state.user);


  return (
    <>
      <span className="home_btn">
        {isAuthenticated !==true? (
          <div>
            <button className="main_btn" onClick={() => navigate("/login")}>
              Login
            </button>
            <button className="sign_btn" onClick={() => navigate("/signup")}>
              Signup
            </button>
          </div>
        ) : (
          <div>
            <button onClick={()=>navigate("/dashboard")} className="user_btn">{user.username}</button>
          </div>
        )}
      </span>
    </>
  );
};