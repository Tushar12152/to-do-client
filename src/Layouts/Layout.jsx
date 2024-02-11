import { Outlet } from "react-router-dom";

import Footer from "../Component/Footer";
import Nav from "../Component/Nav";

const Layout = () => {
    return (
        <div>
            <div className="min-h-screen">
            <Nav/>
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;