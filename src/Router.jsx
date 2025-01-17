import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Registration from "./component/Registration";

import About from "./component/About";
import Home from "./component/Home";
import Login from "./component/Login";

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

        
    
            


            
        ]


        }

]);
export default routes;