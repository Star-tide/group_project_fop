import { createBrowserRouter } from "react-router-dom";
import { Home } from "./src/components/Home";
import { confirmUser } from "./src/utils/auth";


const router = createBrowserRouter([
  {
    path: "/",
    loader: confirmUser,
    element: <Home />
  },
]);

export default router;
