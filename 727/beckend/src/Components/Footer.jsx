import React from "react";
import logoImg from "../assets/logo2.png";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import payme from "../assets/payme.png";
import click from "../assets/Click.png";
import uzcard from "../assets/Uzcard.png";
import humo from "../assets/Humo.png";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="footer relative bg-sky-600 text-white cursor-pointer p-4">
      <div className="w-full flex flex-wrap align-content justify-center items-start pt-12 space-y-8 sm:space-y-0 sm:flex-nowrap">
      
      <div className="flex flex-col items-center sm:items-start sm:mr-12 mb-8 sm:mb-0">
          <h2 className="text-2xl text-center sm:text-left"> {t("chakana")} </h2>
          <h2 className="text-md p-2 text-center sm:text-left">
            {" "}
            {t("qanday_ishlaydi")}{" "}
          </h2>
          <h2 className="text-md p-2 text-center sm:text-left">
            {" "}
            {t("himoyasi")}{" "}
          </h2>
          <h2 className="text-md p-2 text-center sm:text-left">
            {t("tolov_shartlari")}
          </h2>
          <h2 className="text-md p-2 text-center sm:text-left">
            {" "}
            {t("royxat")}{" "}
          </h2>
        </div>

        <div className="flex flex-col items-center sm:items-start sm:mr-12 mb-8 sm:mb-0">
          <h2 className="text-2xl text-center sm:text-left"> {t("ulgurji")} </h2>
          <h2 className="text-md p-2 text-center sm:text-left">
            {" "}
            {t("qanday_ishlaydi")}{" "}
          </h2>
          <h2 className="text-md p-2 text-center sm:text-left">
            {" "}
            {t("himoyasi")}{" "}
          </h2>
          <h2 className="text-md p-2 text-center sm:text-left">
            {t("tolov_shartlari")}
          </h2>
          <h2 className="text-md p-2 text-center sm:text-left">
            {" "}
            {t("royxat")}{" "}
          </h2>
        </div>

        <div className="flex flex-col items-center sm:items-start sm:mr-12 mb-8 sm:mb-0">
          <h2 className="text-2xl text-center sm:text-left"> {t("menu")} </h2>
          <h2 className="text-md p-2 text-center sm:text-left">
            {" "}
            {t("haqimizda")}{" "}
          </h2>
          <h2 className="text-md p-2 text-center sm:text-left">
            {" "}
            {t("hamkorlar")}{" "}
          </h2>
          <h2 className="text-md p-2 text-center sm:text-left">
            {t("xarid_qilinadi")}
          </h2>
          <h2 className="text-md p-2 text-center sm:text-left">
            {" "}
            {t("yetkazish")}{" "}
          </h2>
        </div>

        <div className="flex flex-col items-center sm:items-start sm:mr-12 mb-8 sm:mb-0">
          <h2 className="text-2xl text-center sm:text-left">{t("kontact")} </h2>
          <h2 className="text-md p-2 flex items-center justify-center sm:justify-start">
            <PhoneAndroidIcon /> +998-77-777-77-77
          </h2>
          <h2 className="text-md p-2 flex items-center justify-center sm:justify-start">
            <MailOutlineIcon /> info@gmail.com
          </h2>
          <a href="https://maps.app.goo.gl/WsuJSEuTtJh7ucri7" target="_blank">
            <h2 className="text-md p-2 flex items-center justify-center sm:justify-start">
              <LocationOnIcon /> Astrum No: -1
            </h2>
          </a>
          <div className="flex space-x-2 mt-4">
            <TelegramIcon />
            <InstagramIcon />
            <FacebookIcon />
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-start">
          <h2 className="text-2xl text-center sm:text-left">
            {" "}
            {t("tolov_turlari")}{" "}
          </h2>
          <div className="flex flex-wrap justify-center mt-4">
            <div className="flex flex-col items-center">
              <img
                className="w-16 h-12 border rounded-xl bg-slate-300 hover:bg-slate-500 ml-4 mt-2"
                src={payme}
                alt="logo"
              />
              <img
                className="w-16 h-12 border rounded-xl bg-slate-300 hover:bg-slate-500 ml-4 mt-4"
                src={uzcard}
                alt="logo"
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                className="w-16 h-12 border rounded-xl bg-slate-300 hover:bg-slate-500 ml-4 mt-2"
                src={click}
                alt="logo"
              />
              <img
                className="w-16 h-12 border rounded-xl bg-slate-300 hover:bg-slate-500 ml-4 mt-4"
                src={humo}
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center p-4">
        <img className="w-16 h-16" src={logoImg} alt="logo" />
        <div className="flex flex-wrap justify-between items-center p-4">
          <h2 className="text-center w-full sm:w-auto sm:ml-32 mt-4 mr-4">
            © 2024 727
          </h2>
          <h2 className="text-center w-full sm:w-auto sm:mr-32 mt-4">
            Ommaviy oferta Politika
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Footer;

