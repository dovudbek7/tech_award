import { Container } from "@mui/system";
import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../../CartContext";
import Footer from "../Footer";
import Navbar from "./Navbar";
import muallif from "../../assets/muallif.png";
import bookpng from "../../assets/bookpng.png";
import { useTranslation } from 'react-i18next';



const Mualliflar = () => {
  const [books, setBooks] = useState([]);


  useEffect(() => {
    fetch("`http://${ip}/api/products/`authors/")
      .then((response) => response.json())
      .then((data) => {
        const lang = localStorage.getItem('i18nextLng');

        if (lang === "uz") {
          setBooks(data.map((book) => ({...book, id: book.id, book_author: book.name })));
        } else if (lang === "ru") {
          setBooks(data.map((book) => ({...book, id: book.id, book_author: book.name_ru })));
        } else {
          setBooks(data.map((book) => ({...book, id: book.id, book_author: book.name_en })));
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const { t, i18n } = useTranslation();

  // const changeLanguage = (event) => {
  //   i18n.changeLanguage(event.target.value);
  // };

  return (
    <div>
      <Container className="min-h-[55vh] flex flex-col mb-24">
        <Navbar />
        <div className="flex flex-wrap justify-center content-around mt-12 gap-4">
          {books.length !== 0 &&
            books.map((book, index) => (
              <div className="flex justify-between border-2 shadow-2xl rounded-md drop-shadow-2xl w-[300px]  h-auto m-4 p-4">
                <img className="w-24 h-24 ml-4 mt-4" src={muallif} alt="logo" />
                <div className="flex flex-col">
                  <div className="auther-name text-slate-700 font-extrabold py-4">
                    {book.book_author}
                  </div>
                  <div className="flex">
                    <img className="w-8 h-8 pt-1 pr-2" src={bookpng} alt="logo" />
                    {index} {t("kitob")}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Mualliflar;
