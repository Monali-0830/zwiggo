import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import useOnline from "../utils/useOnline";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const onlineStatus = useOnline();
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md px-4 py-3 md:px-8 md:py-4">
            <div className="flex justify-between items-center">
                {/* Logo & Brand */}
                <div className="flex items-center gap-4">
                    <img src={LOGO_URL} alt="App Logo" className="h-12 w-12 md:h-14 md:w-14 rounded-full object-cover" />
                    <h1 className="text-xl md:text-2xl font-bold text-gray-800 font-sans">Zwiggo</h1>
                </div>

                {/* Cart and Hamburger for Mobile */}
                <div className="flex items-center gap-4 md:hidden">
                    {/* Cart icon always visible */}
                    <Link to="/cart" className="relative" title="Cart">
                        <i className="fa-solid fa-cart-shopping text-2xl text-purple-700"></i>
                        {cartItems.length > 0 && (
                            <span className="absolute -top-2 -right-3 bg-purple-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full shadow-md">
                                {cartItems.length}
                            </span>
                        )}
                    </Link>

                    {/* Hamburger icon */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="focus:outline-none"
                        title="Toggle Menu"
                    >
                        <i className="fa-solid fa-bars text-2xl text-gray-700"></i>
                    </button>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    <ul className="flex items-center gap-6 text-lg font-medium">
                        <li className="text-green-600">
                            Online Status: {onlineStatus ? "🌐" : "❌"}
                        </li>
                        <li><Link to="/" className="hover:text-purple-600 transition">Home</Link></li>
                        <li><Link to="/about" className="hover:text-purple-600 transition">About</Link></li>
                        <li><Link to="/contact" className="hover:text-purple-600 transition">Contact</Link></li>
                        <li>
                            <Link to="/cart" className="relative flex items-center text-purple-700 hover:text-purple-900 transition" title="Cart">
                                <div className="relative">
                                    <i className="fa-solid fa-cart-shopping text-2xl"></i>
                                    {cartItems.length > 0 && (
                                        <span className="absolute -top-2 -right-3 bg-purple-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full shadow-md">
                                            {cartItems.length}
                                        </span>
                                    )}
                                </div>
                            </Link>
                        </li>
                    </ul>

                    {/* Login/Logout Button */}
                    <button
                        onClick={() => setIsLoggedIn(!isLoggedIn)}
                        title={isLoggedIn ? "Logout" : "Login"}
                        className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full text-white shadow-md transition transform hover:scale-110 ${
                            isLoggedIn ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
                        }`}
                    >
                        <i className={`fa-solid ${isLoggedIn ? "fa-right-from-bracket" : "fa-user-plus"} text-lg md:text-xl`} />
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden mt-3 bg-gray-100 p-4 rounded-md shadow">
                    <ul className="flex flex-col gap-4 text-base font-medium">
                        <li className="text-green-600">
                            Online Status: {onlineStatus ? "🌐" : "❌"}
                        </li>
                        <li><Link to="/" className="hover:text-purple-600 transition">Home</Link></li>
                        <li><Link to="/about" className="hover:text-purple-600 transition">About</Link></li>
                        <li><Link to="/contact" className="hover:text-purple-600 transition">Contact</Link></li>
                        <li>
                            <button
                                onClick={() => setIsLoggedIn(!isLoggedIn)}
                                title={isLoggedIn ? "Logout" : "Login"}
                                className={`w-full mt-2 py-2 rounded-full text-white font-semibold shadow-md ${
                                    isLoggedIn ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
                                }`}
                            >
                                {isLoggedIn ? "Logout" : "Login"}
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
