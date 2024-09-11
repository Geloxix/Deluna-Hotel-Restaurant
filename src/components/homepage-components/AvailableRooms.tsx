import { useRef, useState } from "react";
import { motion } from "framer-motion";

import arrowRightLong from '../../assets/icons/right-long-solid.svg';
import Slider from "react-slick";
import { rooms } from "../../constants/utils";
import { RiCheckFill } from "@remixicon/react";

import { Link } from "react-router-dom";

const AvailableRooms = () => {
    const [ activeSlide, setActiveSlide ] = useState<number>(0);
    let sliderRef = useRef(null);

    const settings = {
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const handleNextImg = () => {
        sliderRef.slickNext();
    };

    const handlePrevImg = () => {
        sliderRef.slickPrev();
    };


    return (
        <div className="relative">
            <Slider 
                {...settings}
                className=" my-[10rem] w-[100%]"
                ref={slider => { sliderRef = slider}}
                beforeChange={(current, next) => {setActiveSlide(next)}}
            >
                {
                    rooms.map((room) => (
                        <div 
                            key={room.id}
                            className=" bg-color-2 mt-[5rem]"
                        >   
                            <div className={`flex h-[780px]`}>
                                <img src={room.path} alt="" className="w-[50%]" />
                                <div 
                                    className={` flex flex-col justify-center text-white font-poppins ml-[6rem]`}   
                                >
                                    <motion.h1 
                                        className={`text-[3.5rem] mb-[3rem] font-[500]`}
                                        initial={{ opacity: 0, y: 90 }}
                                        animate = {{ opacity: activeSlide === room.slideId ? 1 : 0, y: activeSlide === room.slideId ? 0 : 80 }}
                                        transition={{ duration: 1, delay: 1  }}
                                    >{room.roomName}
                                        
                                    </motion.h1>

                                    <motion.p 
                                        className={`mb-8 `}
                                        initial={{ opacity: 0, y: 90 }}
                                        animate = {{ opacity: activeSlide === room.slideId ? 1 : 0, y: activeSlide === room.slideId ? 0 : 80 }}
                                        transition={{ duration: 1, delay: 1.1 }}
                                    >
                                        <span className="text-color-1 text-5xl font-[500] mr-3">${room.pricePerDay}</span> / day
                                    </motion.p>

                                    <motion.ul 
                                        className={`list-disc mb-9`}
                                        initial={{ opacity: 0, y: 90 }}
                                        animate = {{ opacity: activeSlide === room.slideId ? 1 : 0, y: activeSlide === room.slideId ? 0 : 80 }}
                                        transition={{ duration: 1, delay: 1.2 }}
                                    >
                                        <li className={`room-info`}>
                                            <p className={`flex `}>
                                                <RiCheckFill /> 
                                                Size
                                            </p> 
                                            <p className="w-[60%]">:{room.size}</p>
                                        </li>
                                        <li className={`room-info`}>
                                            <p className="flex">
                                                <RiCheckFill /> 
                                                Capacity
                                            </p> 
                                            <p className="w-[60%]">:{room.capacity}</p>
                                        </li>
                                        <li className={`room-info`}>
                                            <p className="flex">
                                                <RiCheckFill  /> 
                                                Bed</p> 
                                            <p className="w-[60%]">:{room.bed}</p>
                                        </li>
                                        <li className={`room-info`}>
                                            <p className="flex">
                                                <RiCheckFill  /> 
                                                Services
                                            </p> 
                                            <p className="w-[60%]">:{room.services}</p>
                                        </li>
                                    </motion.ul>
                                        
                                    <motion.button 
                                        className={`self-start px-[4rem] py-4 bg-color-1 text-white hover:bg-white hover:text-color-1`}
                                        initial={{ opacity: 0, y: 90 }}
                                        animate = {{ opacity: activeSlide === room.slideId ? 1 : 0, y: activeSlide === room.slideId ? 0 : 90 }}
                                        transition={{ duration: 1, delay: 1.3 }}
                                    >
                                        <Link 
                                            to="/details"
                                        >
                                            Veiw Details
                                        </Link>
                                    </motion.button>
                                    
                                </div>
                            </div>
                            
                        </div>
                    ))
                }
            </Slider>
            <div className="absolute bottom-[6px]  z-[999] w-full flex items-center justify-center font-poppins">
                <button 
                    className=" text-color-2 h-[55px] bg-white w-[150px] hover:bg-color-1 font-[500] transition-all duration-300"
                    onClick={handlePrevImg}
                >
                    Previous
                </button>
                <button 
                    className=" bg-color-1 w-[150px] h-[55px] text-white flex items-center justify-center gap-2 hover:bg-zinc-800 font-[500]  transition-all duration-300"
                    onClick={handleNextImg}
                >
                    Next
                    <img 
                        src={arrowRightLong} 
                        alt="" className="w-[11px]" 
                    />
                </button>
            </div>
        </div>
    );
};

export default AvailableRooms;
