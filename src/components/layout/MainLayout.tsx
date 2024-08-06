import { Outlet } from "react-router-dom";
import BottomNavigation from "../ui/BottomNavigation";
import Navbar from "../ui/Navbar";

const MainLayout = () => {
    return (
        <div className="min-h-screen w-full bg-[#0A0019] ">
            <nav className="h-[20vh] z-50 relative">
                <Navbar />
            </nav>
            <Outlet />
            <BottomNavigation />

        </div>
    );
};

export default MainLayout;