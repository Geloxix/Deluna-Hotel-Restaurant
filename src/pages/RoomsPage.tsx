import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//utility
import { RoomsTypes } from "../constants/types";

//material UI
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";


import sectionBg from "../assets/images/sectionBg.png";
import Rooms from "../components/rooms-page-components/Rooms";


interface RoomsPageProps  {
    rooms: RoomsTypes[];
    handleGetAvailableRooms: (args: number) => void;
};

const RoomsPage = ({ rooms, handleGetAvailableRooms  }: RoomsPageProps ) => {
    
    const navigate = useNavigate();
    

    const [ price, setPrice ] = useState<number[]>([20, 100]);
    const [ checkIn, setCheckIn ] = useState<string>('');
    const [ checkOut, setCheckOut ] = useState<string>('');
    const [ adultsCount, setAdultCount ] = useState<string>(''); 
    const [ childrensCount, setChildrensCount ] = useState<string>('');

    // function that track the value of slider 
    const handleChangeNumber = (event: Event, newValue: number | number[]) => {
        setPrice(newValue as number[]);
    };
    
    let totalCapacity = parseInt(adultsCount) + parseInt(childrensCount);
    
    //function that handle submitting form
    const handleSubmitForm = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        //call the handleGetAvailableRooms
        handleGetAvailableRooms(totalCapacity);

        //filtered the array that passed the condition in callback
        // const availRoom = availRooms.filter(room => room.capacity <= parseInt(adultsCount) + parseInt(childrensCount) && room.available && room.pricePerDay >= price[0] && room.pricePerDay <= price[price.length - 1]);

        if (new Date(checkIn) >= new Date(checkOut)) {
            alert('Check in date must be later than Check out date!');
            return;
        } 

        return navigate('/availableRooms');
    };

    return (
        <section>
            <div className="shadow-lg relative font-poppins">
                <img src={sectionBg} alt="" className=""/>
                <div className="absolute top-0 bottom-0 w-full bg-color-6 opacity-900 flex items-center justify-center flex-col">
                    <h1 className="z-[999] text-white text-3xl mb-3">Our Rooms</h1>
                    <Link to="/rooms" className="z-[9999] text-white " >
                         rooms
                    </Link>
                </div>
                
            </div>
            
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
