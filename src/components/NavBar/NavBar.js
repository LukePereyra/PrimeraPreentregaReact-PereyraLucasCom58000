import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import OsitoOG from "../CartWidget/assets/OsitoOG.png";

const Navbar = () => {
    return (
        <nav className="bg-green-200 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-2xl font-bold">
                    <img src={OsitoOG} className="w-12 h-12" alt="imagenOso" />
                </Link>

                <div className="space-x-4">
                    <NavLink to={`/categoria/Platos`} activeClassName="ActiveOption" className="Option">Platos</NavLink>
                    <NavLink to={`/categoria/Para hacer`} activeClassName="ActiveOption" className="Option">Para hacer</NavLink>
                    <NavLink to={`/categoria/Postre`} activeClassName="ActiveOption" className="Option">Postres</NavLink>
                </div>

                <div className="flex items-center space-x-4">
                    <CartWidget />
                    <Link to="/signup" className="text-white hover:text-green-500">
                        Sign up
                    </Link>
                    <Link to="/login" className="text-white hover:text-green-500">
                        Log in
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

