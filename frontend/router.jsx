import { createBrowserRouter } from "react-router-dom";
import { confirmUser } from "./src/utils/auth";
import { LoginPage } from "./src/Pages/LoginPage"
import App from "./src/App";
import { Home } from "./src/components/Home";


const router = createBrowserRouter([
  {
    path: "/",
    loader: confirmUser,
    element: <App />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: "/home",
        element: <Home />
      }
    ]
  },
     
]);

export default router;
