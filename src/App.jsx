import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/Tentang";
import Layanan from "./Pages/Layanan";
import Masuk from "./Pages/Masuk";
import Daftar from "./Pages/Daftar";
import "bootstrap/dist/css/bootstrap.min.css";
import Edukasi from "./Pages/Edukasi";
import Limbah from "./Pages/Limbah";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daftar" element={<Daftar />} />
        <Route path="/masuk" element={<Masuk />} />
        <Route path="/tentang" element={<About />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/edukasi" element={<Edukasi />} />
        <Route path="/manajemen-limbah" element={<Limbah />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
