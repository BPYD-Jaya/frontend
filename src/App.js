import "./App.css";
import Home from "./pages/Home";
import MitraPage from "./pages/MitraPage";
import { Route, Routes } from "react-router-dom";
import NewsPage from "./pages/NewsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/mitra" element={<MitraPage />} />
      <Route path="/news" element={<NewsPage />} />
    </Routes>
  );
}
