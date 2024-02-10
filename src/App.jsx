// A book Center application 

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ShoppingCard from "./components/ShoppingCard";
import BookList from "./components/BookList";
import NavBar from "./components/NavBar";
import CartItems from "./components/CartItems";
import UserAccount from "./components/UserAccount";
import LoginComponent from "./authComponent/LoginComponent";
import RegisterationComponent from "./authComponent/RegisterationComponent";
import Signup from "./authComponent/Signup";
import AuthProvider, { useAuth } from "./security/AuthContext";
import UploadBook from "./components/UploadBook";
import "./App.css";

function AuthenticatedRoute({ children }) {
  const authContext = useAuth();
  if (authContext.isAuthenticated) return children;
  return <Navigate to="/auth/login" />;
}

const App = () => {
  return (
    <AuthProvider>
      <Router>
        {false ? <NavBar /> : null}
        <Routes>
          <Route path="/book/upload" element={<AuthenticatedRoute><UploadBook /></AuthenticatedRoute>} />
          <Route path="/users/signup" element={<Signup />} />
          <Route path="/auth/login" element={<LoginComponent />} />
          <Route path="/users/create" element={<RegisterationComponent />} />
          <Route path="/" element={<AuthenticatedRoute><BookList /></AuthenticatedRoute>} />
          <Route path="/user" element={<AuthenticatedRoute><UserAccount /></AuthenticatedRoute>} />
          <Route path="/books" element={<AuthenticatedRoute><BookList /></AuthenticatedRoute>} />
          <Route path="/books/:id" element={<AuthenticatedRoute><ShoppingCard /></AuthenticatedRoute>} />
          <Route path="/books/cart" element={<AuthenticatedRoute><CartItems /></AuthenticatedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
