import { createBrowserRouter } from "react-router-dom";
import HomePage from "../views/HomePage";
import LoginPage from "../views/LoginPage";
import RegisterPage from "../views/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
]);

export default router;
