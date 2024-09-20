import { Link } from "react-router-dom";
import sectionBg from "../../assets/images/sectionBg.png";
import { RiArrowRightSLine } from "@remixicon/react";

interface BreadCrumbAreaProps {
    breadCrumbValue: string;
    currentPage: string;
};

const BreadCrumbArea = ({ breadCrumbValue, currentPage }: BreadCrumbAreaProps) => {
    return (
        <div className="shadow-lg relative font-poppins">
            <img src={sectionBg} alt="" className=""/>
            <div className="absolute top-0 bottom-0 w-full bg-color-6 opacity-900 flex items-center justify-center flex-col">
                <h1 className="z-[999] text-white text-5xl mb-3">{ breadCrumbValue }</h1>
                <div className="flex">
                    <Link to="/" className="z-[9999] text-white " >
                        Home
                    </Link>
                    <div className="flex text-white">
                        <RiArrowRightSLine /> 
                        { currentPage}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BreadCrumbArea;
