import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Snackbar, Button } from "@mui/material";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { CartContext } from "../../CartContext";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import Footer from "../Footer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useTranslation } from "react-i18next";
import ip from "../Config";
import Tavsiyalar from "./Tavsiyalar";

const labels = {
  0.5: "0.5",
  1: "1",
  1.5: "1.5",
  2: "2",
  2.5: "2.5",
  3: "3",
  3.5: "3.5",
  4: "4",
  4.5: "4.5",
  5: "5",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

function HoverRating({ value }) {
  const [hover, setHover] = useState(-1);

  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        readOnly
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}

const variants = {
  initial: {
    scaleY: 0.5,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
      ease: "circIn",
    },
  },
};

const BarLoader = () => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.25,
      }}
      initial="initial"
      animate="animate"
      className="flex gap-1"
    >
      <motion.div variants={variants} className="h-12 w-2 bg-white" />
      <motion.div variants={variants} className="h-12 w-2 bg-white" />
      <motion.div variants={variants} className="h-12 w-2 bg-white" />
      <motion.div variants={variants} className="h-12 w-2 bg-white" />
      <motion.div variants={variants} className="h-12 w-2 bg-white" />
    </motion.div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(10);

  const increment = () => setCount(count + 10);
  const decrement = () => setCount(count - 10);

  return (
    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
      <button
        onClick={decrement}
        className="w-10 h-10 flex justify-center items-center bg-white text-black text-2xl border-r border-gray-300"
      >
        -
      </button>
      <div className="w-16 h-10 flex justify-center items-center bg-white text-2xl border-r border-gray-300">
        {count}
      </div>
      <button
        onClick={increment}
        className="w-10 h-10 flex justify-center items-center bg-white text-2xl text-black"
      >
        +
      </button>
    </div>
  );
};

