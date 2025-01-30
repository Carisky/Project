import logo from './logo.svg';
import './App.scss';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import MainPage from './pages/MainPage';
import CatalogWithFilters from './pages/CatalogWithFilters';
import UserPage from './pages/UserPage';
import ProductPage from './pages/ProductPage';
import SellerPage from './pages/SellerPage';

function App() {

  axios.get('http://localhost:5000/api/')
  .then(response => console.log(response.data))
  .catch(error => console.log(error));

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/catalog" element={<CatalogWithFilters />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/seller" element={<SellerPage />} />
      </Routes>
    </Router>
  );
}

export default App;

