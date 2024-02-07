import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Dashboard } from "./pages/dashbord";
import { New } from "./pages/dashbord/new";
import { CarDetail } from "./pages/car";
import { Layout } from "./components/layout";
import { Private } from "./routes/private";

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
      element:<Private><New/></Private> 
    },
    
    {
      path: "/dashboard",
      element:<Private><Dashboard/></Private> 
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