function BookAbout() {
  const { t, i18n } = useTranslation();
  const [book, setBook] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const [vertical, setVertical] = useState("top");
  const [horizontal, setHorizontal] = useState("right");
  const [openSnack, setOpenSnack] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const handleCloseSnack = () => {
    setOpenSnack(false);
  };

  useEffect(() => {
    fetch(`http://${ip}/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const lang = localStorage.getItem("i18nextLng");
        const bookData = {
          ...data,
          book_name:
            lang === "uz"
              ? data.product_name
              : lang === "ru"
              ? data.product_name_ru
              : data.product_name_en,
          book_author:
            lang === "uz"
              ? data.product_company.name
              : lang === "ru"
              ? data.product_company.name_ru
              : data.product_company.name_en,
        };
        setBook(bookData);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching book:", error);
        setLoading(false); // Ensure loading is set to false in case of an error
      });
  }, [id]);

  if (loading) {
    return (
      <div className="grid place-content-center justify-center bg-violet-600 px-4 py-24">
        <BarLoader />
      </div>
    );
  }

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const handleCartClick = (book) => {
    isBookInCart(book.id) ? removeFromCart(book) : addToCart(book);
    setSnackMessage(
      isBookInCart(book.id)
        ? t("savatchadan_ochirildi")
        : t("savatchaga_qoshildi")
    );
    setOpenSnack(true);
  };

  const isBookInCart = (bookId) => {
    return cart.some((book) => book.id === bookId);
  };

  return (
    <div>
      <div className="mx-4 md:mx-12 lg:mx-32 mt-4">
        <Navbar />
        <div className="flex">
          <div className="flex flex-col text-sky-400 text-4xl md:text-base">
            {book.book_author}
            <HoverRating value={book.product_rating} />
          </div>
          <button className="flex bg-green-500 hover:bg-green-700 w-auto text-md text-black rounded-md mt-4 p-2">
            Do'konga borish
          </button>
        </div>
        <div className="flex flex-col items-center mt-12 gap-4">
          <div className="flex flex-col md:flex-row border-4 shadow-2xl rounded-md drop-shadow-2xl w-full sm:w-56 md:w-[900px] py-8 px-10 m-4 gap-6">
            <img
              src={book.product_cover}
              alt={`kitob`}
              className="w-[150px] md:max-w-56 h-[100px] object-cover rounded-md mb-4 md:mb-0"
            />
            <img
              src={book.product_cover}
              alt={`kitob`}
              className="w-full md:max-w-56 h-[400px] object-cover rounded-md mb-4 md:mb-0"
            />
            <div className="flex flex-col justify-between w-full">
              <div>
                <div className="book-name text-xl md:text-2xl text-black">
                  {book.book_name}
                </div>
                <div className="text-sky-400 text-sm md:text-base">
                  {book.book_author}
                </div>
                <HoverRating value={book.product_rating} />
                <div className="text-2xl font-bold text-green-600">
                  {book.product_price_10} - {book.product_price_1000} UZS
                </div>
                <div className="flex justify-between items-end text-sm md:text-base mt-4 text-zinc-500">
                  <p> {t("yili")}:</p>{" "}
                  <div className="line border-dotted border-b-2 border-black border-opacity-50 w-[63%] -translate-y-[6px]" />{" "}
                  <p>{book.product_year}</p>{" "}
                </div>
                <div className="flex justify-between items-end text-sm md:text-base mt-4 text-zinc-500">
                  <p>{t("nashriyot")}:</p>
                  <div className="line border-dotted border-b-2 border-black border-opacity-50 w-[55%] -translate-y-[6px]" />{" "}
                  <p>{book.product_price_10}</p> UZS
                </div>

                <div className="flex justify-between items-end text-sm md:text-base mt-4 text-zinc-500">
                  <p>10 - 999</p>{" "}
                  <div className="line border-dotted border-b-2 border-black border-opacity-50 w-[65%] -translate-y-[6px]" />{" "}
                  <p>{book.product_price_100}</p> UZS
                </div>
                <div className="flex justify-between items-end text-sm md:text-base mt-4 text-zinc-500">
                  <p>1000 +</p>{" "}
                  <div className="line border-dotted border-b-2 border-black border-opacity-50 w-[65%] -translate-y-[6px]" />{" "}
                  <p>{book.product_price_1000}</p> UZS
                </div>

                <div className="flex mt-8">
                  <p className="text-2xl text-black mr-4">Ranglari: </p>
                  <p className="border rounded-full bg-black mr-2">
                    {book.product_price_1000}
                  </p>
                  <p className="border rounded-full bg-rose-800 mr-2">
                    {book.product_price_1000}
                  </p>
                  <p className="border rounded-full bg-rose-200 mr-2">
                    {book.product_price_1000}
                  </p>
                </div>

                <div className=" flex mt-4 item-center">
                 <p className="flex mr-10 w-36 h-auto"><Counter /></p>  
                  <p className="text-lg p-2 text-green-500">Sotuvda {book.product_count} dona bor </p>
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleCartClick(book);
                  }}
                  className={`w-[50%] text-md rounded-md mt-4 p-2 ${
                    isBookInCart(book.id)
                      ? "bg-red-500 text-white"
                      : "bg-green-500 text-black"
                  }`}
                >
                  <ShoppingCartIcon className="md:mr-2" />{" "}
                  {isBookInCart(book.id)
                    ? t("savatdan_ochirish")
                    : t("savatga_qoshish")}
                </button>

                <Link to="/xarid">
                  <button
                    onClick={() => addToCart(book)}
                    className="w-auto text-md text-green-500 border-2 border-green-500 hover:text-black hover:bg-green-500 rounded-md mt-4 p-2"
                  >
                    {t("tezkor_olish")}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col">
          <div className="flex justify-start">
            <button className="bg-blue-700 hover:bg-blue-800 w-auto text-md text-white rounded-md mt-4 mb-2 p-2">
              {t("malumotlar")}
            </button>
            <button className="text-md bg-blue-700 text-white border-none border-blue-500 hover:bg-blue-800 rounded-md mt-4 ml-4 mb-2 p-2">
              {t("izohlar")}
            </button>
          </div>
          <div className="book-desc border-none rounded-md w-[100%] h-auto mt-2 mb-16 p-4 bg-neutral-200">
            <p>{book.product_description}</p>
          </div>
        </div>
      </div>
      {/* <Tavsiyalar /> */}
      <Footer />
      <Box sx={{ width: 100 }}>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={openSnack}
          onClose={handleCloseSnack}
          message={snackMessage}
          key={vertical + horizontal}
          autoHideDuration={1000} // Notification will be visible for 1 second
        />
      </Box>
    </div>
  );
}

export default BookAbout;
