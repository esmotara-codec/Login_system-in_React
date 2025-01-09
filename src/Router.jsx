import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./component/Login";
import Registration from "./component/Registration";
import Home from "./component/Home";

const routes= createBrowserRouter ([
    {
        path:"/",
        element :<App/>,
        children: [
        
            {
                path:"/",
                element:<Login/>,
            },
            {
                path:"register",
                element:<Registration/>,
            },

            {
                path:"home",
                element:<Home/>,
            },
            


            
        ]


        }

]);
export default routes;