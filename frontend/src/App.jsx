import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Landing } from "./components/Landing";
import { confirmUser } from "./utils/auth";

function App() {

  // TODO: fix use effect so that use object populates

  console.log("App.jsx rendered");
  const [user, setUser] = useState(useLoaderData());

  console.log("User from app:", user)
  const navigate = useNavigate();
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  useEffect(() => {
    console.log('Useeffect line 30')
    const publicRoutes = ['/', '/signup/', '/login/']
      const isPublicRoute = publicRoutes.includes(location.pathname)
      if(!user && !isPublicRoute){
        console.log('tried to route to login from app')
        navigate('/login') 
      } else if (user && isPublicRoute) {
        console.log('tried to route to home from app')
        navigate('/home')
      }
    },[user, location.pathname]);

  return (
    <>
    {/* <Navbar /> */}
    {isLandingPage && <Landing />}
    <Outlet context= {{
      user,
      setUser,
    }}/>
    </>
  )
}

export default App
