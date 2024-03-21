import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Root from "./pages/Root";
import Error from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetailPage";

//here we are using react jsx code for routing
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />}/>
//     <Route path="/products" element={<Products />}/>
//   </Route>
// );


// here we are using objects and array 
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },  //in place of path: ''
      { path: 'products', element: <Products /> },
      { path: 'products/:productId', element: <ProductDetailPage /> },
    ],
  },
]);

// const router = createBrowserRouter(routeDefinitions);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;
