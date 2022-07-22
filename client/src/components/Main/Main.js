import React from "react";
import "./Main.css";
import {Link, useNavigate} from "react-router-dom"
import { Header } from "../Header/Header";
import { Metadata } from "../layout/Metadata";

export const Main = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
    <Metadata title = "the Goat Tips"/>
      <div className="main_container">
        <Header/>
  
        <div className="main">
          <div className="main_card">
            <div className="card_content">

            <h1>The Goat Tips</h1>
        <p>
        The Goat Tips - Betting made easy! Your guide for sports betting, The Goat’s Tips caters to your needs with different packages, provides tips and guidance for betting on Thoroughbreds, Greyhounds and much more with real-time data on upcoming races and a great ROI. Sign up now!
        </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
