import { Link } from "react-router-dom";

//utility
import { RoomsTypes } from "../constants/types";

import Rooms from "../components/rooms-page-components/Rooms";
import BreadCrumbArea from "../components/rooms-page-components/BreadCrumbArea";

interface RoomsPageProps  {
    rooms: RoomsTypes[];
    handleGetAvailableRooms: (args: number) => void;
};

const RoomsPage = ({ rooms }: RoomsPageProps) => {
    

    return (
        <section>
            <BreadCrumbArea
                 breadCrumbValue="Our Rooms" 
                 currentPage="Rooms"
            />
            
            <div className="flex items-center justify-center px-[15rem] py-10 border-2">
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
            </div>
        </section>
    );
};

export default RoomsPage;
