import React from 'react'
import { ProfileNav } from './ProfileNav'
import"./accountsetting.css"

export const AccountSetting = () => {
  return (
    <div style={{display:"flex"}}>
          
        <div className="box_two">
            <h2 className="per_text">Change Password</h2>
            <input className="cuttent_pass" type="password" placeholder="Enter Current Password"/>
            <input className="new_pass" type="password" placeholder="Enter a new Password"/>
            <input className="re_pass" type="password" placeholder="Re-enter a new Password"/>
            
            
            <button className="sav_btn">Save</button>
        </div>
    </div>
  )
}
