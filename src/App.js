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
import AdminAddProduct from "./pages/AdminAddProduct";
import AdminEditProduct from "./pages/AdminEditProduct";
import AddMasterProduct from "./pages/addMasterProduct";
import AddMasterBlog from "./pages/addMasterBlog";
import AddMasterCity from "./pages/addMasterCity";
import AddMasterProvince from "./pages/addMasterProvince";
import EditMasterProduct from "./pages/editMasterProduct";
import EditMasterBlog from "./pages/editMasterBlog";
import EditMasterCity from "./pages/editMasterCity";
import EditMasterProvince from "./pages/editMasterProvince";
import AdminEditProfile from "./pages/AdminEditProfile";
import AdminAddNews from "./pages/AdminAddNews";
import Supplier from "./pages/Supplier";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produk" element={<ProductPage />} />
      <Route path="/detail-produk" element={<DetailProduct />} />
      <Route path="/mitra" element={<MitraPage />} />
      <Route path="/blog" element={<NewsPage />} />
      <Route path="/detail-blog" element={<DetailNews />} />
      <Route path="/tentang" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/admin-produk" element={<AdminProduct />} />
      <Route path="/admin-tambah-produk" element={<AdminAddProduct />} />
      <Route path="/admin-detail-produk" element={<AdminDetailProduct />} />
      <Route path="/admin-edit-produk" element={<AdminEditProduct />} />
      <Route path="/admin-blog" element={<AdminNews />} />
      <Route path="/admin-tambah-blog" element={<AdminAddNews />} />
      <Route path="/admin-detail-blog" element={<AdminDetailNews />} />
      <Route path="/admin-edit-blog" element={<AdminEditNews />} />
      <Route path="/master-produk" element={<MasterProduct />} />
      {/* <Route path="/master-blog" element={<MasterBlog />} /> */}
      <Route path="/master-kota" element={<MasterCity />} />
      <Route path="/master-provinsi" element={<MasterProvince />} />
      <Route path="/master-tambah-produk" element={<AddMasterProduct />} />
      {/* <Route path="/master-tambah-blog" element={<AddMasterBlog />} /> */}
      <Route path="/master-tambah-kota" element={<AddMasterCity />} />
      <Route path="/master-tambah-provinsi" element={<AddMasterProvince />} />
      <Route path="/master-edit-produk" element={<EditMasterProduct />} />
      {/* <Route path="/master-edit-blog" element={<EditMasterBlog />} /> */}
      <Route path="/master-edit-kota" element={<EditMasterCity />} />
      <Route path="/master-edit-provinsi" element={<EditMasterProvince />} />
      <Route path="/admin-edit-profil" element={<AdminEditProfile />} />
      <Route path="/admin-supplier" element={<Supplier />} />
    </Routes>
  );
}
