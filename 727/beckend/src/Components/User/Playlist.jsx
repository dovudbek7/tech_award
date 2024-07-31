import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "./Navbar";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";

function Playlist() {
  return (
    <div>
      <Container className="min-h-[55vh] flex flex-col">
        <Navbar />

        <div className="flex">
          <div className="flex flex-wrap justify-start content-around gap-4">
            <div>
              <div className="flex flex-col justify-between border-2 shadow-2xl rounded-md drop-shadow-2xl  h-full sm:w-98 m-4 p-4 relative">
                <div className="relative">
                  <img
                    className="w-[250px] h-[300px] object-cover rounded-md mb-4"
                    src="https://munir-admin.xn--h28h.uz/media/2023/03/09/common/baseimage/Compressed_1-2023-03-09_084924-2023-03-09_085920.png"
                    alt="bomdodoqidingizmi"
                  />
                  <OndemandVideoIcon
                    className="absolute bottom-2 right-0 m-2"
                    style={{ color: "black", fontSize: "2rem" }}
                  />
                </div>
                <div className="flex flex-col mt-[-22px]">
                  <div className="book-name text-md font-bold text-black">
                    <p>Saodat asri qissalari</p>
                  </div>
                  <div className="text-slate-400">
                    <p className="text-slate-400 py-[2px]">Video kitob</p>
                    <p className="text-slate-400 py-[2px]">O'zbek tilida </p>
                    <p className="flex justify-between text-slate-400 py-[2px]">
                      Video davomiyligi:
                      <span className="text-black">
                        19:28:51
                      </span>
                    </p>
                  </div>
                </div>
                <Link
                  to="https://www.youtube.com/watch?v=qLhg5VykJQ8"
                  target="_blank"
                >
                  <button className="w-full text-md rounded-md mt-2 p-2 bg-green-500 text-black">
                    Bepul ko'rish
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-start content-around gap-4">
            <div>
              <div className="flex flex-col justify-between border-2 shadow-2xl rounded-md drop-shadow-2xl  h-full w-auto m-4 p-4 relative">
                <div className="relative">
                  <img
                    className="w-[250px] h-[300px] object-cover rounded-md mb-4"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiRPA-Fhl6NvwxUBu_vTSVfq9sZJcs5Odl0g&s"
                    alt="bomdodoqidingizmi"
                  />
                  <OndemandVideoIcon
                    className="absolute bottom-2 right-0 m-2"
                    style={{ color: "black", fontSize: "2rem" }}
                  />
                </div>
                <div className="flex flex-col mt-[-22px]">
                  <div className="book-name text-md font-bold text-black">
                    <p>Bugun_bomdod_o‘qidingizmi?!</p>
                  </div>
                  <div className="text-slate-400">
                    <p className="text-slate-400 py-[2px]">Video kitob</p>
                    <p className="text-slate-400 py-[2px]">O'zbek tilida </p>
                    <p className="flex justify-between text-slate-400 py-[2px]">
                      Video_davomiyligi:
                      <span className="text-black">
                        3:12:26
                      </span>
                    </p>
                  </div>
                </div>
                <Link
                  to="https://www.youtube.com/watch?v=OnAXjOHuPLs&t=23s"
                  target="_blank"
                >
                  <button className="w-full text-md rounded-md mt-2 p-2 bg-green-500 text-black">
                    Bepul ko'rish
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-start content-around gap-4">
            <div>
              <div className="flex flex-col justify-between border-2 shadow-2xl rounded-md drop-shadow-2xl  h-full w-auto m-4 p-4 relative">
                <div className="relative">
                  <img
                    className="w-[250px] h-[300px] object-cover rounded-md mb-4"
                    src="https://images.uzum.uz/cjq3p0cjvf2hdh3egaa0/original.jpg"
                    alt="bomdodoqidingizmi"
                  />
                  <OndemandVideoIcon
                    className="absolute bottom-2 right-0 m-2"
                    style={{ color: "black", fontSize: "2rem" }}
                  />
                </div>
                <div className="flex flex-col mt-[-22px]">
                  <div className="book-name text-md font-bold text-black">
                    <p>Men</p>
                  </div>
                  <div className="text-slate-400">
                    <p className="text-slate-400 py-[2px]">Video kitob</p>
                    <p className="text-slate-400 py-[2px]">O'zbek tilida </p>
                    <p className="flex justify-between text-slate-400 py-[2px]">
                      Video_davomiyligi:
                      <span className="text-black">
                        8:22:41
                      </span>{" "}
                    </p>
                  </div>
                </div>
                <Link
                  to="https://www.youtube.com/watch?v=IQfNJp5jx0k&t=1015s"
                  target="_blank"
                >
                  <button className="w-full text-md rounded-md mt-2 p-2 bg-green-500 text-black">
                    Bepul ko'rish
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-start content-around gap-4">
            <div>
              <div className="flex flex-col justify-between border-2 shadow-2xl rounded-md drop-shadow-2xl  h-full w-auto m-4 p-4 relative">
                <div className="relative">
                  <img
                    className="w-[250px] h-[300px] object-cover rounded-md mb-4"
                    src="https://kitobxon.com/img_knigi/6749.jpg"
                    alt="bomdodoqidingizmi"
                  />
                  <OndemandVideoIcon
                    className="absolute bottom-2 right-0 m-2"
                    style={{ color: "black", fontSize: "2rem" }}
                  />
                </div>
                <div className="flex flex-col mt-[-22px]">
                  <div className="book-name text-md font-bold text-black">
                    <p>Izlash</p>
                  </div>
                  <div className="text-slate-400">
                    <p className="text-slate-400 py-[2px]">Video kitob</p>
                    <p className="text-slate-400 py-[2px]">O'zbek tilida </p>
                    <p className="flex justify-between text-slate-400 py-[2px]">
                      Video_davomiyligi:
                      <span className="text-black">
                        3:42:51
                      </span>
                    </p>
                  </div>
                </div>
                <Link
                  to="https://www.youtube.com/watch?v=Pv37LfzErkY"
                  target="_blank"
                >
                  <button className="w-full text-md rounded-md mt-2 p-2 bg-green-500 text-black">
                    Bepul ko'rish
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Playlist;
