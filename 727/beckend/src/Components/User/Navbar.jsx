import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../../assets/logo2.png";
import {
  Menu as MenuIcon,
  Facebook as FacebookIcon,
  Telegram as TelegramIcon,
  Instagram as InstagramIcon,
  ShoppingCart as ShoppingCartIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Search as SearchIcon,
  Brightness6 as Brightness6Icon,
} from "@mui/icons-material";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import "tailwindcss/tailwind.css";
import { useTranslation } from "react-i18next";
import Profil from "../Profil";

const Navbar = ({ cartItems, favoriteItems }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const navigate = useNavigate(); // Updated to use useNavigate

  const handleSearchIconClick = () => {
    setSearchOpen(!searchOpen);
  };

  const handleMenuIconClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    fetch(`http://${ip}/api/products/books/?book_name=${searchQuery}`)
    .then((response) => response.json())
    .then((data) => setSearchResults(data))
    .catch((error) => console.error("Error fetching data:", error));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetch(`http://${ip}/api/products/books/?book_name=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => setSearchResults(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleBookClick = (bookId) => {
    navigate(`/bookabout/${bookId}`); // Updated to use navigate
  };

  const handleClickOutside = (e) => {
    if (e.target.closest(".search-container") === null) {
      setSearchOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
    window.location.reload();
  };

  return (
    <div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center">
          <Link to="/">
            <img className="w-16 h-12" src={logoImg} alt="logo" />
          </Link>
          <Link to="/" >
          <h2 className="ml-4 font-serif text-lg sm:text-md">{t("bosh_sahifa")}</h2>
          </Link>
          <Link to="/ekskursiya" >
          <h2 className="ml-4 font-serif text-lg sm:text-md">{t("ekskursiya")}</h2>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <div className="search-container relative">
            {searchOpen && (
              <form onSubmit={handleSearchSubmit} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  className="absolute right-0 w-[400px] top-0 p-2 border rounded-md"
                  placeholder="Qidirish..."
                />
              </form>
            )}
            <SearchIcon
              onClick={handleSearchIconClick}
              className="cursor-pointer"
            />
            {searchOpen && searchResults.length > 0 && (
              <div className="absolute bg-white right-[-98px] top-10 border rounded-md mt-2  w-[500px] z-50">
                {searchResults.map((book) => (
                  <div
                    key={book.id}
                    className="flex p-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleBookClick(book.id)}
                  >
                    <img
                      src={book.book_cover}
                      alt={book.book_name}
                      className="w-16 h-16 inline-block"
                    />
                    <div className="flex flex-grow justify-between">
                      <div className="flex-col justify-start inline-block ml-2">
                        <p className="font-bold">{book.book_name}</p>
                        <p>{book.book_author.name}</p>
                      </div>
                      <p>{book.book_price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <select
            className="p-2 m-2 appearance-none row-start-1 col-start-1 ..."
            onChange={changeLanguage}
            defaultValue={i18n.language}
          >
            <option className="py-2" value="uz">
              O'zbekcha
            </option>
            <option className="py-2" value="en">
              English
            </option>
            <option className="py-2" value="ru">
              Русский
            </option>
          </select>
          <div
            className={`md:flex items-center justify-between ${
              menuOpen ? "block" : "hidden"
            } md:block`}
          >
            <Brightness6Icon
              onClick={toggleDarkMode}
              className="cursor-pointer"
            />
            <a href="tel:+998991052515" className="hidden pl-4 md:block">
              <h2>+998 77 777 77 77</h2>
            </a>
            <Link to="https://web.telegram.org/a/" target="_blank">
              <TelegramIcon className="hidden mx-2 md:block" />
            </Link>
            <Link
              to="https://www.instagram.com"
              target="_blank"
            >
              <InstagramIcon className="hidden mx-2 md:block" />
            </Link>
            <Link to="https://www.facebook.com" target="_blank">
              <FacebookIcon className="hidden mx-2 md:block" />
            </Link>
          </div>
          {/* <MenuIcon
            className="menu-icon-toggle cursor-pointer md:hidden"
            onClick={handleMenuIconClick}
          /> */}
        </div>
      </div>

      <hr className="my-4" />
      <div className="main flex items-center mb-4 justify-between cursor-pointer">
        <p></p>

        <div className="savat-box flex space-x-4">
          <Link to="/savatcha">
            <Badge badgeContent={cartItems} color="success">
              <Button
                variant="contained"
                className="flex items-center md:space-x-2 space-x-0"
              >
                <ShoppingCartIcon className="md:mr-2" />
                <span className="hidden md:block">{t("savatcha")}</span>
              </Button>
            </Badge>
          </Link>

          <Link to="/sevimlilar">
            <Badge badgeContent={favoriteItems} color="success">
              <Button
                variant="contained"
                className="flex items-center md:space-x-2 space-x-0"
              >
                <FavoriteBorderIcon className="md:mr-2" />
                <span className="hidden md:block">{t("sevimlilar")}</span>
              </Button>
            </Badge>
          </Link>
          <Profil />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
