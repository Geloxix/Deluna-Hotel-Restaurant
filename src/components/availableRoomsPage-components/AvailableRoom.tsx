import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "@remixicon/react";

import { useCheckinContext } from "../../constants/checkInContext";
import { RoomsTypes } from "../../constants/types";

interface AvailableRoomProps {
    room: RoomsTypes;
    index: number;
    nightsCount: number;
};

const AvailableRoom = ({ room, index, nightsCount }: AvailableRoomProps) => {
    const checkInData = useCheckinContext();

    return (
        <li 
            key={room.id}
            className={`flex items-center border-[1px] rounded-lg p-3 mb-8 ${index === 0 ? 'border-color-1' : ' border-color-4'}`} 
        >
            <div>
                <img 
                    src={room.img} 
                    alt="rooms images" 
                    className="w-[350px] rounded-lg mr-5"
                />
            </div>

            <div className="self-start flex justify-between w-full  p-2">
                <div className="ml-[2rem]">
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

                <div className="flex flex-col">
                    <div className="flex items-center justify-end mb-5">
                        <div className="mr-3 text-[0.80em]">
                            <h3>Good</h3>
                            <p>300 views</p>
                        </div>
                        <p className="bg-color-1 text-white p-3 rounded-t-md rounded-tr-md rounded-br-md">9.0</p>
                    </div>
                    <div className="mb-1 flex text-[0.80em]">
                        <p className="mb-2">{`${checkInData.nightsCount}${checkInData.nightsCount > 1 ? ' nights' : ' night'} ·`}</p>
                        <p>{`${checkInData.adultsCount} ${parseInt(checkInData.adultsCount) > 1 ? 'adults' : 'adult' } ·`}</p>
                        <p>{`${checkInData.childrensCount} ${parseInt(checkInData.childrensCount) > 1 ? 'childrens' : 'children'}`}</p>
                    </div>
                    
                    <p className="text-right mb-2 text-color-7 font-[500]">{`$${nightsCount * room.pricePerDay}`}</p>
                    <button className="self-end px-3 py-[7px] bg-color-1 text-white rounded-md hover:bg-white hover:text-color-1 transition-all duration-500">
                        <Link 
                            to={`/rooms/${room.id}`} 
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
    );
};

export default AvailableRoom;
