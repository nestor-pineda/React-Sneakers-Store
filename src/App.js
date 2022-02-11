import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sneakers from "./Pages/Sneakers";
import Cart from "./Pages/Cart";
import SingleProduct from "./Pages/SingleProduct";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/:brand" element={<Sneakers />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
