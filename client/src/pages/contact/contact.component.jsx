import React from "react";
import image from "../../assets/contactus.jpg";
import "./contact.styles.scss";

function ContactPage() {
  return (
    <div>
      <div className="posture">
        <div className="quotation">
          <div>WE ARE HERE FOR YOU</div>
          <div>WE HEAR YOU</div>
        </div>
        <img src={image} alt="contact us" className="image" />

        <div className="contact">
          <div>Please call us on: 00 0000 0000</div>
          <div> Email us: customerservice@fashioncode.com</div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
