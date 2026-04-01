import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import các trang
import Home from './pages/Home';
import PriceList from './pages/PriceList';
import Hairstyles from './pages/Hairstyles';
import Contact from './pages/Contact';
import Album from './pages/Album';

// Import các thành phần dùng chung cho tất cả các trang
import TopBar from './components/common/TopBar';
import Navbar from './components/common/Navbar/Navbar';
import Footer from './components/common/Footer/Footer';
import Sakura from './components/common/Sakura/Sakura';

function App() {
  return (
    <Router>
      <Sakura />
      <TopBar />
      <Navbar /> {/* Navbar luôn hiện ở mọi trang */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bang-gia" element={<PriceList />} />
        <Route path="/mau-toc" element={<Hairstyles />} />
        <Route path="/lien-he" element={<Contact />} />
        <Route path="/album" element={<Album />} />
      </Routes>

      <Footer /> {/* Footer luôn hiện ở mọi trang */}
    </Router>
  );
}

export default App;