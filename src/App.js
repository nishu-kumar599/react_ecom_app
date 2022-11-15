import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Component/Dashboard/Dashboard";
import ProductDetail from "./Component/Product/ProductDetail";
import Header from "./Component/Header/Header";
import AddCart from "./Component/Context/AddCart";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/:id" element={<Dashboard />} />
        <Route path="/Product/:id" element={<ProductDetail />} />
        <Route path="/Product/AddCart" element={<AddCart />} />
      </Routes>
    </>
  );
}

export default App;
