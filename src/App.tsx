import './App.css';
import {RouterProvider,} from "react-router-dom";
import { routes } from './route/AppRoutes';

const App=()=><RouterProvider router={routes}/>

export default App;
