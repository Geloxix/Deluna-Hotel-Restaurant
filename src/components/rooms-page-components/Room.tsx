import { RoomsTypes } from "../../constants/types";

interface RoomProps {
    room: RoomsTypes;
};

const Room = ({ room  }: RoomProps) => {
    return (
        <div className="font-poppins px-[15rem] mt-[3rem] ">
            <div>
                <img 
                    src={room.img} 
                    alt={room.roomName}
                    className="w-[800px]"
                 />
                 <div>
                    <h1>{ room.roomName }</h1>
                 </div>
            </div>

            <div>
                
            </div>
        </div>
    );
};

export default Room;
