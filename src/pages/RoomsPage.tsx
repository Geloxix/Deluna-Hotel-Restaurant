import { useState } from "react";
import { Link } from "react-router-dom";

//utility
import { RoomsTypes } from "../constants/types";

//material UI
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

import sectionBg from "../assets/images/sectionBg.png";


import Rooms from "../components/rooms-page/Rooms";
interface RoomsPageProps  {
    rooms: RoomsTypes[];
};

const RoomsPage = ({ rooms }: RoomsPageProps ) => {

    const [ value, setValue ] = useState<number[]>([0, 50]);


    const handleChangeNumber = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    return (
        <section>
            <div className="shadow-lg relative font-poppins">
                <img src={sectionBg} alt="" className=""/>
                <div className="absolute top-0 bottom-0 w-full bg-color-6 opacity-900 flex items-center justify-center flex-col">
                    <h1 className="z-[999] text-white text-3xl mb-3">Our Rooms</h1>
                    <Link to="#" className="z-[9999] text-white " >
                         Rooms
                    </Link>
                </div>
                
            </div>
            
            <div className="flex justify-between items-start px-[12rem]">
                <ul>
                    {
                        rooms.map((room: RoomsTypes) => (
                            <Rooms 
                                key={room.id}
                                room={room}
                            />
                        ))
                    }
                </ul>

                <div className="justify-start py-[5rem] font-poppins">
                    <form action="" className="">
                        <div className="mb-4">
                            <h1 className="text-xl mb-4 text-color-3">Date</h1>

                            <div className="flex justify-between">
                                <input 
                                    type="date" 
                                    name="checkIn" 
                                    id="checkIn" 
                                    placeholder="Check in"
                                    className="room-form-inputs w-full" />
                                <input 
                                    type="date" 
                                    name="checkOut"
                                    id="checkOut" 
                                    placeholder="Check out"
                                    className="room-form-inputs w-full border-r-0" />
                            </div> 
                        </div>

                        <div className="mb-10">
                            <h1 className="text-xl mb-4 text-color-3">Guests</h1>

                            <div className="flex gap-4">
                                <input 
                                    type="number" 
                                    name="" id=""
                                    placeholder="Adult"
                                    className="room-form-inputs" />
                                <input 
                                    type="number" 
                                    name="" id=""
                                    placeholder="Children"
                                    className="room-form-inputs" />
                            </div>
                            
                        </div>

                        <div className="mb-10">
                            <h1
                                className="mb-3 text-xl font-[400]"                            
                            >
                                {`Max Price $${value[0]} - $${value[value.length - 1]}`}</h1>
                            <Box sx={{ width: '90%', size: 'meduim', color: '#1cc3b2' }}>
                             <Slider
                                    getAriaLabel={() => 'Price range'}
                                    value={value}
                                    max={3000}
                                    onChange={handleChangeNumber}
                                    valueLabelDisplay="auto"
                                    color="color-1"
                                    size="large"
                                />
                            </Box>
                        </div>
                        
                        <button 
                            type="submit" 
                            className="py-4 px-6 bg-color-1 w-full text-white rounded-full hover:text-color-2 hover:bg-white transition-all duration-300 hover:shadow-lg"
                        >Check Availability</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default RoomsPage;
