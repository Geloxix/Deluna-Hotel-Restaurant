import { RoomsTypes } from "../constants/types";
import { useRoomsContext } from "../constants/roomsContext";
import { Link } from "react-router-dom";

import sectionImg from "../assets/images/sectionBg.png";

import { RiArrowRightSLine } from "@remixicon/react";
interface AvailableRoomsPageProps {
    availableRooms: RoomsTypes[];
};

const AvailableRoomsPage = ({ }: AvailableRoomsPageProps) => {
    const availRooms: RoomsTypes[] = useRoomsContext();

    
    return (
        <section className="font-poppins">
            <div className="relative">
                <img src={sectionImg} alt="" />
                <div className="absolute flex items-center justify-center  top-0 bottom-0 bg-color-6 bg-opacity-25 w-full z-[999] text-white">
                    Avaialble Rooms
                </div>
            </div>
            <div className="flex px-[15rem]">
                <div className="h-full px-[5rem] py-[10rem]  mr-8 rounded-lg text-center">
                    Filters
                </div>
                <div>
                    <h1 className="font-[500] text-[1em] my-7">
                        {` Searched:  ${availRooms.length} ${availRooms.length > 1 ? 'rooms' : 'room'} found`}
                    </h1>
                    {
                        availRooms.length > 0 ? <ul>
                            {
                                availRooms.map((room) => (
                                    <li 
                                        key={room.id}
                                        className="flex items-center border-[1px] rounded-lg border-color-4 p-3 mb-8" 
                                    >
                                        <div>
                                            <img 
                                                src={room.img} 
                                                alt="rooms images" 
                                                className="w-[350px] rounded-lg mr-5"
                                            />
                                        </div>

                                        <div className="self-start flex p-2">
                                            <div className="mr-12">
                                                <Link to={`/availableRooms/${room.id}`}  className="mb-6 text-color-1 font-[500] text-2xl">
                                                    {room.roomName}
                                                </Link>
                                                <div className="border-l-2 border-color-4 pl-3 mt-4">
                                                    <h3 className="mb-3 text-[0.90em] font-[500]">Deluxe Apartment</h3>
                                                    <ul className="flex gap-[2px] text-[0.80em] mb-2">
                                                        <h3>Entire Apartment</h3>
                                                        <li>{`· ${room.room} bedroom`}</li>
                                                        <li>{`· ${room.livingRoom} livingroom`}</li>
                                                        <li>{`· ${room.bathRoom} bathroom`}</li>
                                                    </ul>
                                                    <p className="text-[0.80em]">{`${room.kitchen.count} kitchen · ${room.kitchen.squareMeter} m²`}</p>
                                                    <p className="text-[0.80em]">{`${room.beds} ${room.beds > 1 ? 'beds' : 'bed'}`}</p>
                                                </div>
                                            </div>

                                            <div>
                                                <div className="flex items-center mb-2">
                                                    <div className="mr-3 text-[0.90em]">
                                                        <h3>Good</h3>
                                                        <p>300 views</p>
                                                    </div>
                                                    <p className="bg-color-1 text-white p-3 rounded-t-md rounded-tr-md rounded-br-md">9.0</p>
                                                </div>
                                                <p className="text-right mb-3 text-color-7 font-[500]">{`$${room.pricePerDay}`}</p>
                                                <button className="px-3 py-[7px] bg-color-1 text-white rounded-md hover:bg-white hover:text-color-1 transition-all duration-500">
                                                    <Link 
                                                        to={`/availableRooms/${room.id}`} 
                                                        className="flex items-center text-[0.80em] rounded-md"
                                                    >
                                                        See availability
                                                        <RiArrowRightSLine
                                                            className="w-[18px]"
                                                        />
                                                    </Link>
                                                </button>
                                                
                                            </div>
                                            
                                        </div>

                                    </li>
                                ))
                            }
                        </ul> : <h1>No rooms found!</h1>
                    }
                    
                </div>
            </div>
            
        </section>
    );
};

export default AvailableRoomsPage;
