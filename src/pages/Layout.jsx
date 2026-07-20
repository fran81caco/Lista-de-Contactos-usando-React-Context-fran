import React from "react";
import { Outlet } from "react-router-dom/dist"

const Layout = () => {
    return (
        <div className="container">
            <Outlet />
        </div>
    );
};

export default Layout;