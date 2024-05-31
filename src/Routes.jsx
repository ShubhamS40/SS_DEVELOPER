import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Homepage from "pages/Homepage";
import Login from "pages/Login";
import Register from "pages/Register";
import Profile from "pages/Profile/Profile";
import Contact from "pages/Contact/Contact";
import About from "pages/About/About";
import Wheather from "pages/Wheather/Wheather";


const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <Profile />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "/news",
      element: <Homepage />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/about",
      element: <About />,
    }, 
    {
      path: "/weather",
      element: <Wheather/>,
    }
  ]);

  return element;
};

export default ProjectRoutes;
