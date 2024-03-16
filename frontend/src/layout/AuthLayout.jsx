// import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <>
            <h1 className="text-4xl text-extrabold text-indigo-500">Desde Auth Layout</h1>
            <Outlet />
        </>
    )
};

export default AuthLayout;