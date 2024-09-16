import { createContext, useContext } from "react";
import { RoomsTypes } from "./types";

export const RoomsContext = createContext<RoomsTypes[] | undefined>(undefined); 

export const useRoomsContext = () => {
    const rooms = useContext(RoomsContext);

    if (rooms === undefined) {
        throw new Error('Use Room Context must be use with a Rooms Context!');
    }

    return rooms;
};