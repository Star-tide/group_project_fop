import { createBrowserRouter } from "react-router-dom";
import { confirmUser } from "./src/utils/auth";
import { LoginPage } from "./src/Pages/LoginPage";
import App from "./src/App";
import { Create } from "./src/components/Create";
import { SignUp } from "./src/components/Signup";
import { LearningModule } from "./src/Pages/LearningModule";
import { Course } from "./src/Pages/Course";
import { CourseDetails } from "./src/Pages/CourseDetails";
import { Homepage } from "./src/Pages/Homepage"
import { Navbar } from "./src/components/Navbar";

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
        element: <Homepage />,
      },
      {
        path: "/create",
        element: <Create />,
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
        element: (
          <>
            <Navbar />
            <Course />
          </>
      ),
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
