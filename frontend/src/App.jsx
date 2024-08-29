import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function App() {

  console.log("App.jsx rendered")
  const [user, setUser] = useState(useLoaderData());
  const navigate = useNavigate()

  console.log(user)

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
    <Outlet context= {{
      user,
      setUser,
    }}/>
    </>
  )
}

export default App
