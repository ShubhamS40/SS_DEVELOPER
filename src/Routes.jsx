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
// import Weather from "pages/Weather/Weather";
import MainLayout from "Maincomponent";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";  // Adjust the path as necessary

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <ProtectedRoute><Profile /></ProtectedRoute> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "news", element: <ProtectedRoute><Newspage /></ProtectedRoute> },
        { path: "contact", element: <ProtectedRoute><Contact /></ProtectedRoute> },
        { path: "about", element: <ProtectedRoute><About /></ProtectedRoute> },
        // { path: "weather", element: <ProtectedRoute><Weather /></ProtectedRoute> },
      ],
    },
  ]);

  return element;
};

export default ProjectRoutes;
