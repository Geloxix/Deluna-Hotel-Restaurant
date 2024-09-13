import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import 'animate.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//main layout
import MainLayOut from "./layout/MainLayOut";

//pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import RoomPage, { roomDataLoader} from "./pages/RoomPage";
import RoomsPage from "./pages/RoomsPage";
import PagesPage from "./pages/PagesPage";
import ContactPage from "./pages/ContactPage";


const App = () => {
    const [ rooms, setRooms ] = useState([]);
    const [ error, setError ] = useState<string>();

    useEffect(() => {

        const fetchRooms = async() => {
            try {
                const res = await axios.get('/api/rooms');
                setRooms(res.data);

            } catch (error: any) {
                setError(error.message);
            } 

        };


        fetchRooms();

    },[]);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <MainLayOut />,
            children: [
                {
                    path: '/',
                    element: <HomePage />,
                },
                {
                    path: '/about',
                    element: <AboutPage />,
                },
                {
                    path: '/rooms',
                    element: <RoomsPage rooms={rooms} />,
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
            ]
        }
    ]);


    return (
        <RouterProvider router={router} />
    );
};

export default App;
