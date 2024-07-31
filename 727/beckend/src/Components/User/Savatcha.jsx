import { Container } from "@mui/system";
import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../CartContext";
import Navbar from "./Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useTranslation } from 'react-i18next';

function Savatcha() {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const [favoriteBooks, setFavoriteBooks] = useState(() => {
    const savedFavorites = localStorage.getItem('favoriteBooks');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  const cartItemsCount = cart.length;

  const handleFavoriteClick = (book) => {
    setFavoriteBooks((prevFavorites) => {
      const isAlreadyFavorite = prevFavorites.some(favBook => favBook.id === book.id);
      let updatedFavorites;

      if (isAlreadyFavorite) {
        updatedFavorites = prevFavorites.filter(favBook => favBook.id !== book.id);
      } else {
        updatedFavorites = [...prevFavorites, book];
      }

      localStorage.setItem('favoriteBooks', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  const isBookFavorite = (bookId) => {
    return favoriteBooks.some(book => book.id === bookId);
  };

  const isBookInCart = (bookId) => {
    return cart.some(book => book.id === bookId);
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div>
      <Container className="min-h-[55vh] pb-24 flex flex-col justify-between">
        <Navbar cartItems={cartItemsCount} />
        <div className="mt-24 flex-grow">
          <div className="flex flex-wrap justify-center mt-12 gap-4">
            {cart.length === 0 ? (
              <div className="text-center text-xl">{t("savat_bosh")} 😢</div>
            ) : (
              cart.map((book, index) => (
                <Link
                  to={`/bookabout/${book.id}`}
                  key={index}
                  className="flex flex-col justify-between"
                >
                  <div className="flex flex-col justify-between border-2 shadow-2xl rounded-md drop-shadow-2xl w-full h-full sm:w-56 m-4 p-4">
                    <img
                      src={book.product_cover}
                      alt={`kitob-${index + 1}`}
                      className="w-full h-[200px] object-cover rounded-md mb-4"
                    />
                    <div className="flex flex-col justify-end flex-grow">
                      <div className="book-name text-md font-bold text-black ">
                        {book.book_name}
                      </div>
                      <div className="text-slate-400 py-2">
                        {book.product_company.name}
                      </div>
                      <div className="text-2xl text-green-600 py-2">
                      {book.product_price_10} - {book.product_price_1000} UZS
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          isBookInCart(book.id) ? removeFromCart(book) : addToCart(book);
                        }}
                        className={`w-[90%] text-md rounded-md mt-4 p-2 ${
                          isBookInCart(book.id) ? 'bg-red-500 text-white' : 'bg-green-500 text-black'
                        }`}
                      >
                        {isBookInCart(book.id) ? "O'chirish" : "Savatga qo'shish"}
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleFavoriteClick(book);
                        }}
                        className="mt-4 ml-2 text-2xl border-none rounded-full p-2 transition-all duration-300"
                      >
                        <FavoriteIcon
                          className={`transition-all duration-300 ${
                            isBookFavorite(book.id) ? 'text-rose-500' : 'text-slate-300'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Savatcha;
