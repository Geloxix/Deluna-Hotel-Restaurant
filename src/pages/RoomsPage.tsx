import { RoomsTypes } from "../constants/types";

import Rooms from "../components/rooms-page/Rooms";
interface RoomsPageProps  {
    rooms: RoomsTypes[];
};

const RoomsPage = ({ rooms }: RoomsPageProps ) => {
    return (
        <section>
            <div className="py-[8rem] border-[1px] border-red-500 shadow-lg">
                Rooms
            </div>
            
            <div>
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
