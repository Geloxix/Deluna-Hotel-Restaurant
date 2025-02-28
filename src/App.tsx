import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import 'animate.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { RoomsTypes } from "./constants/types";
import { CheckInDataTypes } from "./constants/checkInContext";
import { CheckinContext } from "./constants/checkInContext";
import { RoomsContext } from "./constants/roomsContext";

//main layout
import MainLayOut from "./layout/MainLayOut";

//pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BookNowPage from "./pages/BookNowPage";
import RoomPage, { roomDataLoader} from "./pages/RoomPage";
import RoomsPage from "./pages/RoomsPage";
import AvailableRoomsPage from "./pages/AvailableRoomsPage";
import PagesPage from "./pages/PagesPage";
import ContactPage from "./pages/ContactPage";


const App = () => {

    const [ rooms, setRooms ] = useState<RoomsTypes []>([]);
    const [ availableRooms, setAvailableRooms ] = useState<RoomsTypes []>([]);
    const [ error, setError ] = useState<string>();


    const [ nightsCount, setNightsCount ] = useState<number>(0); 
    const [ adultsCount, setAdultsCount ] = useState<string>('');
    const [ childrensCount, setChildrensCount ] = useState<string>('');
    
    const checkInsData: CheckInDataTypes = {
        nightsCount,
        adultsCount,
        childrensCount
    };


    useEffect(() => {

        const fetchRooms = async() => {
            try {
                const res = await axios.get(`/api/rooms`);
                setRooms(res.data);

            } catch (err: any) {
                setError(err.message);
                console.log(error);
            } 

        };

        fetchRooms();
    },[]);


    //function that handle getting avaialble rooms
    const handleGetAvailableRooms = async (totalCapacity: number) => {
        try {
            const res = await axios.get(`/api/rooms`);
            const availRooms = res.data
            setAvailableRooms(availRooms.filter((room: RoomsTypes) => room.capacity <= totalCapacity && room.available));
        } catch (err: any) { 
            setError(err.message); 
            console.log(err);  
        }
    };

    

    const router = createBrowserRouter([
        {
            path: '/',
            element: <MainLayOut />,
            children: [
                {
                    path: '/',
                    element: <HomePage handleGetAvailableRooms={handleGetAvailableRooms}  setNightsCount={setNightsCount} childrensCount={childrensCount}  setChildrensCount={setChildrensCount} adultsCount={adultsCount} setAdultsCount={setAdultsCount}  />,
                },
                {
                    path: '/about',
                    element: <AboutPage />,
                },
                {
                    path: '/rooms',
                    element: <RoomsPage rooms={rooms} handleGetAvailableRooms={handleGetAvailableRooms} />,
                },
                {
                    path: '/availableRooms',
                    element: <AvailableRoomsPage availableRooms={availableRooms} nightsCount={nightsCount} />,
                },
                {
                    path: '/rooms/:roomId',
                    element: <RoomPage />,
                    loader: roomDataLoader,
                },
                {
                    path: '/pages',
                    element: <PagesPage />,
                },
                {
                    path: '/contact',
                    element: <ContactPage />,
                }
            ],        
        },
        {
            path: '/book-now',
            element: <BookNowPage />
        }
    ]);


    return (

        <RoomsContext.Provider value={availableRooms}>
            <CheckinContext.Provider value={checkInsData}>
                <RouterProvider router={router} />
            </CheckinContext.Provider>
        </RoomsContext.Provider>
    );
};

export default App;
