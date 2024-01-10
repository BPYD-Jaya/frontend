import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MitraPage from "./pages/MitraPage";
import NewsPage from "./pages/NewsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DetailNews from "./pages/detailNews";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import DashboardPage from "./pages/Dashboard";
import DetailProduct from "./pages/detailProduct";
import AdminNews from "./pages/AdminNews";
import MasterProduct from "./pages/MasterProduct";
import MasterBlog from "./pages/MasterBlog";
import MasterCity from "./pages/MasterCity";
import MasterProvince from "./pages/MasterProvince";
import AdminProduct from "./pages/AdminProduct";
import AdminDetailProduct from "./pages/AdminDetailProduct";
import AdminDetailNews from "./pages/AdminDetailNews";
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
      <Route path="/adminproduct" element={<AdminProduct />} />
      <Route path="/admindetailproduk" element={<AdminDetailProduct />} />
      <Route path="/detailproduk" element={<DetailProduct />} />
      <Route path="/adminnews" element={<AdminNews />} />
      <Route path="/admindetailnews" element={<AdminDetailNews />} />
      <Route path="/master-produk" element={<MasterProduct />} />
      <Route path="/master-blog" element={<MasterBlog />} />
      <Route path="/master-city" element={<MasterCity />} />
      <Route path="/master-province" element={<MasterProvince />} />
    </Routes>
  );
}
