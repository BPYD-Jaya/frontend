import "./App.css";
import Home from "./pages/Home";
import MitraPage from "./pages/MitraPage";
import { Route, Routes } from "react-router-dom";
import NewsPage from "./pages/NewsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DetailNews from "./pages/detailNews";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import DashboardPage from "./pages/Dashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/mitra" element={<MitraPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/detailnews" element={<DetailNews />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/produk" element={<ProductPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}
