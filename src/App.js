
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  HomePage,
  AboutPage,
  CartPage,
  CheckoutPage,
  ErrorPage,
  PrivateRoute,
  ProductsPage,
  SingleProductPage
} from "./pages"
import { Navbar,Sidebar,Footer } from './components';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/about",
    element: <AboutPage/>,
  },
  {
    path: "/cart",
    element: <CartPage/>,
  },
  {
    path: "/checkout",
    element: <CheckoutPage/>,
  },
  {
    path: "*",
    element: <ErrorPage/>,
  },
  {
    path: "/products/:id",
    element: <SingleProductPage/>,
  },
  {
    path: "/products",
    element: <ProductsPage/>,
  },
]);

function App() {
  return (
    <>
    <Navbar/>
    <Sidebar/>
      <RouterProvider router={router} />
    <Footer/>
    </>
    
  );
}

export default App;
