import './App.css';
import Home from './pages/Home';
import MitraPage from './pages/MitraPage';
import {Route, Routes} from 'react-router-dom'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/mitra" element={<MitraPage/>}/>
    </Routes>
  );
}