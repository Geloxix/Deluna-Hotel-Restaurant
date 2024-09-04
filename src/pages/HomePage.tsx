import Slider from "react-slick";

// import CheckIn from "../components/CheckIn";

import herobg1 from "../assets/images/hero-bg1.png";
import herobg2 from "../assets/images/hero-bg2.png";
import herobg3 from "../assets/images/hero-bg3.png";


const HomePage = () => {

    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const images = [ herobg1, herobg2, herobg3 ];

    return (
        <section className={``}>
            <div className="bg-color-2 bg-opacity-10" style={{ width: '100%', margin: '0 auto', animationDelay: '900ms' }}>
                <Slider {...settings }>
                    {
                        images.map((image, index) => (
                            <div key={index} className="relative">
                                <img src={image} alt="background hero image" />
                                <div className="absolute top-0 left-0 w-full h-full bg-color-2 bg-opacity-50 flex items-center flex-col justify-center font-poppins">
                                    <h1 className={`text-white text-[0.90em] mb-6 ${index !== 0 ? 'animate__animated animate__fadeInDown': 'animate__animated animate__fadeInUp '} `} style={{ animationDelay: '600ms'}}>HOTEL & RESORT</h1>
                                    <p className="text-[5.5rem] mb-7 text-white animate__animated animate__fadeInUp duration-700" style={{ animationDelay: '700ms'}}>Welcome to De Luna</p>
                                    <button className="border-2 border-color-1 px-10 py-3 text-white rounded-sm hover:bg-color-1 transition-all hover:duration-500 animate__animated animate__fadeInUp " style={{ animationDelay: '900ms'}}>Discover Now</button>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
                
                
            </div>
            
            {/* <CheckIn /> */}
        </section>
    );
};

export default HomePage;
