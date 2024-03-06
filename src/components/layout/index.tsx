import Header from "../header";
import Footer from "../footer";
import { Outlet } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const Layout = () => {
    return (
        <div>
            <Header/>
                <Outlet/>
                <a href="https://wa.me/31971222983" target="_blank" className="bg-green-600 hover:bg-green-500 transition-all max-w-16 p-3 rounded-full fixed bottom-5 right-5">
                    <FaWhatsapp fontSize={30} className="text-white" />
                </a>
            <Footer/>
        </div>
    )
}

export default Layout;