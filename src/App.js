import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {NavBar} from './components';
import {HomePage,ProductsPage,ProductDetailPage} from './pages';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/"  element={<HomePage/>}exact />
        <Route path="/products"  element={<ProductsPage/>} exact/>
        <Route path="/products/:id" element={<ProductDetailPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
