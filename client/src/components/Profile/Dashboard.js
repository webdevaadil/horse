import React from "react";
import { Outlet } from "react-router-dom";
import { Profile } from "./Profile";

import { ProfileNav } from "./ProfileNav";

export const Dashboard = () => {
  return (
    <>
      <div style={{display:"flex"}}>
        <ProfileNav />
        <Outlet/> 
      </div>
    </>
  );
};
