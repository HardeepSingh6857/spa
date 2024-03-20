import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Root from "./pages/Root";

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
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Products /> },
    ],
  },
]);

// const router = createBrowserRouter(routeDefinitions);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;
