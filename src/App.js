import "./Section.css";
import "./App.css";

import Header from "./Componet/Header";
import Swiper from "./Componet/Swiper";
import ProductAPI from "./Componet/ProductAPI";
import SmartWatches from "./Componet/SmartWatches";
import Yearlysale from "./Componet/YearlySale";
import Padding from "./Componet/Padding";
import Position from "./Componet/PostionRelative";
import Instagram from "./Componet/Instagram";
import Footer from "./Componet/Footer";
import Div from "./Componet/Div";
import { CartProvider } from "./Componet/CartContext";
import Billboard from "./Componet/Billboard";
import CheckOut from "./Componet/CheckOut";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <CartProvider>
      <Header />
      <Routes>
        {/* Main Homepage Route */}
        <Route
          path="/"
          element={
            <>
              <Billboard />
              <Swiper />
              <ProductAPI />
              <SmartWatches />
              <Yearlysale />
              <Padding />
              <Position />
              <Instagram />
              <Footer />
              <Div />
            </>
          }
        />
        {/* Checkout Page Route */}
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
   