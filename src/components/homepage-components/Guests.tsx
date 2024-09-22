import { useRef, useState } from "react";

//react slick
import Slider from "react-slick";

import { guests } from "../../constants/utils";

interface GuestDataTypes {
    id: number;
    guestName: string
    guestOccupation: string
    img: string;
    description: string;
};

const Guests = () => {
    const [ nav1, SetNav1 ] = useState(null);
    const [ nav2, setNav2 ] = useState(null);

    const mainSlider = useRef(null);
    const thumbnailSlider = useRef(null);

    const mainSliderSetting = {
        asNavFor: nav2,
        ref: slider => SetNav1(slider),
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    };

    const thumbnailSliderSetting = {
        asNavFor: nav1,
        ref: slider => setNav2(slider),
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        dots: true,
    };

    return (
        <div className="px-[18rem] my-[7rem]">
            <div className="flex">
                <div className="w-[45%] mr-[4rem]">
                     <Slider {...mainSliderSetting} className="w-full" >
                        {
                            guests.map((guest: GuestDataTypes) => (
                                <li 
                                    key={guest.id}
                                >   
                                    <img 
                                        src={guest.img} alt="guest pictures" 
                                        className="w-full rounded-lg"
                                    />
                                </li>
                            ))
                        }
                    </Slider>
                </div>
                
                <div className="w-[50%] font-poppins">
                    <h1 className="text-color-1 tracking-widest mb-4">TESTIMONIALS</h1>
                    <h3 className="text-[3.2rem] mb-4">Our Guests Love Us</h3>
                    <Slider {...thumbnailSliderSetting} className="w-full">
                        {
                            guests.map((guest: GuestDataTypes) => (
                                <li key={guest.id} className="mb-6">
                                    <h3 className="leading-9 mb-5 text-color-3">{guest.description}</h3>
                                    <div className="flex">
                                        <p>{guest.guestName}</p> -
                                        <p className="text-color-1">{guest.guestOccupation}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Guests;
