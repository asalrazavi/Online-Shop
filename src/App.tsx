import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      {/* <Route path="products/:id" element={<Product />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
