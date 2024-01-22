// A book Center applicaton 

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShoppingCard from "./components/ShoppingCard";
import BookList from "./components/BookList";
import NavBar from "./components/NavBar";
import PromoCard from "./components/PromoCard";
const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<ShoppingCard />} />
      </Routes>
    </Router>
  );
};

export default App;
