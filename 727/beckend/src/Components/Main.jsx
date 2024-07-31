import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import SwipeCarousel from "./SwipeCarousel";
import artelreklama from "../../src/assets/artel-reklama.png";
import artel from "../../src/assets/artel.png";
import gree from "../../src/assets/gree.png";
import kolin1 from "../../src/assets/kolin1.png";
import samsung from "../../src/assets/samsung.png";
import shivaki from "../../src/assets/shivaki.png";
import SotuvXitlari from "./User/SotuvXitlari";
import Tavsiyalar from "./User/Tavsiyalar";
import Navbar from "./User/Navbar";
import Footer from "./Footer";
import LeftMenu from "./LeftMenu";
import SmsChat from "./SmsChat";
import "./SmsChat.css";
import "tailwindcss/tailwind.css";
import { useTranslation } from "react-i18next";
import { CartContext } from "../CartContext";
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import "../index.css";

const Main = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [leftMenuOpen, setLeftMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { cart, favoriteBooks } = useContext(CartContext);
  const cartItemsCount = cart.length;
  const favoriteItemsCount = favoriteBooks.length;

  const handleSearchIconClick = () => {
    setSearchOpen(!searchOpen);
  };

  const handleMenuIconClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const handleClickOutside = (e) => {
    if (e.target.closest(".search-container") === null) {
      setSearchOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOpen = () => setOpenKirish(true);
  const handleClose = () => {
    setOpenKirish(false);
    setOpen(false);
  };

  const handleLeftMenuToggle = () => {
    setLeftMenuOpen(!leftMenuOpen);
  };

  const { t, i18n } = useTranslation();
  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const brands = [
    { id: 1, src: artel, alt: "artel", link: "/ekskursiya" },
    { id: 2, src: gree, alt: "gree", link: "/" },
    { id: 3, src: artel, alt: "sag", link: "/" },
    { id: 4, src: samsung, alt: "samsung", link: "/" },
    { id: 5, src: shivaki, alt: "shivaki", link: "/" },
    { id: 6, src: kolin1, alt: "kolin1", link: "/" },
    { id: 7, src: artel, alt: "artel", link: "/ekskursiya" },
    { id: 8, src: gree, alt: "gree", link: "/" },
    { id: 9, src: artel, alt: "sag", link: "/" },
    { id: 10, src: samsung, alt: "samsung", link: "/" },
    { id: 11, src: shivaki, alt: "shivaki", link: "/" },
    { id: 12, src: kolin1, alt: "kolin1", link: "/" },
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? brands.length - 4 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === brands.length - 4 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <div className="min-h-[55vh] min-w-[100vh] mx-auto px-4">
        <Navbar cartItems={cartItemsCount} favoriteItems={favoriteItemsCount} />
        <div className="flex w-full">
          <div
            className={`w-1/5 ${leftMenuOpen ? "block" : "hidden"} md:block transition-all duration-300 ease-in-out`}
          >
            <LeftMenu />
          </div>
          <div className="w-4/5">
            <SwipeCarousel />
          </div>
          <SmsChat />
        </div>

        <div className="title-name w-full sm:w-56 p-4 text-4xl font-semibold text-center">
          {t("brendlar")}
        </div>
        <div className="flex justify-center items-center mt-12">
          <div className="flex flex-wrap justify-center gap-6 mx-4">
            <button onClick={handlePrevClick}><WestIcon /></button>
            {brands.slice(currentIndex, currentIndex + 5).map((brand) => (
              <div key={brand.id} className="reklama flex flex-col items-center text-9xl border bg-sky-100 rounded-[100%] p-8">
                <Link to={brand.link}>
                  <img className="w-28 h-28" src={brand.src} alt={brand.alt} />
                </Link>
              </div>
            ))}
          </div>
          <button onClick={handleNextClick}><EastIcon /></button>
        </div>
        <hr className="mt-8" />
        <hr />
        <SotuvXitlari />
        <img
          className="w-[90%] h-[650px] ml-20 rounded-2xl"
          src={artelreklama}
          alt="artel-reklama"
        />
        <Tavsiyalar />
      </div>
      <Footer />
    </div>
  );
};

export default Main;

