import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Landing } from "./components/Landing";

function App() {

  // TODO: fix use effect so that use object populates

  console.log("App.jsx rendered");
  const [user, setUser] = useState(useLoaderData());
  const navigate = useNavigate();
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  console.log(user);

  useEffect(() => {
    const publicRoutes = ['/', '/login']
    const isPublicRoute = publicRoutes.includes(location.pathname)
    if(!user && !isPublicRoute){
      navigate('/login')
    } else if (user && isPublicRoute) {
      navigate('/home')
    }
  },[location.pathname, user]);

  return (
    <>
    <Navbar />
    {isLandingPage && <Landing />}
    <Outlet context= {{
      user,
      setUser,
    }}/>
    </>
  )
}

export default App
