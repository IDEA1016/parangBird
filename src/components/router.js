import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../routes/Home";
import Auth from "../routes/Auth";
import Profile from "../routes/Profile";
import EditProfile from "../routes/EditProfile";

const useRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: isLoggedIn ? <Home /> : <Auth />,
    },
    {
      path: "/edit-profile",
      element: <EditProfile />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ]);
  return router;
};

const Router = () => {
  const router = useRouter();
  return <RouterProvider router={router} />;
};

export default Router;
