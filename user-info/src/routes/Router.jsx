
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "../layouts/Root";
import HomeRoot from "../layouts/HomeRoot";
import Home from "../pages/Home";
import HomeRecap from "../pages/HomeRecap";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        }
    ]
    
  },
]);

export default Router;