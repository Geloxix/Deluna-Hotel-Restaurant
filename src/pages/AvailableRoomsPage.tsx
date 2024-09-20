import { RoomsTypes } from "../constants/types";
import { useRoomsContext } from "../constants/roomsContext";

import BreadCrumbArea from "../components/rooms-page-components/BreadCrumbArea";
import AvailableRoom from "../components/availableRoomsPage-components/AvailableRoom";


interface AvailableRoomsPageProps {
    availableRooms: RoomsTypes[];
    nightsCount: number;
};

const AvailableRoomsPage = ({ nightsCount }: AvailableRoomsPageProps) => {
    const availRooms: RoomsTypes[] = useRoomsContext();
    
    return (
        <section className="font-poppins">
            <BreadCrumbArea 
                breadCrumbValue="Available Rooms" 
                currentPage="Rooms"
            />
            <div className=" px-[18rem]">
                {/* <div className="h-full px-[7rem] py-[10rem]  mr-8 rounded-lg text-center ">
                    Filters
                </div> */}
                <div>
                    <h1 className="font-[500] text-[1em] my-7">
                        {` Searched:  ${availRooms.length} ${availRooms.length > 1 ? 'rooms' : 'room'} found`}
                    </h1>
                    {
                        availRooms.length > 0 ? <ul>
                            {
                                availRooms.map((room, index) => (
                                    <AvailableRoom  
                                        room={room}
                                        index={index}
                                        key={room.id}
                                        nightsCount={nightsCount}
                                    />
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
