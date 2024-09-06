import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Landing } from "./components/Landing";
import { confirmUser } from "./utils/auth";

function App() {

  // TODO: fix use effect so that use object populates

  console.log("App.jsx rendered");
  const loaderData = useLoaderData();
  const [user, setUser] = useState(loaderData);
  console.log("App.jsx user1: ", user)
  const navigate = useNavigate();
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  const fetchUserData = async () => {
    const user = await confirmUser();
    setUser(user)
  };

  useEffect(() => {
    fetchUserData(); // Fetch data every time App.jsx renders
  }, []); 

  useEffect(() => {
    const publicRoutes = ['/', '/signup/', '/login/']
      const isPublicRoute = publicRoutes.includes(location.pathname)
      console.log("Location pathname: ", location.pathname)
      console.log("App.jsx user2: ", user)
      if(!user && !isPublicRoute){
        navigate('login') 
      } else if (user && isPublicRoute) {
        navigate('home')
      }
    },[location.pathname]);

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
