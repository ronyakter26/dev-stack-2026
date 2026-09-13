import { useState } from 'react';
import logo from "../assets/logo-text.png"

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">


            <div className="container mx-auto px-4" >
                <div className="flex items-center justify-between h-20">
                    <button onClick={() => setMenuOpen(!menuOpen)}
                        className='md:hidden text-2xl'>

                    </button>
                    <a href='#' className="flex items-center">
                        <img
                            src={logo}
                            alt="Dev Stack Logo"
                            className="w-32 h-auto"
                        />

                    </a>
                    <div className="hidden md:flex items-center gap-8">
                        <a
                            href="#"
                            className="text-pink-500 font-medium"
                        >
                            Home
                        </a>
                        <a href="#technologies" className="text-gray-600 hover:text-pink-500">Technologies</a>
                        <a href="#projects" className="text-gray-600 hover:text-pink-500">Projects</a>
                        <a href="#about" className="text-gray-600 hover:text-pink-500">About</a>
                        <a href="#contact" className="text-gray-600 hover:text-pink-500">Contact</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="btn btn-ghost btn-sm">Sign In</button>
                        <button className="btn btn-sm rounded-full bg-pink-500 hover:bg-pink-600 text-white bordere-none">Sign Up</button>

                    </div>

                </div>
                {menuOpen && (
                    <div className="md:hidden flex flex-col gap-3 pb-4">
                        <a href="#" onClick={() =>
                            setMenuOpen(false)}
                            className="text-gray-600 hover:text-pink-500">
                            Home
                        </a>
                        <a href="#technologies"
                            onClick={() => setMenuOpen(false)}
                            className="text-gray-600 hover:text-pink-500">
                            Technologies </a>
                        <a href="#projects" onClick={() =>
                            setMenuOpen(false)}

                            className="text-gray-600 hover:text-pink-500">
                            Projects</a>
                        <a href="#about" onClick={() =>
                            setMenuOpen(false)}
                            className="text-gray-600 hover:text-pink-500">
                            About
                        </a>
                        <a href="#contact" onClick={() =>
                            setMenuOpen(false)}
                            className="text-gray-500 hover:text-pink-500">
                            Contact</a>


                    </div>

                )}
            </div>

        </nav>






    );
};

export default Nav;     
            