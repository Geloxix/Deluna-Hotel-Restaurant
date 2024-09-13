import { motion } from "framer-motion";
import Slider from "react-slick";
import { useRef, useState } from "react";

import CheckIn from "../components/homepage-components/CheckIn";
import AboutUs from "../components/homepage-components/AboutUs";
import AvailableRooms from "../components/homepage-components/AvailableRooms";

import { heroImages } from "../constants/utils";




const HomePage = () => {
    const [ activeSlide, setActiveSlide ] = useState<number>(0);
    const [ currentSlide, setCurrentSlide ] = useState<number>(1);
    let sliderRef = useRef<Slider | null>(null);

    const handleNextImg = () => {
        sliderRef.slickNext();
    };

    const handlePrevImg = () => {
        sliderRef.slickPrev();
    };

    const settings = {
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
    };


  
    return (
        <section className={``}>
            <div 
                className="home" 
                style={{ width: '100%', margin: '0 auto', animationDelay: '900ms' }} 
            >   
                
                
                <Slider 
                    {...settings } 
                    ref={slider => {sliderRef = slider}}
                    beforeChange={(current, next) => { setActiveSlide(next), setCurrentSlide(current)}}
                    className="relative"
                    
                >
                    {
                        heroImages.map((image, index) => (
                            <div key={index} className="relative">
                                <img src={image.path} alt="background hero image"/>
                                <div 
                                    className={`absolute top-0 left-0 w-full h-full bg-color-6 bg-opacity-70 px-[5rem] flex items-center justify-center font-poppins `}
                                >
                                    <div 
                                    className={`flex flex-col items-center justify-center transition-all duration-300 ease-in `}
                                    >
                                        <motion.h2 
                                            className={`text-white text-[1em] font-[500]  mb-6 tracking-[0.3em] `} 
                                            initial={{ opacity: image.initialStyle.opacity, x: image.initialStyle.x, y: image.initialStyle.y }}
                                            animate={{ opacity: activeSlide === image.slideId ? image.animatedStyle.opacity : image.initialStyle.opacity, x: activeSlide === image.slideId ? image.animatedStyle.x : image.initialStyle.x , y: activeSlide === image.slideId ? image.animatedStyle.y : image.initialStyle.y}}
                                            transition={{ duration: 0.8, delay: 2, easings: 'easeIn'}}
                                        >
                                            { image.hotel }
                                        </motion.h2>
                                        <motion.h1 
                                            className={`text-[5rem] mb-7 font-[500] text-white`} 
                                            initial={{ opacity: image.initialStyle.opacity, x: image.initialStyle.x, y: image.initialStyle.y }}
                                            animate={{ opacity: activeSlide === image.slideId ? image.animatedStyle.opacity : image.initialStyle.opacity, x: activeSlide === image.slideId ? image.animatedStyle.x : image.initialStyle.x , y: activeSlide === image.slideId ? image.animatedStyle.y : image.initialStyle.y}}
                                            transition={{ duration: 0.8, delay: 2.3, easings: 'easeIn'}}
                                        >{ image.greet }</motion.h1>
                                        <motion.button 
                                            className={`border-2 border-color-1 px-10 py-3 text-white rounded-sm hover:bg-color-1 hover:duration-500 `} 
                                            initial={{ opacity: image.initialStyle.opacity, x: image.initialStyle.x, y: image.initialStyle.y }}
                                            animate={{ opacity: activeSlide === image.slideId ? image.animatedStyle.opacity : image.initialStyle.opacity, x: activeSlide === image.slideId ? image.animatedStyle.x : image.initialStyle.x , y: activeSlide === image.slideId ? image.animatedStyle.y : image.initialStyle.y}}
                                            transition={{ duration: 0.8, delay: 2.5, easings: 'easeIn'}}
                                        >
                                            { image.btnText }
                                        </motion.button>
                                    </div> 
                                </div>
                            </div>
                        ))
                    }
                </Slider>
                
                <div className="button-container ">
                    <div className="flex items-center justify-between w-full">
                         <button onClick={handlePrevImg}>
                            <img 
                                src={heroImages[currentSlide].path} alt="previous image" 
                                className="prevNext-btn"
                            />
                        </button>

                        <button onClick={handleNextImg}>
                            <img 
                                src={heroImages[activeSlide].path} alt="next image" 
                                className={`prevNext-btn  cursor-pointer `}    
                            />
                        </button>
                    </div>
                </div>

               
                
            </div>
            
            <div>
                <CheckIn />
            </div>
            
            <div>
                <AboutUs/>
            </div>

            <div>
               <AvailableRooms />
            </div>
        </section>
    );
};

export default HomePage;
