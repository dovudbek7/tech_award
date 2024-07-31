import React, { useState } from "react";
import { Container } from "@mui/system";
import Navbar from "./Navbar";
import Footer from "../Footer";
import { useTranslation } from "react-i18next";
import artelzavot from "../../assets/artel-zavot.png";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";

const ProSpan = styled("span")({
  display: "inline-block",
  height: "1em",
  width: "1em",
  verticalAlign: "middle",
  marginLeft: "0.3em",
  marginBottom: "0.08em",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundImage: "url(https://mui.com/static/x/pro.svg)",
});

function Label({ componentName, valueType, isProOnly }) {
  const content = (
    <span>
      <strong>{componentName}</strong> for {valueType} editing
    </span>
  );

  if (isProOnly) {
    return (
      <Stack direction="row" spacing={0.5} component="span">
        <Tooltip title="Included on Pro package">
          <a
            href="https://mui.com/x/introduction/licensing/#pro-plan"
            aria-label="Included on Pro package"
          >
            <ProSpan />
          </a>
        </Tooltip>
        {content}
      </Stack>
    );
  }

  return content;
}

function Ekskursiya() {
  const { t, i18n } = useTranslation();
  const [selectedDate, setSelectedDate] = useState(null);

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div>
      <Container className="min-h-[55vh] pb-24 flex flex-col justify-between">
        <Navbar />
        <h2 className="ml-4 font-serif text-lg sm:text-md">
          {t("ekskursiya")}
        </h2>
        <div className="mt-24 flex flex-col">
          <div className="flex">
            <img
              className="w-96 h-78 border rounded-md"
              src={artelzavot}
              alt="logo"
            />
            <div className="flex flex-col">
              <p className="ml-4 font-bold text-2xl sm:text-md">ARTEL</p>
              <p className="ml-4 font-serif text-lg sm:text-md">
                Iste’molchi – bizning mo`ljalimiz. <br /> Biz iste’molchilarni
                mamnun qilish uchun <br /> barcha harakatlarni amalga oshiramiz.{" "}
                <br />
                Iste’molchi manfaatlarining himoyachisi – doimo haq.
              </p>

              <p className="ml-4 font-serif text-lg sm:text-md">
                Korxonaga tashrif kuni:
              </p>
              <div className="ml-4 font-serif text-lg sm:text-md">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DemoItem>
                      <DatePicker
                        value={selectedDate}
                        onChange={(newValue) => setSelectedDate(newValue)}
                        renderInput={(params) => <TextField {...params} />}
                        className=" w-[430px]"
                      />
                    </DemoItem>
                  </DemoContainer>
                </LocalizationProvider>

                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Bir kun oldin SMS yuborish"
                  />
                </FormGroup>
              </div>

              <button className="item-center bg-sky-400 hover:bg-sky-700 border rounded-md ml-4 text-white py-2 ">
                Tasdiqlash
              </button>
            </div>
            <div className="flex flex-col ml-8">
              <p className="ml-4 font-bold text-xl sm:text-md">Manzil:</p>{" "}
              <br />
              <p className="ml-4 font-serif text-lg sm:text-md">
                Zangiota Tumani, Erkin posti,
                <br /> Zangiota MFY, 40 uy, 50 honadon
              </p>
              <br />
              <p className="ml-4 font-bold text-xl sm:text-md">
                Kontaktlar:
              </p>{" "}
              <br />
              <p className="ml-4 font-serif text-lg sm:text-md">
                +998 (99) 351 01 01 <br /> +998 (99) 351 01 01 <br />
                Email: info@artelelectronics.com
              </p>
            </div>
          </div>
        </div>


        <div className="mt-24 flex flex-col">
          <div className="flex">
            <img
              className="w-96 h-78 border rounded-md"
              src={artelzavot}
              alt="logo"
            />
            <div className="flex flex-col">
              <p className="ml-4 font-bold text-2xl sm:text-md">ARTEL</p>
              <p className="ml-4 font-serif text-lg sm:text-md">
                Iste’molchi – bizning mo`ljalimiz. <br /> Biz iste’molchilarni
                mamnun qilish uchun <br /> barcha harakatlarni amalga oshiramiz.{" "}
                <br />
                Iste’molchi manfaatlarining himoyachisi – doimo haq.
              </p>

              <p className="ml-4 font-serif text-lg sm:text-md">
                Korxonaga tashrif kuni:
              </p>
              <div className="ml-4 font-serif text-lg sm:text-md">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DemoItem>
                      <DatePicker
                        value={selectedDate}
                        onChange={(newValue) => setSelectedDate(newValue)}
                        renderInput={(params) => <TextField {...params} />}
                        className=" w-[430px]"
                      />
                    </DemoItem>
                  </DemoContainer>
                </LocalizationProvider>

                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Bir kun oldin SMS yuborish"
                  />
                </FormGroup>
              </div>

              <button className="item-center bg-sky-400 hover:bg-sky-700 border rounded-md ml-4 text-white py-2 ">
                Tasdiqlash
              </button>
            </div>
            <div className="flex flex-col ml-8">
              <p className="ml-4 font-bold text-xl sm:text-md">Manzil:</p>{" "}
              <br />
              <p className="ml-4 font-serif text-lg sm:text-md">
                Zangiota Tumani, Erkin posti,
                <br /> Zangiota MFY, 40 uy, 50 honadon
              </p>
              <br />
              <p className="ml-4 font-bold text-xl sm:text-md">
                Kontaktlar:
              </p>{" "}
              <br />
              <p className="ml-4 font-serif text-lg sm:text-md">
                +998 (99) 351 01 01 <br /> +998 (99) 351 01 01 <br />
                Email: info@artelelectronics.com
              </p>
            </div>
          </div>
        </div>



        <div className="mt-24 flex flex-col">
          <div className="flex">
            <img
              className="w-96 h-78 border rounded-md"
              src={artelzavot}
              alt="logo"
            />
            <div className="flex flex-col">
              <p className="ml-4 font-bold text-2xl sm:text-md">ARTEL</p>
              <p className="ml-4 font-serif text-lg sm:text-md">
                Iste’molchi – bizning mo`ljalimiz. <br /> Biz iste’molchilarni
                mamnun qilish uchun <br /> barcha harakatlarni amalga oshiramiz.{" "}
                <br />
                Iste’molchi manfaatlarining himoyachisi – doimo haq.
              </p>

              <p className="ml-4 font-serif text-lg sm:text-md">
                Korxonaga tashrif kuni:
              </p>
              <div className="ml-4 font-serif text-lg sm:text-md">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DemoItem>
                      <DatePicker
                        value={selectedDate}
                        onChange={(newValue) => setSelectedDate(newValue)}
                        renderInput={(params) => <TextField {...params} />}
                        className="w-[430px]"
                      />
                    </DemoItem>
                  </DemoContainer>
                </LocalizationProvider>

                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Bir kun oldin SMS yuborish"
                  />
                </FormGroup>
              </div>

              <button className="item-center bg-sky-400 hover:bg-sky-700 border rounded-md ml-4 text-white py-2 ">
                Tasdiqlash
              </button>
            </div>
            <div className="flex flex-col ml-8">
              <p className="ml-4 font-bold text-xl sm:text-md">Manzil:</p>{" "}
              <br />
              <p className="ml-4 font-serif text-lg sm:text-md">
                Zangiota Tumani, Erkin posti,
                <br /> Zangiota MFY, 40 uy, 50 honadon
              </p>
              <br />
              <p className="ml-4 font-bold text-xl sm:text-md">
                Kontaktlar:
              </p>{" "}
              <br />
              <p className="ml-4 font-serif text-lg sm:text-md">
                +998 (99) 351 01 01 <br /> +998 (99) 351 01 01 <br />
                Email: info@artelelectronics.com
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Ekskursiya;
