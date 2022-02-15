import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Sneakers from "./Pages/Sneakers";
// import Cart from "./Pages/Cart";
// import SingleProduct from "./Pages/SingleProduct";
// import Home from "./Pages/Home";
import Layout from "./components/Layout/Layout";
import { CartProvider } from "./contexts/CartContext";
import Theme from "./Themes/Theme";
import routes from "./Config/routes";
import { AuthProvider } from "./contexts";
import AppRoutes from "./components/AppRoutes";

const App = () => {
  return (
    <Router>
      <Theme>
        <AuthProvider>
          <CartProvider>
            <Layout>
              <Routes>
                {routes.map((route) => (
                  <Route key={route.path} path={route.path} element={route.element} />
                ))}
                <Route element={<AppRoutes />} path="/cart" />
              </Routes>
            </Layout>
          </CartProvider>
        </AuthProvider>
      </Theme>
    </Router>
  );
};

export default App;
