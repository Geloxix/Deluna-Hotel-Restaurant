import { NavLink, Link } from "react-router-dom";

import arrowRightLong from '../../assets/icons/right-long-solid.svg';
import { navLinks } from "../../constants/utils";
import SocMed from "./SocMed";

const NavBar = () => {

    return (
        <header className="font-poppins  w-full z-[9999]">
            <SocMed />
            <div className="flex justify-between items-center px-[18rem]">
                 <h1 className="font-[500] text-4xl text-color-7">
                    De <span className="text-color-1">Luna</span>
                </h1>
                <nav className="flex items-center justify-between  h-[80px] bg-white">
                    <ul className="flex items-center text-[1.1em] font-[500]">
                        {
                            navLinks.map((navLink) => (
                                <NavLink 
                                    key={navLink.id}
                                    to={navLink.path}
                                    className={`${'mr-[3rem] text-color-7 hover:opacity-30 transition-all ease-linear duration-300'}`}
                                >
                                    { navLink.name }
                                </NavLink>
                            ))  
                        }     
                    </ul>
                    <button className="bg-color-1 text-white h-full hover:bg-color-2 transition-all ease-linear flex items-center gap-3 px-[2rem]">
                        <Link  to="/book-now"
                            className="flex"
                        >
                            Book Now
                            <img src={arrowRightLong} alt="" className="ml-5 w-[15px]" />
                        </Link>
                    </button>
                    
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
