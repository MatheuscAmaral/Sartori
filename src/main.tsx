import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/index.tsx'
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <div>
        <Toaster
            position="top-right"
            reverseOrder={false}
        />

        <RouterProvider router={router}/>
    </div>
)
