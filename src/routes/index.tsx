import Layout from "@/components/layout";
import Home from "@/pages/home";
import Contact from "@/pages/contact";
import { createBrowserRouter } from "react-router-dom";
import Sartori from "@/pages/sartori";
import Services from "@/pages/services";
import Project from "@/pages/services/project";
import Products from "@/pages/products";
import Product from "@/pages/products/product";

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
            },
            {
                path: "/servicos/:project",
                element: <Project/>
            },
            {
                path: "/produtos",
                element: <Products/>
            },
            {
                path: "/produtos/:product",
                element: <Product/>
            },
        ]
    }
]);

export default router;