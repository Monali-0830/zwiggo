import React, { Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter , RouterProvider , Outlet } from 'react-router-dom';
import Contact  from './components/Contact';
import Error  from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
const About = React.lazy(() =>import('./components/About'))
import userContext from './utils/userContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';
import Login from "./components/Login";
import Register from "./components/Register";
import 'react-toastify/dist/ReactToastify.css';


import { ToastContainer}  from "react-toastify";


const App = () =>{
    const [userName,setuserName] = useState();

    useEffect(()=>{
        const data = {
            name:"Monali Verma"
        }
        setuserName(data.name);
    },[]);

    return(
        <Provider store={appStore}>
        <userContext.Provider value={{username:userName , setuserName}}>
        <div className="app">
            <Header />
            <Outlet />
            <ToastContainer // 👇 Add this here
                        position="top-right"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
        </div>
        </userContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element :<App />,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/about",
                element:<Suspense fallback={<div>Loading....</div>}
                ><About/></Suspense>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu />
                
            },{
                path:"/cart",
                element:<Cart />
            }
        ],
        errorElement:<Error />
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(< RouterProvider router={appRouter}/>);