import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header"; // Assuming you have a Header component
import Footer from "components/Footer";


const MainLayout = () => {
  return (
    <div>
      <Header />
      
        <Outlet />
      
      <Footer/>
    </div>
  );
};

export default MainLayout;
