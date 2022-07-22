import React from "react";
// import scss from'scss'
import "./profile.css";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes, Link } from "react-router-dom";
import { Header } from "../Header/Header";

export const ProfileNav = () => {
  const { user, isAuthenticated, loading } = useSelector((state) => state.user);

  console.log(user);

  return (
    <>
      <div className="flexbox">
        <div className="box_one">
          <h1>Profile Setting</h1>

          <div className="pic1">
            <Link to="/dashboard" className="col">
              Edit Profile
            </Link>
            <img
              className="img2"
          src="img/edit.jpg"

              alt="loading"
            />
          </div>
          <div className="pic2">
            <Link to="/dashboard/payment">Payment Methods</Link>
            <img
              className="img2"
              src="img/credit-carddfdf.png"
              alt="loading"
            />
          </div>
          <div className="pic3">
            <Link to="/dashboard/accountsetting">Account Settings</Link>

            <img
              className="img2"
              src= "img/settings.jpg"
              alt="loading"
            />
          </div>
          <div className="pic4">
            <h2>About</h2>
            <img
              className="img2"
              src="img/info.jpg"
              alt="loading"
            />
          </div>
          <div className="pic5">
            <h2>Logout</h2>
            <img
              className="img2"
              src="img/log-out.png"
              alt="loading"
            />
          </div>
        </div>
      </div>
    </>
  );
};

{
  /* <Navbar/> */
}
{
  /* <Routes> */
}
{
  /* <Route path='/home' exact element={<Home/>} />
          <Route path='/reports' element={<Reports/>} />
        <Route path='/products' element={<Products/>} /> */
}
{
  /* </Routes> */
}
{
  /* <Header/> */
}
{
  /* {/* <div style = {{position:"absolute",top:"20%"}} classNameName="profile"> */
}
{
  /* <img src = "/Profile.png"/>
        <h2 >userName:{user.username}</h2>
        <h1>{new Date(user.dob).toDateString()}</h1>
        <h2>gender:{user.gender}</h2>
        
    </div> */
}
