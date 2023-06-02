import { useState, useContext, useEffect, lazy } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { BarsContext } from "./components/context/barsContext";
const Header = lazy(() => import("./components/Header/Header"));
const Services = lazy(() => import("./components/services/Services"));
const MainV = lazy(() => import("./components/mainV/MainV"));
const About = lazy(() => import("./components/about/About"));
const Travel = lazy(() => import("./components/travel/Travel"));
const Contact = lazy(() => import("./components/contact/Contact"));
const Footer = lazy(() => import("./components/footer/Footer"));
const ContactPage = lazy(() => import("./pages/contactPage/ContactPage"));
const PageNotFound = lazy(() => import("./pages/pageNotFound/PageNotFound"));
const Order = lazy(() => import("./pages/Order/Order"));
const Market = lazy(() => import("./pages/market/Market"));

function App() {
  let { setBars } = useContext(BarsContext);

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  if (windowSize >= 921) {
    setBars(true);
  }

  const { pathname } = useLocation();

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainV />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/travel" element={<Travel windowSize={windowSize} />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/market" element={<Market />} />
        <Route path="/checkout" element={<Order />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {pathname == "/" || pathname == "/services" || pathname == "/about" ? (
        <Contact />
      ) : (
        ""
      )}

      {pathname == "/" ||
      pathname == "/services" ||
      pathname == "/about" ||
      pathname == "/travel" ||
      pathname == "/contact" ||
      pathname == "/market" ||
      pathname == "/checkout" ? (
        <Footer />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
