import Layout from "@/components/layout";
import Home from "@/pages/home";
import Contact from "@/pages/contact";
import { createBrowserRouter } from "react-router-dom";
import Sartori from "@/pages/sartori";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/contato",
                element: <Contact/>
            },
            {
                path: "/sobre",
                element: <Sartori/>
            }
        ]
    }
]);

export default router;