import { Outlet } from "react-router-dom";

import NavBar from "../components/homepage-components/NavBar";

const MainLayOut = () => {
    return (
        <main>
            <NavBar />
            <Outlet />
        </main>
    );
};

export default MainLayOut;
