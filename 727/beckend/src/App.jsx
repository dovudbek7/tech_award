// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Components/Main";
import Sovgalar from "./Components/User/Sovgalar";
import Savatcha from "./Components/User/Savatcha";
import Sevimlilar from "./Components/User/Sevimlilar";
import BookAbout from "./Components/User/BookAbout";
import Xarid from "./Components/User/Xarid";
import Bolalar from "./Components/User/Bolalar";
import { CartProvider } from "./CartContext";
import { UserProvider } from "./Components/User/UserContext";
import Diniy from "./Components/User/Diniy";
import Toplamlar from "./Components/User/Toplamlar";
import Mualliflar from "./Components/User/Mualliflar";
import Chegirmalar from "./Components/User/Chegirmalar";
import { FavoriteProvider } from "./FavoriteContext";
import AdminPanel from "./Components/Admin/AdminPanel";
import Accound from "./Components/User/Accound";
import Playlist from "./Components/User/Playlist";
import Playlist1 from "./Components/User/Playlist1";
import NotFound from "./Components/User/NotFound";
import LeftFilter from "./Components/User/LeftFilter";
import Ekskursiya from "./Components/User/Ekskursiya";


export default function App() {
  return (
    <UserProvider>
      <CartProvider>
        <FavoriteProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/diniy" element={<Diniy />} />
              <Route path="/sovgalar" element={<Sovgalar />} />
              <Route path="/xarid" element={<Xarid />} />
              <Route path="/savatcha" element={<Savatcha />} />
              <Route path="/sevimlilar" element={<Sevimlilar />} />
              <Route path="/Bolalar" element={<Bolalar />} />
              <Route path="/bookabout/:id" element={<BookAbout />} />
              <Route path="/toplamlar" element={<Toplamlar />} />
              <Route path="/mualliflar" element={<Mualliflar />} />
              <Route path="/chegirmalar" element={<Chegirmalar />} />
              <Route path="/playlist" element={<Playlist />} />
              <Route path="/playlist1" element={<Playlist1 />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/accound" element={<Accound />} />
              <Route path="/ekskursiya" element={<Ekskursiya />} />
              <Route path="/leftfilter/:categoryName" element={<LeftFilter />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </FavoriteProvider>
      </CartProvider>
    </UserProvider>
  );
}
