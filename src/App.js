import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PostsList from "./components/PostsList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviePage from "./pages/MoviesPage";
import Detail from "./pages/Detail";
import FavoritesPage from "./pages/FavoritePage";
import RegistrationPage from "./pages/RegistrationPage";
import Login from "./pages/Login";
import Users from "./pages/Users";
import TicketPage from "./components/TicketPage";
import RestauranPage from "./pages/RestauranPage";
import BookingPage from "./pages/BookingPage";
import { useSelector } from "react-redux";
import ProductsPage from "./pages/ProductsPage";


function App() {
  const theme = useSelector((state)=>state.theme.mode)
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/movies/:id" element={<Detail />} />
        <Route
          path="/"
          element={
            <div className={theme== "dark" ? "dark-mode": "light-mode"}>
              <HomePage />
              <PostsList />
            </div>
          }
        />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/tickets" element={<TicketPage />} />
         <Route path="/menu" element={<RestauranPage />} />
         <Route path="/booking" element={<BookingPage />} />
         <Route path="/products" element={<ProductsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
