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
                    <div>
                        <img 
                            src={room.img} alt="" 
                        />
                    </div>
                    
                    <div className="pl-5 flex flex-col basis-[80%]">
                        <div className="border-[1px] border-color-4 rounded-md mb-2">
                            <div className="p-2 flex justify-end gap-2 border-color-4 border-b-[1px]">
                                <div className="">
                                    <h3 className="text-end font-[500] text-[0.90em]">Good</h3>
                                    <p className="text-end text-[0.70em]">500 reviews</p>
                                </div>
                                <p className="bg-color-1 p-2 rounded-t-lg rounded-br-lg  text-white">9.6</p>

                            </div>

                            <div className="py-2">
                                <h3 className="text-[0.90em] ml-4 mb-5">Lorem, ipsum dolor.</h3>
                                <p className="text-[0.70em] mb-5 px-3 ml-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ea!</p>
                                <p className="text-[0.70em] ml-5">toshinori</p>
                            </div>
                        </div>
                        

                        <div className="border-[1px] border-color-4 rounded-md h-full text-[0.70em] p-3">
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
