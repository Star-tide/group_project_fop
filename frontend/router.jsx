 import { createBrowserRouter } from "react-router-dom";
import { confirmUser } from "./src/utils/auth";
import { LoginPage } from "./src/Pages/LoginPage"
import App from "./src/App";
import { Home } from "./src/components/Home";
import { SignUp } from "./src/components/Signup";
import { LearningModule } from "./src/Pages/LearningModule";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: confirmUser,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/learn",
        element: <LearningModule />
      },
      // {
      //   path: "/landing",
      //   element: <Landing />
      // }
    ]
  },
     
]);

export default router;
