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
import AdminEditNews from "./pages/AdminEditNews";
import AddMasterProduct from "./pages/addMasterProduct";
import AddMasterBlog from "./pages/addMasterBlog"
import AddMasterCity from "./pages/addMasterCity";
import AddMasterProvince from "./pages/addMasterProvince"
import EditMasterProduct from "./pages/editMasterProduct";
import EditMasterBlog from "./pages/editMasterBlog"
import EditMasterCity from "./pages/editMasterCity";
import EditMasterProvince from "./pages/editMasterProvince"
import AdminEditProfile from "./pages/AdminEditProfile"
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
      <Route path="/adminproduk" element={<AdminProduct />} />
      <Route path="/admindetailproduk" element={<AdminDetailProduct />} />
      <Route path="/detailproduk" element={<DetailProduct />} />
      <Route path="/adminnews" element={<AdminNews />} />
      <Route path="/admindetailnews" element={<AdminDetailNews />} />
      <Route path="/admin-edit-news" element={<AdminEditNews />} />
      <Route path="/master-produk" element={<MasterProduct />} />
      <Route path="/master-blog" element={<MasterBlog />} />
      <Route path="/master-city" element={<MasterCity />} />
      <Route path="/master-province" element={<MasterProvince />} />
      <Route path="/addmaster-produk" element={<AddMasterProduct />} />
      <Route path="/addmaster-blog" element={<AddMasterBlog />} />
      <Route path="/addmaster-city" element={<AddMasterCity />} />
      <Route path="/addmaster-province" element={<AddMasterProvince />} />
      <Route path="/editmaster-produk" element={<EditMasterProduct />} />
      <Route path="/editmaster-blog" element={<EditMasterBlog />} />
      <Route path="/editmaster-city" element={<EditMasterCity />} />
      <Route path="/editmaster-province" element={<EditMasterProvince />} />
      <Route path="/admineditprofile" element={<AdminEditProfile />} />
    </Routes>
  );
}
