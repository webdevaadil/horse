import React from "react";
import { ProfileNav } from "./ProfileNav";
import"./paymentmethoad.css"

export const PaymentMethoad = () => {
  return (
    <div style={{display:"flex"}}>
        
      <div className="box_two">
        <h2>Bronze Membership</h2>
        <h2>$15 / Week</h2>
        <ul>
          <li>Recommended tips</li>
          <li>Recommended tips</li>
          <li>Recommended tips</li>
        </ul>

        <div>
          <div className="box_three">
            <h2 className="per_text">Membership Details</h2>
            <input
              className="Select_pack"
              type="text"
              placeholder="Select Package"
            />
            <h2 className="pay_detail">Payment Details</h2>
            <input className="card_name" type="text" placeholder="Name on Card" />
            <input
              className="card_number"
              type="number"
              placeholder="Card Number"
            />
            <div className="input_flex_box"></div>
            <div className="button_flex_box">
              <input className="exp" type="number" placeholder="Expairy" />
              <input className="cvc" type="number" placeholder="CVC" />
            </div>
            <button className="btn-save">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};
