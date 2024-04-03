import { Routes, Route } from "react-router-dom";
import { memo } from "react";
import Error from "../views/Error";
import Index from "../views/Index";
import Fashion from "../views/Fashion";
import Accessory from "../views/Accessry";
import Digital from "../views/Digital";
import Product from "../views/Product";
import CartView from "../components/carts/CartView";

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/fashion" element={<Fashion />} />
      <Route path="/accessory" element={<Accessory />} />
      <Route path="/digital" element={<Digital />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<CartView />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default memo(Router);
