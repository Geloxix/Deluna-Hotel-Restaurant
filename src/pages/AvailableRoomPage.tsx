import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import axios from "axios";
import { RoomsTypes } from "../constants/types";

const AvailableRoomPage = () => {
    const room = useLoaderData() as RoomsTypes;

    return (
        <div>
            <h1>{room.roomName}</h1>
        </div>
    );
};


const availableRoomsLoader = async({ params }: LoaderFunctionArgs) => {
    const { roomId } = params;

    try {
        const res = await axios.get(`/api/rooms/${roomId}`);
        return res.data;
    } catch (err) {
        console.log("Error", err);
    }
};

export { AvailableRoomPage as default, availableRoomsLoader};
