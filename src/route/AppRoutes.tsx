import {createBrowserRouter,} from "react-router-dom";

import LayoutPage from "../layout/LayoutPage";
import { DashBoard, Home, Login, SignUp } from "../pages";


export const routes = createBrowserRouter([
    {
        path:'/',
        element:<LayoutPage/>,
        children:[
            {
                path:'/login',
                element:<Login/>,
            },
            {
                path:'/signup',
                element:<SignUp/>,
            },
            {
                path:'/dashboard',
                element:<DashBoard/>,
                children:[
                    {
                        path:'/dashboard/home',
                        element:<Home/>
                    }
                ]
            },
        ]
    }
]);