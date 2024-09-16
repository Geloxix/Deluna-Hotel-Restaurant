import { RoomsTypes } from "../constants/types";
import { useRoomsContext } from "../constants/roomsContext";

interface AvailableRoomsPageProps {
    availableRooms: RoomsTypes[];
};

const AvailableRoomsPage = ({ }: AvailableRoomsPageProps) => {
    const availRooms = useRoomsContext();

    
    return (
        <section>
            <div>
                <ul>
                    {
                        availRooms.map((room) => (
                            <li key={room.id}>
                                { room.roomName}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
};

export default AvailableRoomsPage;
