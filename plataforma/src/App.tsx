import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Dashboard } from "./pages/dashbord";
import { New } from "./pages/dashbord/new";
import { CarDetail } from "./pages/car";
import { Layout } from "./components/layout";

const router = createBrowserRouter ([
  {
    element: <Layout/>,
    children:[
    {
      path:"/",
      element: <Home/>
    },
    {
      path: "/car/:id",
      element: <CarDetail/>
    },
    {
      path: "/dashbord/new",
      element: <New/>
    },
    {
      path: "/dashboard",
      element: <Dashboard/>
    }
  ]
  },

  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "register",
    element: <Register/>
  },
  
])

export {router} ;