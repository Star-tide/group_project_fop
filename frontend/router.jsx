import { createBrowserRouter } from "react-router-dom";
import { Home } from "./src/components/Home";
import { confirmUser } from "./src/utils/auth";
import { LoginPage } from "./src/Pages/LoginPage"


const router = createBrowserRouter([
  {
    path: "/",
    loader: confirmUser,
    element: <Home />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  }
     
    
]);

export default router;
