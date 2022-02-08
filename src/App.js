import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AddProduct from "./Pages/AddProduct";
import SingleProduct from "./Pages/SingleProduct";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/:brand" element={<Home />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/add" element={<AddProduct />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
