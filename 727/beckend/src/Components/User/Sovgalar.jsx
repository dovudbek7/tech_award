import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Box, Snackbar } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CartContext } from "../../CartContext";
import { useTranslation } from 'react-i18next';


function Sovgalar() {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const [books, setBooks] = useState([]);
  const [favoriteBooks, setFavoriteBooks] = useState({});

  const [openSnack, setOpenSnack] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [vertical, setVertical] = useState("top");
  const [horizontal, setHorizontal] = useState("right");

  useEffect(() => {
    fetch("`http://${ip}/api/products/`books/")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const formattedBooks = data.map((book) => ({
            id: book.id,
            book_cover: book.book_cover,
            book_name: book.book_name,
            book_author: book.book_author,
            book_price: book.book_price,
            book_category: book.book_category,
          }));
          setBooks(formattedBooks);

          const savedFavorites = localStorage.getItem("favoriteBooks");
          if (savedFavorites) {
            const favoritesArray = JSON.parse(savedFavorites);
            const favoritesObject = {};
            favoritesArray.forEach(book => favoritesObject[book.id] = true);
            setFavoriteBooks(favoritesObject);
          }
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
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

    setSnackMessage(favoriteBooks[book.id] ? t("sevimlilardan_ochirildi 😢") : t("sevimlilaga_qoshildi"));
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
  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="mt-24 mb-24">
      <div className="border-none w-full sm:w-56 rounded-md bg-green-300 p-4 text-center">
      {t("sovgabop_kitoblar")}
      </div>

      <div className="flex flex-wrap justify-center content-around mt-12 gap-4">
        {books.length !== 0 &&
          books.map((book, index) => (
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
                  <div className="text-md font-bold text-black ">
                    {book.book_name}
                  </div>
                  <div className="text-slate-400 py-2">
                    {book.book_author.name}
                  </div>
                  <div className="text-2xl text-amber-600 py-2">
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

      <Box sx={{ width: 500 }}>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={openSnack}
          onClose={handleCloseSnack}
          message={snackMessage}
          key={vertical + horizontal}
        />
      </Box>
    </div>
  );
}

export default Sovgalar;
