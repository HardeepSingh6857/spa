import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";

//here we are using react jsx code for routing
const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />}/>
    <Route path="/products" element={<Products />}/>
  </Route>
);


//here we are using objects and array 
const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/products', element: <Products /> },
]);

const App = () => {
  return <RouterProvider router={router}/>;
}

export default App;
