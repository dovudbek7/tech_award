import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "./Navbar";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";

const card = [
  {
    id: 1,
    name_s: "Saodat asri qissalari",
    muallif: 'Ahmat Lutfiy Qozonchi',
    tili: 'O\'zbek tilida',
    video_davomiyligi: "Video davomiyligi:",
    time: "19:28:51",
    bepul_korish: "Bepul ko'rish",
    link: 'https://www.youtube.com/watch?v=qLhg5VykJQ8',
    photo:
      "https://munir-admin.xn--h28h.uz/media/2023/03/09/common/baseimage/Compressed_1-2023-03-09_084924-2023-03-09_085920.png",
  },
  {
    id: 2,
    name_s: "Ey qizim",
    muallif: 'Shayx Ali Tantoviy',
    tili: 'O\'zbek tilida',
    video_davomiyligi: "Video davomiyligi:",
    time: "3:18:26",
    bepul_korish: "Bepul ko'rish",
    link: 'https://www.youtube.com/watch?v=C0fZoUgJoqQ',
    photo:
      "https://kitoblardunyosi.uz/image/cache/catalog/001-Kitoblar/003_boshqalar/001_diniy/2022/ey-qizim-web-500x750.jpg",
  },
  {
    id: 3,
    name_s: "Mehrobdan chayon",
    muallif: 'Abdulla Qodiriy',
    tili: 'O\'zbek tilida',
    video_davomiyligi: "Video davomiyligi:",
    time: '11:07:41',
    bepul_korish: "Bepul ko'rish",
    link: 'https://www.youtube.com/watch?v=mjkPCd99dgI',
    photo:
      "https://kitoblardunyosi.uz/image/cache/catalog/badiiy_adabiyot/mehrobdan-chayon-web-500x750.jpg",
  },
  {
    id: 4,
    name_s: "Jannatga taklifnoma",
    muallif: 'Adam Uzkusa',
    tili: 'O\'zbek tilida',
    video_davomiyligi: "Video_davomiyligi:",
    time: "2:32:51",
    bepul_korish: "Bepul ko'rish",
    link: 'https://www.youtube.com/watch?v=oAMtdUUfdOo',
    photo:
      "https://backend.book.uz/user-api/img/img-6fbb76c35ad15bc250e6240fff37ef9f.jpg",
  },
];
export const Playlist1 = () => {
  return (
    <>
      
        <Container>
          <Navbar />

          <div>
              <div className="flex">
                {card.map((item, index) => (
                  <div className="flex flex-col  border-2 shadow-2xl rounded-md drop-shadow-2xl  h-auto sm:w-98 m-4 p-4 relative">
                    <div className="relative">
                      <img
                        className="w-[250px] h-[300px] object-cover rounded-md mb-2"
                        src={item.photo}
                        alt="bomdodoqidingizmi"
                      />
                      <OndemandVideoIcon
                        className="absolute bottom-0 cursor-pointer right-0 m-2"
                        style={{ color: "black", fontSize: "2rem" }}
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="book-name text-md font-bold text-black">
                        <p>{item.name_s}</p>
                      </div>
                      <div className="text-slate-400">
                        <p className="text-slate-400 py-[2px]"> {item.muallif} </p>
                        <p className="text-slate-400 py-[2px]"> {item.tili} </p>
                        <p className="flex justify-between text-slate-400 py-[2px]">
                            <p>{item.video_davomiyligi}</p>
                            <p className="text-black">{item.time}</p>
                          {/* <span className="border bg-black text-white mt-[-3px] rounded-md ml-4 p-2">
                          </span> */}
                        </p>
                      </div>
                    </div>
                    <Link
                      to={item.link}
                      target="_blank"
                    >
                      <button className="w-full text-md rounded-md mt-2 p-2 bg-green-500 text-black">
                        <p>{item.bepul_korish}</p>
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            
          </div>
        </Container>
        <Footer />
      
    </>
  );
};
export default Playlist1;
