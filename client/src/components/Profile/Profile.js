import React from 'react'
import { ProfileNav } from './ProfileNav'

export const Profile = () => {
  return (<>
      <div style={{display:"flex"}}>
        {/* <ProfileNav/> */}
            <div className="box_two">
          <h2 className="pro_heading">Profile Photo</h2>

          <div className="pic_flex_box">
            <img  src={process.env.PUBLIC_URL + "img/1.png"}alt="rec" />
            <button className="big_btn">Upload Photo</button>
          </div>
          <h2 className="per_text">Personal Details</h2>
          <input className="name" type="text" placeholder="Full name" />
          <div className="input_flex_box">
            <input className="dob" type="date" placeholder="Date of Birth" />
            <input className="gender" type="text" placeholder="Gender(Optinal)" />
          </div>
          <div className="button_flex_box">
            <button className="dis_btn">Discard</button>
            <button className="sav_btn">Save</button>
          </div>
        </div>
    </div>
  </>
  )
}
