import Login from "../Pages/Login/Login";
// import Dashboard from "../Pages/Dashboard";
import PageNotFound from "../Pages/NotFound/NotFound";
import Sneakers from "../Pages/Sneakers";
// import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import SingleProduct from "../Pages/SingleProduct";

const routes = [
  {
    path: "/",
    element: <Home />,
    isPrivate: false,
  },
  {
    path: "/:brand",
    element: <Sneakers />,
    isPrivate: false,
  },
  {
    path: "/product/:id",
    element: <SingleProduct />,
    isPrivate: false,
  },
  {
    path: "/login",
    element: <Login />,
    isPrivate: false,
  },
  // {
  //   path: "/cart",
  //   element: <Cart />,
  //   isPrivate: true, //Solo podemos acceder si hemos hecho el login
  // },
  {
    path: "/*",
    element: <PageNotFound />,
    isPrivate: true,
  },
];

export default routes;
