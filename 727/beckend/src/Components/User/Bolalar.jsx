import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Box, Snackbar, Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CartContext } from "../../CartContext";
import { useTranslation } from 'react-i18next';

function Bolalar() {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const [books, setBooks] = useState([]);
  const [favoriteBooks, setFavoriteBooks] = useState({});
  const [openSnack, setOpenSnack] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [vertical, setVertical] = useState("top");
  const [horizontal, setHorizontal] = useState("right");
  const [visibleBooksCount, setVisibleBooksCount] = useState(5); // State for pagination

  useEffect(() => {
    fetch("`http://${ip}/api/products/`books/")
      .then((response) => response.json())
      .then((data) => {
        const lang = localStorage.getItem('i18nextLng');

        setBooks(data.map((book) => ({
          ...book,
          book_name: lang === 'uz' ? book.book_name : lang === 'ru' ? book.book_name_ru : book.book_name_en,
          book_author: lang === 'uz' ? book.book_author.name : lang === 'ru' ? book.book_author.name_ru : book.book_author.name_en,
        })));
      })
      .catch((error) => 
        console.error("Error fetching data:", error));
  }, []);

  const handleCloseSnack = () => {
    setOpenSnack(false);
  };

  const handleFavoriteClick = (book) => {
    const updatedFavorites = { ...favoriteBooks, [book.id]: !favoriteBooks[book.id] };
    setFavoriteBooks(updatedFavorites);

    const likedBooksArray = Object.keys(updatedFavorites)
      .filter((id) => updatedFavorites[id])
      .map((id) => books.find((b) => b.id === id));

    localStorage.setItem("favoriteBooks", JSON.stringify(likedBooksArray));

    setSnackMessage(favoriteBooks[book.id] ? t("sevimlilardan_ochirildi") : t("sevimlilaga_qoshildi"));
    setOpenSnack(true);
  };

  const handleCartClick = (book) => {
    isBookInCart(book.id) ? removeFromCart(book) : addToCart(book);
    setSnackMessage(isBookInCart(book.id) ? t("savatchadan_ochirildi") : t("savatchaga_qoshildi"));
    setOpenSnack(true);
  };

  const isBookInCart = (bookId) => {
    return cart.some(book => book.id === bookId);
  };

  const { t, i18n } = useTranslation();
  // const changeLanguage = (event) => {
  //   i18n.changeLanguage(event.target.value);
  // };

  const handleLoadMore = () => {
    setVisibleBooksCount(prevCount => prevCount + 5); // Load 5 more books
  };

  return (
    <div className="mt-24">
      <div className="title-name  w-full sm:w-56 p-4 text-4xl font-semibold text-center">
        {t("tavsiyalar")}
      </div>

      <div className="flex flex-wrap justify-center content-around mt-12 gap-4">
        {books.slice(0, visibleBooksCount).map((book, index) => (
          <Link
            to={`/bookabout/${book.id}`}
            key={index}
            className="flex flex-col justify-between"
          >
            <div className="flex flex-col justify-between border-2 shadow-2xl rounded-md drop-shadow-2xl w-full h-full sm:w-56 m-4 p-4">
              <img
                src={book.book_cover}
                alt={`kitob-${index + 1}`}
                className="w-full h-[200px] object-cover rounded-md mb-4"
              />
              <div className="flex flex-col justify-end flex-grow">
                <div className="book-name text-md font-bold text-black ">
                  {book.book_name}
                </div>
                <div className="text-slate-400 py-2">
                  {book.book_author}
                </div>
                <div className="text-2xl text-green-600 py-2">
                  {book.book_price} UZS
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleCartClick(book);
                  }}
                  className={`w-[90%] text-md rounded-md mt-4 p-2 ${
                    isBookInCart(book.id) ? 'bg-red-500 text-white' : 'bg-green-500 text-black'
                  }`}
                >
                  {isBookInCart(book.id) ? t("savatdan_ochirish") : t("savatga_qoshish")}
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
                      favoriteBooks[book.id] ? 'text-rose-500' : 'text-slate-300'
                    }`}
                  />
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {visibleBooksCount < books.length && (
        <div className="flex justify-center mt-8">
          <Button onClick={handleLoadMore}>
            {t("yana_korish")}
          </Button>
        </div>
      )}

      <Box sx={{ width: 500 }}>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={openSnack}
          onClose={handleCloseSnack}
          message={snackMessage}
          key={vertical + horizontal}
        />
      </Box>
      <hr className="mt-8" />
      <hr />
    </div>
  );
}

export default Bolalar;
