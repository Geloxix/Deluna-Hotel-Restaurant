import { RouterProvider, createBrowserRouter } from "react-router-dom";


//main layout
import MainLayOut from "./layout/MainLayOut";

//pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import RoomsPage from "./pages/RoomsPage";
import PagesPage from "./pages/PagesPage";
import ContactPage from "./pages/ContactPage";

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
                element: <RoomsPage />,
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

const App = () => {

    return (
        <RouterProvider router={router} />
    );
};

export default App;
