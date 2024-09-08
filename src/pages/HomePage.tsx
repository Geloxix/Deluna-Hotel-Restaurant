import Slider from "react-slick";
import { useRef } from "react";

import CheckIn from "../components/homepage-components/CheckIn";
import AboutUs from "../components/homepage-components/AboutUs";

import herobg1 from "../assets/images/hero-bg1.png";
import herobg2 from "../assets/images/hero-bg2.png";
import herobg3 from "../assets/images/hero-bg3.png";



const HomePage = () => {
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
        autoplaySpeed: 5000,
    };


    const images = [ herobg1, herobg2, herobg3 ];

    return (
        <section className={``}>
            <div 
                className="home" 
                style={{ width: '100%', margin: '0 auto', animationDelay: '900ms' }} 
            >   
                
                
                <Slider {...settings } ref={slider => {sliderRef = slider}}>
                    {
                        images.map((image, index) => (
                            <div key={index} className="relative">
                                <img src={image} alt="background hero image"/>
                                <div className="absolute top-0 left-0 w-full h-full bg-color-2 bg-opacity-70 flex items-center justify-center flex-col  px-[5rem] font-poppins">

                                    <h2 className={`text-white text-[0.90em] tracking-widest animate__animated  animate__fadeInUp`} 
                                        style={{ animationDelay: '700ms'}}>HOTEL & RESORT</h2>
                                    <h1 className="text-[5.5rem] mb-7 text-white animate__animated animate__fadeInUp duration-700" 
                                        style={{ animationDelay: '800ms'}}>Welcome to De Luna</h1>
                                    <button className="border-2 border-color-1 px-10 py-3 text-white rounded-sm hover:bg-color-1 transition-all hover:duration-500 animate__animated animate__fadeInUp " style={{ animationDelay: '900ms'}}>Discover Now</button>
                                    
                                </div>
                            </div>
                        ))
                    }
                </Slider>
                
                <div className="button-container ">
                    <div className="flex items-center justify-between w-full">
                         <button onClick={handlePrevImg}>
                            <img 
                                src={images[1]} alt="previous image" 
                                className="prevNext-btn"
                            />
                        </button>

                        <button onClick={handleNextImg}>
                            <img 
                                src={images[2]} alt="next image" 
                                className={`prevNext-btn  cursor-pointer `}  
                                
                            />
                        </button>
                    </div>
                </div>

               
                
            </div>
            
            <div>
                <CheckIn />
            </div>
            
            <section>
                <AboutUs/>
            </section>

        </section>
    );
};

export default HomePage;
