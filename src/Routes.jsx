import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Newspage from "pages/Newspage";
import Login from "pages/Login";
import Register from "pages/Register";
import Profile from "pages/Profile/Profile";
import Contact from "pages/Contact/Contact";
import About from "pages/About/About";
import Wheather from "pages/Wheather/Wheather";
import App from "App";
import MainLayout from "Maincomponent";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Profile /> },
        { path: "", element: <Home /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "news", element: <Newspage /> },
        { path: "contact", element: <Contact /> },
        { path: "about", element: <About /> },
        // { path: "weather", element: <Weather /> }
      ],
    },
  ]);

  return element;
};

export default ProjectRoutes;