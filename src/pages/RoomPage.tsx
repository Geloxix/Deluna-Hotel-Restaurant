import axios from "axios";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { RoomsTypes } from "../constants/types";

import Room from "../components/rooms-page-components/Room";
// interface RoomPageProps {

// };

const RoomPage = () => {
    const room = useLoaderData() as RoomsTypes;
    
    return (
        <section>
            <Room room={room} />
        </section>
    );
};

const roomDataLoader = async({ params }: LoaderFunctionArgs) => {
    const { roomId } = params;
    
    try {
        const res = await axios.get(`/api/rooms/${roomId}`);
        return res.data;
    } catch (err: unknown) {
        console.log("Error: ", err);
    }
};

export { RoomPage  as default, roomDataLoader };

