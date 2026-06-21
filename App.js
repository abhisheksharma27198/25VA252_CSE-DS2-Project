import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Cart from "./Cart";
import Orders from "./Orders";
import Login from "./Login";
import About from "./About";

import "./App.css";

function App() {

  // ✅ Cart state added (needed for 12 products + cart)
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>

      <nav className="navbar" style={{
        backgroundColor: "#131921",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        color: "white"
      }}>

        {/* 🔥 Logo */}
        <div className="logo" style={{
          fontSize: "22px",
          fontWeight: "bold",
          color: "#febd69"
        }}>
          🛒 amazon.in
        </div>

        {/* 🔍 Search Bar */}
        <input
          type="text"
          placeholder="Search Amazon.in"
          style={{
            width: "40%",
            padding: "8px",
            borderRadius: "4px",
            border: "none",
            outline: "none"
          }}
        />

        {/* 🔗 Menu */}
        <div className="menu" style={{
          display: "flex",
          gap: "15px",
          alignItems: "center"
        }}>

          <Link className="nav-link" style={navStyle} to="/">
            Home
          </Link>

          <Link className="nav-link" style={navStyle} to="/cart">
            Cart ({cart.length})
          </Link>

          <Link className="nav-link" style={navStyle} to="/orders">
            Orders
          </Link>

          <Link className="nav-link" style={navStyle} to="/login">
            Login
          </Link>

          <Link className="nav-link" style={navStyle} to="/about">
            About
          </Link>

        </div>

      </nav>

      <Routes>

        {/* ✅ Pass cart to Home (12 products add-to-cart works) */}
        <Route 
          path="/" 
          element={<Home cart={cart} setCart={setCart} />} 
        />

        <Route 
          path="/cart" 
          element={<Cart cart={cart} />} 
        />

        <Route path="/orders" element={<Orders />} />

        <Route path="/login" element={<Login />} />

        <Route path="/about" element={<About />} />

      </Routes>

    </BrowserRouter>
  );
}

const navStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
  padding: "5px",
  borderRadius: "4px"
};

export default App;
