import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Product from "./pages/product";
import ProductListing from "./pages/product-listing";
import BreadCrumb from "./components/breadcrumb";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <BreadCrumb />
        <hr />
        <Routes>
          <Route path="/" Component={Home} exact />
          <Route path="/product" Component={ProductListing} />
          <Route path="/product/:id" Component={Product} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
