import React, { useState, useMemo, useContext } from "react";
import Select from "react-select";
import "./order.css";
import countryList from "react-select-country-list";
import payme from "../../assets/images/payme.png";
import { ArrayDataContext } from "../../components/context/ArrayDataContext";
import { SummaContext } from "../../components/context/SummaContext";
import PhoneInput from "react-phone-input-2";
import { lang } from "../../lang/Lang";
import { LangContext } from "../../components/context/LangContext";
import { Link } from "react-router-dom";
import { memo } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Order() {
  const { arrayData } = useContext(ArrayDataContext);
  let { reducer } = useContext(SummaContext);
  let { langData } = useContext(LangContext);

  const options = useMemo(() => countryList().getData(), []);

  let summa = reducer + 30000;
  let reverse_summa = summa.toString().split("").reverse();
  let reverse_cost = reducer.toString().split("").reverse();
  let reverseNumArr = [];
  let reverseSummaArr = [];

  for (let i = 0; i < reverse_cost.length; i++) {
    const element = reverse_cost[i];
    if (i % 3 == 0) {
      reverseNumArr.push(",");
      reverseNumArr.push(element);
    } else {
      reverseNumArr.push(element);
    }
  }
  reverseNumArr.splice(0, 1);

  for (let i = 0; i < reverse_summa.length; i++) {
    const element = reverse_summa[i];
    if (i % 3 == 0) {
      reverseSummaArr.push(",");
      reverseSummaArr.push(element);
    } else {
      reverseSummaArr.push(element);
    }
  }
  reverseSummaArr.splice(0, 1);

  const [inputValue, setInputValue] = useState({
    name: {
      title: "",
      bool: false,
    },
    surName: {
      title: "",
      bool: false,
    },
    companyName: {
      title: "",
      bool: true,
    },
    countryName: {
      title: "",
      bool: false,
    },
    streetHouseName: {
      title: "",
      bool: false,
    },
    streetApartName: {
      title: "",
      bool: false,
    },
    cityName: {
      title: "",
      bool: false,
    },
    regionName: {
      title: "",
      bool: false,
    },
    mailIndex: {
      title: "",
      bool: false,
    },
    telNumber: {
      title: "",
      bool: false,
    },
    emailAddress: {
      title: "",
      bool: false,
    },
    clicked: false,
    payment: "",
  });

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function handleInput(params, e) {
    inputValue[params].title = e;

    console.log(isValidEmail(inputValue[params].title));

    if (params == "name" && inputValue[params].title.length > 0) {
      inputValue[params].bool = true;
    } else if (params == "name" && inputValue[params].title.length == 0) {
      inputValue[params].bool = false;
    }

    if (params == "surName" && inputValue[params].title.length > 0) {
      inputValue[params].bool = true;
    } else if (params == "surName" && inputValue[params].title.length == 0) {
      inputValue[params].bool = false;
    }
    if (params == "companyName" && inputValue[params].title.length > 0) {
      inputValue[params].bool = true;
    } else if (
      params == "companyName" &&
      inputValue[params].title.length == 0
    ) {
      inputValue[params].bool = true;
    }
    if (params == "countryName" && inputValue[params].title.length > 0) {
      inputValue[params].bool = true;
    } else if (
      params == "countryName" &&
      inputValue[params].title.length == 0
    ) {
      inputValue[params].bool = false;
    }
    if (params == "streetHouseName" && inputValue[params].title.length > 0) {
      inputValue[params].bool = true;
    } else if (
      params == "streetHouseName" &&
      inputValue[params].title.length == 0
    ) {
      inputValue[params].bool = false;
    }
    if (params == "streetApartName" && inputValue[params].title.length > 0) {
      inputValue[params].bool = true;
    } else if (
      params == "streetApartName" &&
      inputValue[params].title.length == 0
    ) {
      inputValue[params].bool = false;
    }
    if (params == "cityName" && inputValue[params].title.length > 0) {
      inputValue[params].bool = true;
    } else if (params == "cityName" && inputValue[params].title.length == 0) {
      inputValue[params].bool = false;
    }
    if (params == "regionName" && inputValue[params].title.length > 0) {
      inputValue[params].bool = true;
    } else if (params == "regionName" && inputValue[params].title.length == 0) {
      inputValue[params].bool = false;
    }
    if (params == "mailIndex" && inputValue[params].title.length > 0) {
      inputValue[params].bool = true;
    } else if (params == "mailIndex" && inputValue[params].title.length == 0) {
      inputValue[params].bool = false;
    }
    if (params == "telNumber" && inputValue[params].title.length > 3) {
      inputValue[params].bool = true;
    } else if (params == "telNumber" && inputValue[params].title.length == 0) {
      inputValue[params].bool = false;
    }
    if (params == "emailAddress" && isValidEmail(inputValue[params].title)) {
      inputValue[params].bool = true;
    } else if (
      params == "emailAddress" ||
      !isValidEmail(inputValue[params].title)
    ) {
      inputValue[params].bool = false;
    }
    setInputValue(JSON.parse(JSON.stringify(inputValue)));
  }

  function handleClick() {
    if (
      inputValue.name.bool == true &&
      inputValue.surName.bool == true &&
      inputValue.countryName.bool == true &&
      inputValue.streetHouseName.bool == true &&
      inputValue.streetApartName.bool == true &&
      inputValue.cityName.bool == true &&
      inputValue.regionName.bool == true &&
      inputValue.mailIndex.bool == true &&
      inputValue.telNumber.bool == true &&
      inputValue.emailAddress.bool == true &&
      inputValue.payment.length > 0
    ) {
      inputValue.clicked = true;
      toast.success("Success Notification !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      inputValue.clicked = false;
      toast.error("Error Notification !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    setInputValue(JSON.parse(JSON.stringify(inputValue)));
  }

  console.log(inputValue);

  function handlePay(params) {
    inputValue.payment = params;
    setInputValue({ ...inputValue });
  }

  return (
    <div className="order">
      {arrayData.length > 0 ? (
        <div className="container">
          <div className="order_box">
            <div className="order_box-left">
              <div className="order-personal">
                <article>
                  <label htmlFor="name">{lang[langData].checkout.name} *</label>
                  <input
                    id="name"
                    type="text"
                    onChange={(e) => handleInput("name", e.target.value)}
                  />
                  {inputValue.name.bool == false &&
                  inputValue.clicked == false ? (
                    <p className="form_error">
                      Ism kamida 1 ta harfdan iborat bo'lishi kerak
                    </p>
                  ) : (
                    ""
                  )}
                </article>

                <article>
                  <label htmlFor="surname">
                    {lang[langData].checkout.surName} *
                  </label>
                  <input
                    type="text"
                    id="surname"
                    onChange={(e) => handleInput("surName", e.target.value)}
                  />
                  {inputValue.surName.bool == false &&
                  inputValue.clicked == false ? (
                    <p className="form_error">
                      familiya kamida 1 ta harfdan iborat bo'lishi kerak
                    </p>
                  ) : (
                    ""
                  )}
                </article>
              </div>

              <div className="order-firma-name">
                <label htmlFor="firma_name">
                  {lang[langData].checkout.FirmaName}
                </label>
                <input
                  type="text"
                  id="firma_name"
                  onChange={(e) => handleInput("companyName", e.target.value)}
                />
              </div>

              <div className="order-country-name">
                <label htmlFor="country_name">
                  {lang[langData].checkout.country} *
                </label>
                <Select
                  options={options}
                  onChange={(e) => handleInput("countryName", e.label)}
                />
                {inputValue.countryName.bool == false &&
                inputValue.clicked == false ? (
                  <p className="form_error">davlat nomi kiritilishi kerak</p>
                ) : (
                  ""
                )}
              </div>

              <div className="order-street_address">
                <label htmlFor="street_addres">
                  {lang[langData].checkout.streetAddres.label} *
                </label>
                <input
                  type="text"
                  placeholder={
                    lang[langData].checkout.streetAddres.placeholderFirst
                  }
                  onChange={(e) =>
                    handleInput("streetHouseName", e.target.value)
                  }
                />
                {inputValue.streetHouseName.bool == false &&
                inputValue.clicked == false ? (
                  <p className="form_error" style={{ marginBottom: "10px" }}>
                    uy raqami yoki ko'cha nomi bo'lishi kerak
                  </p>
                ) : (
                  ""
                )}
                <input
                  type="text"
                  placeholder={
                    lang[langData].checkout.streetAddres.placeholderSecond
                  }
                  onChange={(e) =>
                    handleInput("streetApartName", e.target.value)
                  }
                />
                {inputValue.streetApartName.bool == false &&
                inputValue.clicked == false ? (
                  <p style={{ marginBottom: "10px" }} className="form_error">
                    kvartira korpus nomi bo'lishi kerak
                  </p>
                ) : (
                  ""
                )}
              </div>

              <div className="order-city-name">
                <label htmlFor="city_name">
                  {lang[langData].checkout.cityName} *
                </label>
                <input
                  type="text"
                  id="city_name"
                  onChange={(e) => handleInput("cityName", e.target.value)}
                />
                {inputValue.cityName.bool == false &&
                inputValue.clicked == false ? (
                  <p className="form_error">
                    shahar yoki qishloq nomi bo'lishi kerak
                  </p>
                ) : (
                  ""
                )}
              </div>

              <div className="order-region-name">
                <label htmlFor="region_name">
                  {lang[langData].checkout.region} *
                </label>
                <input
                  type="text"
                  id="region_name"
                  onChange={(e) => handleInput("regionName", e.target.value)}
                />
                {inputValue.regionName.bool == false &&
                inputValue.clicked == false ? (
                  <p className="form_error">viloyat nomi bo'lishi kerak</p>
                ) : (
                  ""
                )}
              </div>

              <div className="order-mail-index">
                <label htmlFor="mail_index">
                  {lang[langData].checkout.mailIndex} *
                </label>
                <input
                  type="text"
                  id="mail_index"
                  onChange={(e) => handleInput("mailIndex", e.target.value)}
                />
                {inputValue.mailIndex.bool == false &&
                inputValue.clicked == false ? (
                  <p className="form_error">pochta indeksi bo'lishi kerak</p>
                ) : (
                  ""
                )}
              </div>

              <div className="order-tel-number">
                <label htmlFor="tel_number">
                  {lang[langData].checkout.telNum} *
                </label>
                <PhoneInput
                  country={"uz"}
                  inputStyle={{
                    maxWidth: "900px",
                    width: "100%",
                  }}
                  onChange={(e) => handleInput("telNumber", e)}
                />
                {inputValue.telNumber.bool == false &&
                inputValue.clicked == false ? (
                  <p className="form_error">telefon raqami bo'lishi kerak</p>
                ) : (
                  ""
                )}
              </div>
              <div className="order-email-address">
                <label htmlFor="email_addres">
                  {lang[langData].checkout.emailAddres} *
                </label>
                <input
                  type="text"
                  id="email_addres"
                  onChange={(e) => handleInput("emailAddress", e.target.value)}
                />
                {inputValue.emailAddress.bool == false &&
                inputValue.clicked == false ? (
                  <p className="form_error">emailni to'gri kiriting</p>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="order_box-right">
              <h2 className="order_box-title">Buyurtmangiz</h2>
              <div className="order_box-head">
                <p>{lang[langData].checkout.product}</p>
                <p>{lang[langData].checkout.allName}:</p>
              </div>

              <div className="order_box-list">
                {arrayData.map((el) => {
                  return (
                    <div key={el.id} className="order_box-item">
                      <p>
                        {el.title_info} ×{el.count}
                      </p>
                      <p>{el.cost_str}.00 UZS</p>
                    </div>
                  );
                })}
              </div>

              <div className="order_box-list-result">
                <p>{lang[langData].checkout.allName}:</p>
                <p>{reverseNumArr.reverse().join("")}.00 UZS</p>
              </div>

              <div className="order_box-delivery">
                <p>{lang[langData].checkout.delivery}</p>
                <p>Yagona narx: 30,000.00 UZS</p>
              </div>

              <div className="order_box-result">
                <p>{lang[langData].checkout.all_cost}:</p>
                <p>{reverseSummaArr.reverse().join("")}.00 UZS</p>
              </div>

              <div className="control">
                <label className="radio">
                  <input
                    type="radio"
                    onClick={(e) => handlePay(e.target.value)}
                    name="foobar"
                    className="off"
                    value={"cash"}
                  />
                  Naqd pulda to'lash
                </label>
                <label class="radio">
                  <input
                    type="radio"
                    onClick={(e) => handlePay(e.target.value)}
                    name="foobar"
                    className="on"
                    value={"payme"}
                  />
                  Payme
                  <img
                    src={payme}
                    width={"80px"}
                    style={{ marginLeft: "10px" }}
                  />
                </label>
                {inputValue.payment.length > 0 ? (
                  ""
                ) : (
                  <p style={{ fontSize: "16px" }} className="form_error">
                    iltimos tolov uslubini tanlang
                  </p>
                )}
              </div>

              <p className="order_box-text">
                Ваши личные данные будут использоваться для обработки ваших
                заказов, упрощения вашей работы с сайтом и для других целей,
                описанных в нашей
              </p>

              <div className="order-btn_box">
                <button className="take-order-btn" onClick={handleClick}>
                  {lang[langData].checkout.btn}
                </button>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty_checkout-box">
          <div className="container">
            <h1 className="empty-checkout">
              {lang[langData].emptyCheckout.info}
            </h1>
            <div className="empty_travel-box">
              <Link to="/travel" className="empty-travel">
                {lang[langData].emptyCheckout.link}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default memo(Order);
