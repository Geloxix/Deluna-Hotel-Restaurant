import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";


interface CheckInProps {
    handleGetAvailableRooms: (args: number) => void; 
    setNightsCount: any;
    setRoomsCount: any;
    roomsCount: number;
    adultsCount: string;
    setAdultsCount: any;
    childrensCount: string;
    setChildrensCount: any;
};

const CheckIn = ({ handleGetAvailableRooms, setNightsCount, adultsCount, setAdultsCount, childrensCount, setChildrensCount  }: CheckInProps) => {
    const navigate = useNavigate();

    const [ checkIn, setCheckIn ] = useState<string>(''); 
    const [ checkOut, setCheckOut ] = useState<string>('');
    const [ roomsCount, setRoomsCount ] = useState<string>('');

    let totalCountPersonsCount = parseInt(adultsCount) + parseInt(childrensCount);

    const handleSearchRooms = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        handleGetAvailableRooms(totalCountPersonsCount);

        if (new Date(checkOut) <= new Date(checkIn) ) {
            alert('Check out must be later than Check in date');
            return;
        }

        // calclate the checkout date and checkin date and get that days
        let getMinsDiff = new Date(checkOut) - new Date(checkIn);
        let getNightsCount = (getMinsDiff  / (1000 * 60 * 60 * 24));

        setNightsCount(getNightsCount);

        return navigate(`/availableRooms`);
    };

    

    return(
        <div className="flex items-center justify-center absolute bg-transparent bottom-[-300px] w-full font-poppins">
            <form 
                onSubmit={handleSearchRooms}
                className="flex items-center gap-10 px-[60px] py-[50px] bg-white rounded-xl shadow-lg">
                <div className="form-divs">
                    <label htmlFor="">Check in</label>
                    <input 
                        type="date" 
                        name="checkIn" 
                        id="checkIn" 
                        className="form-divs-input" 
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                    />
                </div>
                
                <div className="form-divs">
                    <label htmlFor="checkOut">Check Out</label>
                    <input 
                        type="date" 
                        name="checkOut" 
                        id="checkOut"
                        className="form-divs-input" 
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                    />
                </div>

                <div className="form-divs">
                    <label htmlFor="room">Room</label>
                    <select 
                        name="room" 
                        id="room" 
                        className="form-divs-select"
                        value={roomsCount}
                        onChange={(e) => setRoomsCount(e.target.value)}
                    >
                        <option value={1}>01</option>
                        <option value={2}>02</option>
                        <option value={3}>03</option>
                        <option value={4}>04</option>
                        <option value={5}>05</option>
                        <option value={6}>06</option>
                    </select>
                </div>

                <div className="form-divs">
                    <label htmlFor="adult">Adult</label>
                    <select 
                        name="adult" 
                        id="adult" 
                        className="form-divs-select"
                        value={adultsCount}
                        onChange={(e) => setAdultsCount(e.target.value)}
                    >
                        <option value={1}>01</option>
                        <option value={2}>02</option>
                        <option value={3}>03</option>
                        <option value={4}>04</option>
                        <option value={5}>05</option>
                        <option value={6}>06</option>
                    </select>
                </div>

                <div className="form-divs">
                    <label htmlFor="children">Children</label>
                    <select 
                        name="children" 
                        id="children" 
                        className="form-divs-select"
                        value={childrensCount}
                        onChange={(e) => setChildrensCount(e.target.value)}
                    >
                        <option value={1}>01</option>
                        <option value={2}>02</option>
                        <option value={3}>03</option>
                        <option value={4}>04</option>
                        <option value={5}>05</option>
                        <option value={6}>06</option>
                    </select>
                </div>

                <button type="submit" className="px-[5rem] mb-[-22px]  py-[1rem] bg-color-1  text-white hover:text-color-1 hover:bg-white hover:shadow-2xl transition-all duration-700ms">Search</button>
            </form>
        </div>
    );
};

export default CheckIn;
