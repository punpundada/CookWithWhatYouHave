import {createBrowserRouter,} from "react-router-dom";

import LayoutPage from "../layout/LayoutPage";
import Login from "../pages/Login";
export const routes = createBrowserRouter([
    {
        path:'/',
        element:<LayoutPage/>,
        children:[
            {
                path:'/login',
                element:<Login/>,
            }
        ]
    }
]);