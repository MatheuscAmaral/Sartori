import Layout from "@/components/layout";
import Home from "@/pages/home";
import Contact from "@/pages/contact";
import { createBrowserRouter } from "react-router-dom";
import Sartori from "@/pages/sartori";
import Services from "@/pages/services";

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
            },
            {
                path: "/servicos",
                element: <Services/>
            }
        ]
    }
]);

export default router;