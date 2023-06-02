import React, { useState, memo } from "react";
import "./contactPage.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneFlip,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { lang } from "../../lang/Lang";
import { LangContext } from "../../components/context/LangContext";
import { useContext } from "react";
function ContactPage() {
  const [setData] = useState("");

  let { langData } = useContext(LangContext);

  return (
    <div className="contact-page">
      <div className="container">
        <h1 className="contact_title-page">{lang[langData].contact.title}</h1>
        <div className="contact-box-page">
          <div className="contact_box-left-page">
            <h2>Bizning manzil</h2>
            <div className="small_line"></div>

            <div className="contact-page_addres">
              <FontAwesomeIcon icon={faLocationDot} />
              <p>{lang[langData].footer.about.info}</p>
            </div>

            <div className="contact-page_call">
              <FontAwesomeIcon icon={faPhoneFlip} />
              <p>+99899 858-48-26</p>
            </div>
            <div className="contact-page_email">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>utourist@yandex.com</p>
            </div>
          </div>
          <div className="contact_box-right-page">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.8937939411576!2d69.29151187491448!3d41.26764830341558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae5ffed3c8b6b3%3A0xf5a4a27a2c4591dc!2s22%20Fidoyilar%20Str.%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1682280028427!5m2!1sen!2s"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="input-box">
          <div className="name-page">
            <label htmlFor="name">{lang[langData].contact.name}</label>
            <input type="text" className="input-page" />
          </div>

          <div className="phone-page">
            <label htmlFor="phone">{lang[langData].contact.tel_num}</label>
            <PhoneInput
              country={"uz"}
              inputStyle={{
                maxWidth: "450px",
                width: "100%",
                fontSize: "16px",
              }}
              dropdownStyle={{
                Width: "450px",
              }}
              buttonStyle={{ fontSize: "16px" }}
              onChange={(phone) => setData({ phone })}
            />
          </div>

          <div className="comment-page">
            <label htmlFor="comment">{lang[langData].contact.comment}</label>
            <textarea
              className="comment-text-page"
              cols="40"
              rows="10"
            ></textarea>
          </div>

          <button className="contact_btn-page">
            {lang[langData].contact.send}
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(ContactPage);
