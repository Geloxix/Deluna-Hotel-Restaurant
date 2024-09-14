import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

import arrowRightLong from '../../assets/icons/right-long-solid.svg';
import { navLinks } from "../../constants/utils";
import SocMed from "./SocMed";


import BookNowModal from "./BookNowModal";

const NavBar = () => {
    const [ open, setOpen ] = useState<boolean>(false);

    const handleOpenModal = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);


    return (
        <header className="font-poppins  w-full z-[9999]">
            <SocMed />
            <nav className="flex items-center justify-between px-[15rem] h-[80px] bg-white">
                <h1 className="font-[500] text-4xl text-color-7">
                    De <span className="text-color-1">Luna</span>
                </h1>
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
                    <button 
                        className="bg-color-1 text-white px-[40px] py-[27px] hover:bg-color-2 transition-all ease-linear flex items-center gap-3"
                        onClick={handleOpenModal}
                    >
                        Book Now
                        <img src={arrowRightLong} alt="" className="w-[15px]" />
                    </button>
                </ul>
            </nav>
            <BookNowModal open={open} />
        </header>
    );
};

export default NavBar;
