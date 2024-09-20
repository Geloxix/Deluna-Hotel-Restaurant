import { Link } from "react-router-dom";

// types
import { RoomsTypes } from "../../constants/types";

import BreadCrumbArea from "./BreadCrumbArea";

//remix icons
import { RiHeartLine } from "@remixicon/react";
import { RiShareLine } from "@remixicon/react";


interface RoomProps {
    room: RoomsTypes;
};

const Room = ({ room  }: RoomProps) => {
    return (
        <div className="font-poppins">

            <BreadCrumbArea 
                breadCrumbValue="Available room"
                currentPage="Rooms"
            />

            <div className="py-[5rem] px-[18rem]">
                <div className="flex justify-between mb-7">
                    <h1 className="font-[500] text-2xl">{room.roomName}</h1>
                    
                    <div className="flex items-center">
                        <button className="mr-5">
                            <RiHeartLine
                                className="text-color-1"                            
                            />
                        </button>
                        <button className="mr-5">
                            <RiShareLine
                                className="text-color-1"                            
                            />
                        </button>
                        <button className="px-[3.5rem] rounded-sm text-[0.90em] py-2 bg-color-1 text-white">
                            <Link to="/reservation">
                                Reserve
                            </Link>
                        </button>
                    </div>
                </div>

                <div className="flex justify-between">
                    <div className="basis-[90%]">
                        <img 
                            src={room.img} alt="" 
                        />
                    </div>
                    
                    <div className="pl-5 flex flex-col">
                        <div>
                            <div className=" flex justify-end gap-4 border-2">
                                <div className="text-[0.70em]">
                                    <h3 className="text-end">Good</h3>
                                    <p className="text-end">500 reviews</p>
                                </div>
                                <p className="bg-color-1 p-2 rounded-t-md rounded-br-md text-white">9.6</p>
                            </div>
                        </div>
                        

                        <div>
                            <h1>Lorem ipsum dolor sit.</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos explicabo iste aspernatur similique</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Room;
