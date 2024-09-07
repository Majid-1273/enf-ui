import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./routes/Home.jsx";
import Company_Directory from "./routes/Company_Directory.jsx";
import About from "./routes/About.jsx";
import Contact from "./routes/Contact.jsx";
import Cart from "./routes/Cart.jsx";
import Company from "./routes/Company.jsx";
import Companies_By_Product from "./routes/Companies_By_Product.jsx";
import Product_Directory from "./routes/Product_Directory.jsx";
import Product from "./routes/Product.jsx";
import Sellers from "./routes/Sellers.jsx";
import Softwares from "./routes/Softwares.jsx";
import Footer from "./components/Footer.jsx"
import "./index.css"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/company-directory" element={<Company_Directory/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/company" element={<Company/>} />
        <Route path="/companies-by-product" element={<Companies_By_Product/>} />
        <Route path="/product-directory" element={<Product_Directory/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/sellers" element={<Sellers/>} />
        <Route path="/softwares" element={<Softwares/>} />
        {/* Add more routes here */}
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
