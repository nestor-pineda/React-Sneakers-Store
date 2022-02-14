import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sneakers from "./Pages/Sneakers";
import Cart from "./Pages/Cart";
import SingleProduct from "./Pages/SingleProduct";
import Home from "./Pages/Home";
import Layout from "./components/Layout/Layout";
import { CartProvider } from "./contexts/CartContext";
import Theme from "./Themes/Theme";

const App = () => {
  return (
    <Router>
      <Theme>
        <CartProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:brand" element={<Sneakers />} />
              <Route path="/product/:id" element={<SingleProduct />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Layout>
        </CartProvider>
      </Theme>
    </Router>
  );
};

export default App;
