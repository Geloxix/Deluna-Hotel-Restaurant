
interface KitchenTypes {
    squareMeter: number;
    count: number
};

export interface RoomsTypes {
    id: number;
    roomId: string;
    roomName: string;
    img: string;
    description: string;
    pricePerDay: number;
    room: number;
    livingRoom: number;
    bathRoom: number;
    kitchen: KitchenTypes;
    size: string;
    available: boolean;
    capacity: number;
    beds: number;
    services: string;
}; 