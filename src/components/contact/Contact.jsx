import React, { useState, useContext } from "react";
import "./contact.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { lang } from "../../lang/Lang";
import { LangContext } from "../context/LangContext";
import { memo } from "react";

function Contact() {
  const [setData] = useState("");

  let { langData } = useContext(LangContext);

  return (
    <div className="contact">
      <div className="container">
        <div className="contact-box">
          <div className="contact_box-left">
            <h1 className="contact_title">{lang[langData].contact.title}</h1>

            <div className="name">
              <label htmlFor="name">{lang[langData].contact.name}</label>
              <input type="text" className="input" />
            </div>

            <div className="phone">
              <label htmlFor="phone">{lang[langData].contact.tel_num}</label>
              <PhoneInput
                country={"uz"}
                inputStyle={{
                  maxWidth: "410px",
                  width: "100%",
                }}
                onChange={(phone) => setData({ phone })}
              />
            </div>

            <div className="comment">
              <label htmlFor="comment">{lang[langData].contact.comment}</label>
              <textarea className="comment-text" cols="40" rows="10"></textarea>
            </div>

            <button className="contact_btn">
              {lang[langData].contact.send}
            </button>
          </div>
          <div className="contact_box-right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.8937939411576!2d69.29151187491448!3d41.26764830341558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae5ffed3c8b6b3%3A0xf5a4a27a2c4591dc!2s22%20Fidoyilar%20Str.%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1682280028427!5m2!1sen!2s"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Contact);
