import { createBrowserRouter, redirect } from "react-router-dom";
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
    loader: () => {
      // console.log(localStorage.getItem("access_token"), "==============");
      if (!localStorage.getItem("access_token")) return redirect("/");
      return null;
    },
  },
]);

export default router;
