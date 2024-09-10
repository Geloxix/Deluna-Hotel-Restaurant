import { NavLink, Link } from "react-router-dom";

import arrowRightLong from '../../assets/icons/right-long-solid.svg';
import { navLinks } from "../../constants/utils";
import SocMed from "./SocMed";


const NavBar = () => {
    return (
        <header className="font-poppins  w-full z-[9999]">
            <SocMed />
            <nav className="flex items-center justify-between px-[15rem] h-[80px] bg-white">
                <h1 className="font-semibold text-xl">De Luna</h1>
                <ul className="flex items-center ">
                    {
                        navLinks.map((navLink) => (
                            <NavLink 
                                key={navLink.id}
                                to={navLink.path}
                                className={`${'mr-[3rem] hover:opacity-30 transition-all ease-linear duration-700'}`}
                            >
                                { navLink.name }
                            </NavLink>
                        ))  
                    }
                    <Link 
                        to="/book"
                        className="bg-color-1 text-white px-[40px] py-[28px] hover:bg-color-2 transition-all ease-linear flex items-center gap-3"
                    >
                        Book Now
                        <img src={arrowRightLong} alt="" className="w-[15px]" />
                    </Link>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
