import { RoomsTypes } from "../constants/types";
interface RoomsPageProps  {
    rooms: RoomsTypes[];
};

const RoomsPage = ({ rooms }: RoomsPageProps ) => {
    return (
        <section>
            <div>
                Rooms
            </div>
            
            <div>
                <ul>
                    {
                        rooms.map((room: RoomsTypes) => (
                            <li key={room.id}>
                                <div>
                                    <img src={room.img} alt={room.roomName} />
                                </div>

                                <div>
                                    <h1>{room.roomName}</h1>
                                    <h2>{room.pricePerDay}</h2>

                                    <div>
                                        <p>Size: <br />
                                            <span>
                                                {room.size}
                                            </span>
                                        </p>

                                        <p>
                                            Capacity: <br />
                                            <span>{room.capacity}</span>
                                        </p>
                                    </div>

                                    <div>
                                        <p>Bed: <br />
                                            <span>
                                                { room.bed}
                                            </span>
                                        </p>

                                        <p>Services: <br />
                                            <span>
                                                { room.services }
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
};

export default RoomsPage;
