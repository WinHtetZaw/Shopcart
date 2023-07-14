import { Toaster } from "react-hot-toast";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import AllProducts from "./pages/AllProducts";
import ProductLayout from "./layouts/ProductLayout";
import ProductDetail from "./pages/ProductDetail";
import FilterCategory from "./pages/FilterCategory";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import CartLayout from "./layouts/CartLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<NotFound />}>
      <Route index element={<Dashboard />} />
      <Route path="products" element={<ProductLayout />}>
        <Route index element={<AllProducts />} />
        <Route path="category/:name" element={<FilterCategory />} />
        <Route path="detail/:id" element={<ProductDetail />} />
      </Route>
      {/* <Route path="checkout" element={<Checkout />} /> */}
      <Route path="cart" element={<CartLayout />} >
        <Route index element={<Cart/>}/>
        <Route path="checkout" element={<Checkout/>}/>
      </Route>
    </Route>
  )
);

const App = () => {
  return (
    <>
      <div>
        <Toaster position="top-right" />
      </div>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
