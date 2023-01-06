import "./App.css";
import { Routes, Route } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Header from "./Pages/Header/Header";
import ProductDetail from "./Pages/SingleProduct/ProductDetail";
import AddToCart from "./Pages/AddToCart/AddToCart";
import SuccessPage from "./Pages/PaymentSuccess/Success";

function App() {
  return (
    <>
      <PayPalScriptProvider
        options={{
          "client-id":
            "ActeApRrl5UG2gTwmZhNODN4hJ8izZCfuQgFKAb8C7phNOvnJTh6KMuwVdfEuLvx3x-N5f0v0ctwsj2W",
        }}
      >
        <Header />
        <Routes>
          <Route path="/:id" element={<Dashboard />} />
          <Route path="/Dashboard/:id" element={<ProductDetail />} />
          <Route path="/Dashboard/AddToCart" element={<AddToCart />} />
          <Route path="/Dashboard/Success" element={<SuccessPage />} />
        </Routes>
      </PayPalScriptProvider>
    </>
  );
}

export default App;
