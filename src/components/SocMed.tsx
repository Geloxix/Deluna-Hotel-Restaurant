import { Link } from "react-router-dom";

import { RiPhoneFill, RiMailFill } from "@remixicon/react";
import { socmedLinks } from "../constants/utils";

const SocMed = () => {
    return (
        <div className="flex items-center justify-between px-[15rem] bg-[#0E2737] text-white h-[48px] text-[0.80em]">
            <div className="flex items-center gap-5 ">
                <div className="flex items-center gap-1"> 
                    <RiPhoneFill
                        color="#1cc3b2" 
                        size={20}                 
                    /> 
                    <p>{`(123) - 456-7890-000`}</p>
                </div>

                <div className="flex items-center gap-1">
                    <RiMailFill 
                        color="#1cc3b2"
                        size={20}                    
                    />
                    <p>example.@gmail.com</p>
                </div>
            </div>

            <ul className="flex items-center">
                {
                    socmedLinks.map((socmedLink, index) => (
                        <Link 
                            key={socmedLink.id}
                            to={socmedLink.path}
                            className={`${socmedLinks.length - 1 === index ? 'mr-0' : 'mr-6'} transition-all ease-out  hover:text-[#1cc3b2]`}
                        >
                            <socmedLink.icon 
                                size={20}
                            />
                        </Link>
                    ))
                }
            </ul>
        </div>
    );
};

export default SocMed;
