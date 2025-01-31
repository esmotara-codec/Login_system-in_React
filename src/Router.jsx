import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Registration from "./component/Registration";

import About from "./component/About";
import Home from "./component/Home";
import Login from "./component/Login";
import Contact from "./component/Contact";
import Dashboard from "./component/Dashboard";

const routes= createBrowserRouter ([
    {
        path:"/",
        element :<App/>,
        children: [
        
            {
                path:"/",
                element:<Home/>,
            },

            {
                path:"register",
                element:<Registration/>,
            },

            {
                path:"login",
                element:<Login/>,
            },
            {
                path:"about",
                element:<About/>,
            },
            {
                path:"contact",
                element:<Contact/>,
            },
            {
                path:"dashboard",
                element:<Dashboard/>,
            },



        
    
            


            
        ]


        }

]);
export default routes;