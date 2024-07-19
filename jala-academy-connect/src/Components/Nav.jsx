import LoginBtn from "./LoginBtn";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const navItems = [
        { name: "Home", link: "#" },
        { name: "HOW IT WORKS", link: "#info" }
    ];

    return (
        <nav className="flex justify-around items-center font-poppins min-h-[72px] px-[20px]">
            <div className="logo text-[24px] font-bold">Jala Academy</div>
            <div className="flex items-center">
                {/* Hamburger Icon for mobile */}
                <FontAwesomeIcon
                    icon={faBars}
                    className="block sm:hidden text-[#2C66B8] cursor-pointer"
                    onClick={toggleMenu}
                />
            </div>

            {/* Navigation Links, Search Icon, and Login Button */}
            <div className={`flex-col sm:flex sm:flex-row sm:items-center ${menuOpen ? 'block' : 'hidden'} sm:block absolute sm:static top-[72px] left-0 right-0 bg-white sm:bg-transparent z-50 gap-[10px]`}>
                <ul className="flex flex-col sm:flex-row gap-[30px] text-[#2C66B8] font-bold max-sm:gap-[10px] p-4 sm:p-0 max-sm:text-center">
                    {navItems.map((navItem) => (
                        <li key={navItem.name} className="hover:drop-shadow-lg hover:shadow-black">
                            <a href={navItem.link}>{navItem.name}</a>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-between items-center p-4 sm:p-0 gap-[10px] max-sm:justify-center max-sm:gap-[20px]">
                    <FontAwesomeIcon icon={faSearch} className="ml-4 sm:ml-0 cursor-pointer" />
                    <LoginBtn />
                </div>
            </div>
        </nav>
    );
}

export default Nav;
