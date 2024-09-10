import { createBrowserRouter } from "react-router-dom";
import { confirmUser } from "./src/utils/auth";
import { LoginPage } from "./src/Pages/LoginPage";
import App from "./src/App";
import { Home } from "./src/components/Home";
import { SignUp } from "./src/components/Signup";
import { LearningModule } from "./src/Pages/LearningModule";
import { Course } from "./src/Pages/Course";
import { CourseDetails } from "./src/Pages/CourseDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: confirmUser,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/learn/:course_id/",
        element: <LearningModule />,
      },
      {
        path: "/courses/",
        element: <Course />,
      },
      {
        path: "/course/:course_id/",
        element: <CourseDetails />,
      },
      // {
      //   path: "/landing",
      //   element: <Landing />
      // }
    ],
  },
]);

export default router;
