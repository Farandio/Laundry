import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Login from './Login';
import Home from './Home';
import ProductList from './ProductList';
import History from './History';
import Admin from './Admin';
import User from './User';

const Main = () => (
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/laundry" element={<ProductList />} />
      <Route path="/history" element={<History />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/user" element={<User />} />
      <Route path="/login" element={<Login />} />
  </Routes>
)

export default Main