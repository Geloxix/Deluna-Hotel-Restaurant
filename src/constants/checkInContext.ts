import { createContext, useContext } from "react";

export interface CheckInDataTypes {
    nightsCount: number;
    childrensCount: string;
    adultsCount: string;
};

export const CheckinContext = createContext<CheckInDataTypes | undefined>(undefined);


export const useCheckinContext = () => {
    const checkIn = useContext(CheckinContext);

    if (checkIn === undefined) {
        throw new Error('Use CheckinContext must be use with in CheckInDataTypes!');
    }

    return checkIn;
};