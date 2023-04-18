import { createBrowserRouter } from "react-router-dom";
import Home from "../routes/Home";
import Auth from "../routes/Auth";
import Profile from "../routes/Profile";
import EditProfile from "../routes/EditProfile";

const useRouter = (isLoggedIn) => {
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

export default useRouter;
