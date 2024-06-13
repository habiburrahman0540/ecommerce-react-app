
import {
  BrowserRouter,Routes,Route
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

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Sidebar/>
     <Routes>
        <Route  path= "/" element= {<HomePage/>}/>
        <Route  path= "/about" element= {<AboutPage/>}/>
        <Route  path= "/cart" element= {<CartPage/>}/>
        <Route  path= "/checkout" element= {<CheckoutPage/>}/>
        <Route  path= "*" element= {<ErrorPage/>}/>
        <Route  path= "/products/:id" element= {<SingleProductPage/>}/>
        <Route  path= "/products" element= {<ProductsPage/>}/>
     </Routes>
    <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
