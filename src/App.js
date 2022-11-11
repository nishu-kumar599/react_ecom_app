import "./App.css";
import "./Component/SignUp/Signup.css";
import "./Component/Pages/LoginPage.css";
import "./Component/Login/Login.css";
import "./Component/Product/Product.css";
import "./Component/Dashboard/Dashboard.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Component/Pages/LoginPage";
import Dashboard from "./Component/Dashboard/Dashboard";
import ProductDetail from "./Component/Product/ProductDetail";
import Product from "./Component/Product/Product";

function App() {
  return (
    // <Routes>
    // <Route path='/' element={<LoginPage/>}/>
    // <Route path='/' element={<Dashboard/>}/>
    // </Routes>
    // <Dashboard />
    <Routes>
      <Route path="/:id" element={<Dashboard />} />
      <Route path="/Product/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
