import { useState } from "react";
import { Link } from "react-router-dom";

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
};

const RoomsPage = ({ rooms }: RoomsPageProps ) => {

    const [ price, setPrice ] = useState<number[]>([0, 50]);
    const [ checkIn, setCheckIn ] = useState<string>('');
    const [ checkOut, setCheckOut ] = useState<string>('');
    const [ adultsCount, setAdultCount ] = useState<string>('');
    const [ childrensCount, setChildrensCount ] = useState<string>('');


    const handleChangeNumber = (event: Event, newValue: number | number[]) => {
        setPrice(newValue as number[]);
    };

    const handleSubmitForm = async(e) => {
        e.preventDefault();

        console.log("Check in", checkIn);
        console.log("Check out", checkOut);
        console.log("Total Person:", adultsCount + childrensCount);
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
            
            <div className="flex items-start px-[15rem] py-10">
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

                <Box className="justify-start py-[5rem] font-poppins">
                    <form action="" onSubmit={handleSubmitForm} className="">
                        <div className="mb-4">
                            <h1 className="text-xl mb-4 text-color-3">Date</h1>

                            <div className="flex justify-between">
                                <input 
                                    type="date" 
                                    name="checkIn" 
                                    id="checkIn" 
                                    placeholder="Check in"
                                    className="room-form-inputs w-[200px]" 
                                    value={checkIn}
                                    onChange={(e) => setCheckIn(e.target.value)}
                                />
                                <input 
                                    type="date" 
                                    name="checkOut"
                                    id="checkOut" 
                                    placeholder="Check out"
                                    className="room-form-inputs w-[200px]" 
                                    value={checkOut}
                                    onChange={(e) => setCheckOut(e.target.value)}
                                />
                            </div> 
                        </div>

                        <div className="mb-10">
                            <h1 className="text-xl mb-4 text-color-3">Guests</h1>

                            <div className="flex justify-between gap-5 font-poppins">
                                <FormControl className="flex flex-col w-full" sx={{ fontFamily: 'font-poppins' }}>
                                    <InputLabel id="adult" className="text-color-7">Adult</InputLabel>
                                    <Select 
                                        labelId="adult"
                                        id="adult"
                                        label="Adult"
                                        value={adultsCount}
                                        onChange={(e: SelectChangeEvent) => setAdultCount(e.target.value)}
                                    >
                                        <MenuItem value={1}>01</MenuItem>
                                        <MenuItem value={2}>02</MenuItem>
                                        <MenuItem value={3}>03</MenuItem>
                                        <MenuItem value={4}>04</MenuItem>
                                        <MenuItem value={5}>05</MenuItem>
                                        <MenuItem value={6}>06</MenuItem>
                                    </Select>
                                </FormControl>

                                <FormControl className="flex flex-col w-full">
                                    <InputLabel id="children">Children</InputLabel>
                                    <Select 
                                        name="children" 
                                        labelId="children"
                                        label="Children"
                                        value={childrensCount}
                                        onChange={(e: SelectChangeEvent) => setChildrensCount(e.target.value) }
                                    >
                                        <MenuItem value={1}>01</MenuItem>
                                        <MenuItem value={2}>02</MenuItem>
                                        <MenuItem value={3}>03</MenuItem>
                                        <MenuItem value={4}>04</MenuItem>
                                        <MenuItem value={5}>05</MenuItem>
                                        <MenuItem value={6}>06</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            
                        </div>

                        <div className="mb-10 text-color-7">
                            <h1
                                className="mb-3 text-xl font-[400]"                            
                            >
                                {`Max Price:  $${price[0]} - $${price[price.length - 1]}`}</h1>
                            <Box sx={{ width: '100%', size: 'meduim', color: '#1cc3b2' }}>
                             <Slider
                                    getAriaLabel={() => 'Price range'}
                                    value={price}
                                    max={3000}
                                    onChange={handleChangeNumber}
                                    valueLabelDisplay="auto"
                                    color="color-1"
                                    size="large"
                                />
                            </Box>
                        </div>
                        
                        <button 
                            type="submit" 
                            className="py-4 px-6 bg-color-1 w-full text-white rounded-full hover:text-color-2 hover:bg-white transition-all duration-300 hover:shadow-lg"
                        >Check Availability</button>
                    </form>
                </Box>
            </div>
        </section>
    );
};

export default RoomsPage;
