import { Container } from "@mui/system";
import Footer from "../Footer";
import Navbar from "./Navbar";

function Toplamlar() {
  return (
    <div>
      <Container className="min-h-[55vh] flex flex-col">
        <Navbar />

        <div className="flex">
        <div className="flex flex-wrap justify-start content-around  gap-4">
          <div>
            <div className="flex flex-col justify-between border-2 shadow-2xl rounded-md drop-shadow-2xl w-full h-full sm:w-56 m-4 p-4">
              <img
                className="w-[200px] h-[200px] object-cover rounded-md mb-4"
                src="https://pbs.twimg.com/media/F9rr0XAbQAAyNzM.jpg:large"
                alt="toplamlar"
              />
              <div className="flex flex-col justify-end flex-grow">
                <div className="book-name text-md font-bold text-black ">
                  <p>10 ta kitoblar to'plami</p>
                </div>
                <div className="text-slate-400 py-2">
                    <p>Umimiy to'plam</p>
                  </div>

                <div className="text-2xl text-green-600 py-2">
                  <p>150 000 UZS</p>
                </div>
              </div>
              <button className="w-full text-md rounded-md mt-4 p-2 bg-green-500 text-black">
                Savatchaga
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-start content-around  gap-4">
          <div>
            <div className="flex flex-col justify-between border-2 shadow-2xl rounded-md drop-shadow-2xl w-full h-full sm:w-56 m-4 p-4">
              <img
                className="w-[200px] h-[200px] object-cover rounded-md mb-4"
                src="https://assets.asaxiy.uz/product/items/desktop/5e15c1db9ea13.jpg.webp"
                alt="toplamlar"
              />
              <div className="flex flex-col justify-end flex-grow">
                <div className="book-name text-md font-bold text-black ">
                  <p>25 ta kitoblar to'plami</p>
                </div>
                <div className="text-slate-400 py-2">
                    <p>Chingiz Aytmatov kitoblari</p>
                  </div>
                <div className="text-2xl text-green-600 py-2">
                  <p>399 000 UZS</p>
                </div>
              </div>
              <button className="w-full text-md rounded-md mt-4 p-2 bg-green-500 text-black">
                Savatchaga
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-start content-around  gap-4">
          <div>
            <div className="flex flex-col justify-between border-2 shadow-2xl rounded-md drop-shadow-2xl w-full h-full sm:w-56 m-4 p-4">
              <img
                className="w-[200px] h-[200px] object-cover rounded-md mb-4"
                src="https://kitoblardunyosi.uz/image/cache/catalog/Tohir_Malik/alvido-bolalik-web-200x200w.jpg"
                alt="toplamlar"
              />
              <div className="flex flex-col justify-end flex-grow">
                <div className="book-name text-md font-bold text-black ">
                  <p>50 ta kitoblar to'plami</p>
                </div>
                <div className="text-slate-400 py-2">
                    <p>Tohir Malik Kitoblari</p>
                  </div>
                <div className="text-2xl text-green-600 py-2">
                  <p>750 000 UZS</p>
                </div>
              </div>
              <button className="w-full text-md rounded-md mt-4 p-2 bg-green-500 text-black">
                Savatchaga
              </button>
            </div>
          </div>
        </div>

        </div>

      </Container>
      <Footer />
    </div>
  );
}

export default Toplamlar;
