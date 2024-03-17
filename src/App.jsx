import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Phimbo from './Phimbo';
import Phimle from './Phimle';
import Phimmoi from './Phimmoi';
import Header from './components/Header';
import PhimDetail from './PhimDetail';
import "./Style/App.css";
import MovieDetail from './MovieDetail';
import Product from './product';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Phimbo" element={<Phimbo />} />
        <Route path="/Phimle" element={<Phimle />} />
        <Route path="/Phimmoi" element={<Phimmoi />} />
        <Route path="/Phim/:id" element={<PhimDetail />} />
        <Route path="/phim/:slug" element={<MovieDetail />} /> {/* Thêm Route cho MovieDetail */}
        <Route path="/Product" element={<Product />} />
      </Routes>
    </Router>
  );
};

export default App;
