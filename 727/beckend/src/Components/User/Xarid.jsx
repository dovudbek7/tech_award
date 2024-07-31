import React, { useState, useEffect } from "react";
import { Container, MenuItem, Select, TextField, FormControl, InputLabel } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Navbar from "./Navbar";
import Footer from "../Footer";
import { useTranslation } from "react-i18next";

function Xarid() {
  const [phoneNumber, setPhoneNumber] = useState(localStorage.getItem('phoneNumber') || "+998");
  const [message, setMessage] = useState(localStorage.getItem('message') || "");
  const [name, setName] = useState(localStorage.getItem('name') || "");
  const [promokod, setPromokod] = useState(localStorage.getItem('promokod') || "");
  const [surname, setSurname] = useState(localStorage.getItem('surname') || "");
  const [region, setRegion] = useState(localStorage.getItem('region') || "");
  const [district, setDistrict] = useState(localStorage.getItem('district') || "");
  const [street, setStreet] = useState(localStorage.getItem('street') || "");
  const [deliveryMethod, setDeliveryMethod] = useState(localStorage.getItem('deliveryMethod') || "");
  const [paymentMethod, setPaymentMethod] = useState(localStorage.getItem('paymentMethod') || "");

  const { t, i18n } = useTranslation();

  const regions = [
    "Toshkent viloyati",
    "Toshkent",
    "Xorazm",
    "Qoraqalpog'iston",
    "Farg'ona",
    "Sirdaryo",
    "Surxondaryo",
    "Samarqand",
    "Namangan",
    "Navoiy",
    "Qashqadaryo",
    "Andijon",
    "Buxoro",
    "Jizzax",
  ];

  const districts = {
    "Toshkent viloyati": ["Bekobod", "Bo'stonliq", "Chirchiq", "Parkent", "Yangi Bozor", "Oqqo'rg'on", "Ohangaron", "Pskent", "Quyichirchiq", "O'rta Chirchiq", "Chinoz", "Yangiyo'l", "Zangiota", "Qibray", "Toshkent"],
    Toshkent: ["Bektemir", "Mirzo Ulug'bek", "Shayxontohur", "Yunusobod", "Chilonzor", "Yakkasaroy", "Yashnabod", "Uchtepa", "Sergeli", "Olmazor"],
    Xorazm: ["Urganch", "Xiva", "Shovot", "Gurlan", "Yangibozor", "Bog'ot", "Yangiariq", "Xonqa", "Qo'shko'pir", "Hazorasp"],
    "Qoraqalpog'iston": ["Nukus", "Beruniy", "To'rtko'l", "Chimboy", "Mo'ynoq", "Xo'jayli", "Qonliko'l", "Ellikqal'a", "Amudaryo", "Taxtako'pir", "Qung'irot", "Kegeyli", "Shumanay"],
    "Farg'ona": ["Farg'ona", "Beshariq", "Marg'ilon", "Qo'qon", "Oltiariq", "Quvasoy", "Rishton", "O'zbekiston", "Furqat", "Dang'ara", "Yozyovon", "Uchko'prik", "Buvayda", "Toshloq", "Bag'dod"],
    Sirdaryo: ["Guliston", "Shirin", "Yangiyer", "Sardoba", "Sirdaryo", "Boyovut", "Xovos", "Mirzaobod", "Oqoltin", "Sayxunobod"],
    Surxondaryo: ["Termiz", "Denov", "Sherobod", "Sariosiyo", "Jarqo'rg'on", "Sho'rchi", "Qumqo'rg'on", "Angor", "Boysun", "Qiziriq", "Oltinsoy", "Muzrabot", "Uzun"],
    Samarqand: ["Samarqand", "Urgut", "Kattaqo'rg'on", "Ishtixon", "Payariq", "Nurobod", "Qo'shrabot", "Bulung'ur", "Pastdarg'om", "Paxtachi", "Toyloq", "Jomboy"],
    Namangan: ["Namangan", "Kosonsoy", "To'raqo'rg'on", "Pop", "Chortoq", "Uychi", "Yangiqo'rg'on", "Chust", "Mingbuloq"],
    Navoiy: ["Navoiy", "Zarafshon", "Uchquduq", "Qiziltepa", "Xatirchi", "Konimex", "Nurota", "Tomdi", "Navbahor"],
    Qashqadaryo: ["Qarshi", "Shahrisabz", "G'uzor", "Kitob", "Yakkabog'", "Kasbi", "Nishon", "Dehqonobod", "Chiroqchi", "Qamashi", "Mirishkor", "Muborak"],
    Andijon: ["Andijon", "Asaka", "Xonobod", "Shahrixon", "Oltinko'l", "Paxtaobod", "Qo'rg'ontepa", "Baliqchi", "Izboskan", "Jalaquduq", "Xo'jaobod", "Buloqboshi", "Marhamat", "Ulug'nor"],
    Buxoro: ["Buxoro", "G'ijduvon", "Kogon", "Vobkent", "Qorako'l", "Romitan", "Shofirkon", "Olot", "Peshku", "Qorovulbozor", "Jondor"],
    Jizzax: ["Jizzax", "Paxtakor", "Zomin", "G'allaorol", "Sharof Rashidov", "Yangiobod", "Baxmal", "Forish", "Do'stlik", "Mirzacho'l", "Zafarobod", "Arnasoy"],
  };

  useEffect(() => {
    localStorage.setItem('phoneNumber', phoneNumber);
    localStorage.setItem('message', message);
    localStorage.setItem('name', name);
    localStorage.setItem('promokod', promokod);
    localStorage.setItem('surname', surname);
    localStorage.setItem('region', region);
    localStorage.setItem('district', district);
    localStorage.setItem('street', street);
    localStorage.setItem('deliveryMethod', deliveryMethod);
    localStorage.setItem('paymentMethod', paymentMethod);
  }, [phoneNumber, message, name, promokod, surname, region, district, street, deliveryMethod, paymentMethod]);

  const phoneNumberFormatter = (input) => {
    let cleaned = input.replace(/\D/g, "");

    if (cleaned.startsWith("998")) {
      cleaned = cleaned.slice(3);
    }

    let formatted = "+998";

    if (cleaned.length > 0) {
      formatted += ` (${cleaned.substring(0, 2)}`;
    }
    if (cleaned.length >= 2) {
      formatted += `) ${cleaned.substring(2, 5)}`;
    }
    if (cleaned.length >= 5) {
      formatted += ` ${cleaned.substring(5, 7)}`;
    }
    if (cleaned.length >= 7) {
      formatted += ` ${cleaned.substring(7, 9)}`;
    }

    return formatted;
  };

  const handlePhoneNumberChange = (event) => {
    const input = event.target.value;
    const formattedInput = phoneNumberFormatter(input);
    setPhoneNumber(formattedInput);
  };

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div>
      <Container className="min-h-[55vh] flex flex-col justify-between">
        <Navbar />
        <div className=" flex justify-between">
          <div className="flex-col w-[50%]">
            <p className="mt-12">{t("xarid")}</p>

            <div className="xarid-bg mt-4 border-2 rounded-md w-[130%] h-auto mb-16 p-4 bg-neutral-200">
              <p> {t("malumotlar")} </p>
              <div className="flex justify-between">
                <TextField
                  id="name"
                  label={t("ism")}
                  variant="outlined"
                  margin="normal"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <TextField
                  id="surname"
                  label={t("familya")}
                  variant="outlined"
                  margin="normal"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  required
                />
                <TextField
                  id="phone-number"
                  label={t("traqam")}
                  variant="outlined"
                  margin="normal"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  inputProps={{ maxLength: 19 }}
                  required
                />
              </div>
            </div>

            <div className="xarid-bg mt-4 border-2 rounded-md w-[130%] h-auto mb-16 p-4 bg-neutral-200">
              <p className="flex-col mb-4">{t("yetkazish_usuli")}</p>
              <div className=" flex justify-between">
                <button
                  className={`border-2 rounded-md p-4 ${deliveryMethod === 'kuryer' ? 'bg-blue-500 text-white' : 'bg-blue-200 hover:bg-blue-300'}`}
                  onClick={() => setDeliveryMethod('kuryer')}
                >
                  <LocalShippingIcon className="mx-2" />
                  {t("kuryer")}
                </button>
                <button
                  className={`border-2 rounded-md p-4 ${deliveryMethod === 'pochta' ? 'bg-blue-500 text-white' : 'bg-blue-200 hover:bg-blue-300'}`}
                  onClick={() => setDeliveryMethod('pochta')}
                >
                  <LocalPostOfficeIcon className="mx-2" />
                  {t("pochta")}
                </button>
                <button
                  className={`border-2 rounded-md p-4 ${deliveryMethod === 'olib_ketish' ? 'bg-blue-500 text-white' : 'bg-blue-200 hover:bg-blue-300'}`}
                  onClick={() => setDeliveryMethod('olib_ketish')}
                >
                  <StoreMallDirectoryIcon className="mx-2" />
                  {t("olib_ketish")}
                </button>
              </div>
            </div>

            <div className="xarid-bg mt-4 border-2 rounded-md w-[130%] h-auto mb-16 p-4 bg-neutral-200">
              <p className="flex-col"> {t("manzil")} </p>
              <div className=" flex justify-between">
                <FormControl
                  variant="outlined"
                  margin="normal"
                >
                  <InputLabel id="region-label">{t("viloyat")}</InputLabel>
                  <Select
                    labelId="region-label"
                    id="region"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    label={t("viloyat")}
                    displayEmpty
                  >
                    <MenuItem value="" disabled>
                      <em>{t("viloyat")}</em>
                    </MenuItem>
                    {regions.map((region) => (
                      <MenuItem key={region} value={region}>
                        {region}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl
                  variant="outlined"
                  margin="normal"
                  disabled={!region}
                >
                  <InputLabel id="district-label">{t("tuman")}</InputLabel>
                  <Select
                    labelId="district-label"
                    id="district"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    label={t("tuman")}
                    displayEmpty
                  >
                    <MenuItem value="" disabled>
                      <em>{t("tuman")}</em>
                    </MenuItem>
                    {districts[region]?.map((district) => (
                      <MenuItem key={district} value={district}>
                        {district}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  id="street"
                  label={t("manzil")}
                  variant="outlined"
                  margin="normal"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </div>
            </div>

            <div className="xarid-bg mt-4 justify-between border-2 rounded-md w-[130%] h-auto mb-16 p-4 bg-neutral-200">
              <p className="flex-col"> {t("tolash_usuli")}</p>
              <div className=" flex justify-between">
                <button
                  className={`border-2 rounded-md p-4 ${paymentMethod === 'payme' ? 'bg-blue-500 text-white' : 'bg-blue-200 hover:bg-blue-300'}`}
                  onClick={() => setPaymentMethod('payme')}
                >
                  <CreditCardIcon className="mx-2" />
                  Payme {t("orqali")}
                </button>
                <button
                  className={`border-2 rounded-md p-4 ${paymentMethod === 'click' ? 'bg-blue-500 text-white' : 'bg-blue-200 hover:bg-blue-300'}`}
                  onClick={() => setPaymentMethod('click')}
                >
                  <CreditCardIcon className="mx-2" />
                  Click {t("orqali")}
                </button>
                <button
                  className={`border-2 rounded-md p-4 ${paymentMethod === 'naqt' ? 'bg-blue-500 text-white' : 'bg-blue-200 hover:bg-blue-300'}`}
                  onClick={() => setPaymentMethod('naqt')}
                >
                  <AttachMoneyIcon className="mx-2" />
                  {t("naqt_tolash")}
                </button>
              </div>
            </div>

            <div className="xarid-bg mt-4 border-2 rounded-md w-[130%] h-auto mb-16 p-4 bg-neutral-200">
              <p className="flex-col"> {t("promokod")} </p>
              <TextField
                className="promokod-input"
                id="promokod"
                variant="outlined"
                margin="normal"
                value={promokod}
                onChange={(e) => setPromokod(e.target.value)}
              />
              <button className="promokod flex-col border-2 rounded-md bg-blue-500 hover:bg-blue-700 text-white w-[30%] h-auto ml-4 mt-4 p-4">
                {t("foydalanish")}
              </button>
            </div>

            <div className="xarid-bg mt-4 border-2 rounded-md w-[130%] h-auto mb-56 p-4 bg-neutral-200">
              <p className="flex-col">{t("qoshimcha_izoh")}</p>
              <textarea
                className="messages rounded-md mt-4 p-4"
                name="comment"
                cols="50"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="w-[50%] pt-[6%] pl-[20%]">
            <div className="mt-4 border-2 rounded-md w-full h-auto mb-8 p-4 bg-neutral-200">
              <p className="text-xl font-bold text-black">
                {t("buyurtmalaringiz")}:
              </p>
              <div className="flex justify-between">
                <p className="text-sm text-slate-500 py-2">{t("mahsulotlar")}(0)</p>
                <p className="text-sm text-slate-500 py-2">0 so'm</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm text-slate-500 py-2">{t("yetkazish_usuli")}</p>
                <p className="text-sm text-slate-500 py-2">0 so'm</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm text-slate-500 py-2">{t("chegirmalar")}</p>
                <p className="text-sm text-slate-500 py-2">0 so'm</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm text-slate-500 py-2">{t("promokod_chegirma")}</p>
                <p className="text-sm text-slate-500 py-2">0 so'm</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm text-slate-500 py-2">{t("jami")}</p>
                <p className="text-sm text-slate-500 py-2">0 so'm</p>
              </div>
            </div>
            <button className="flex-col border-2 rounded-md bg-blue-500 hover:bg-blue-700 text-white w-full h-auto p-4">
              {t("xarid_qilish")}
            </button>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Xarid;