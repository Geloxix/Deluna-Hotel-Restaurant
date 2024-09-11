import { RoomsTypes } from "../../constants/types";
import { Link } from "react-router-dom";

import { FaRightLong } from "react-icons/fa6";

interface RoomsProps {
    room: RoomsTypes;
};

const Rooms = ({ room }: RoomsProps) => {

    const roomServices = room.services.slice(0, 10);

    return (
        <div className="px-[15rem] flex font-poppins mt-10">
            <div className="mr-[40px]">
                <img 
                    src={room.img} 
                    alt={room.roomName} 
                    className="w-[400px]"
                />
            </div>

            <div className="py-10">
                <h1 className="text-4xl mb-3 font-[500]">{room.roomName}</h1>
                <h2 className="mb-5">
                    <span className="text-3xl text-color-1 font-[500]">${room.pricePerDay}</span> / day
                </h2>

                <div className="text-lg mb-10">
                    <div className="flex items-start mb-3">
                        <p className="w-[150px]">
                            <span className="room-text-span">Size:</span> <br />
                            {room.size}
                        </p>

                        <p>
                            <span className="room-text-span">Capacity:</span> <br />
                            {room.capacity}
                        </p>
                    </div>

                    <div className="flex item-start">
                        <p className="w-[150px]">
                            <span className="room-text-span">Bed:</span> <br />
                            { room.bed}
                        </p>

                        <p>
                            <span className="room-text-span">Services:</span> <br />
                            { roomServices + '..' }
                        </p>
                    </div>
                </div>

                <Link 
                    to={`/rooms/${room.roomId}`}
                    className="font-[500] flex items-center gap-2 hover:text-color-1 transition-all duration-300"
                >
                    View details
                    <FaRightLong />
                </Link>

                
            </div>
        </div>
    );
};

export default Rooms;
