import { Header } from "./Component/component-index";
import { Routes, Route } from "react-router-dom";
import { Product, Wishlist, Cart } from "./Pages/pages-index";
const App = () => {
  return (
    <div className="">
      <Header />

      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
