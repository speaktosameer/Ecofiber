import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home  from './Home';
import Contact from './Contact'
import About from './About'
import Product from './Products'
import SingleProduct from './SingleProduct'
import Cart from './Cart'
import ErrorPage from './ErrorPage'
import { GlobalStyle } from './GlobalStyle'
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";


const App = () => {
  const theme ={
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29, 29, 29, .8)",
      white: "#fff",
      black: "#212529",
      helper: "#19B157",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(25 177 87)",
      border: "rgba(25, 177, 87, 0.5)",
      hr: "#ffffff",
  
    },
    media:{
      mobile: "768px",
      tab: "998px",
    },
  };
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/singleproduct/:id" element={<SingleProduct/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </Router>
    </ThemeProvider>  
  )
};

export default App;
