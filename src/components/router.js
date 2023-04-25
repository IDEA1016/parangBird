import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../routes/Home";
import Auth from "../routes/Auth";
import Profile from "../routes/Profile";
import EditProfile from "../routes/EditProfile";
import Root from "routes/Root";

const useRouter = (isLoggedIn) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: isLoggedIn ? <Root /> : <Auth />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/edit-profile",
          element: <EditProfile />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
  ]);
  return router;
};

const Router = ({ isLoggedIn }) => {
  const router = useRouter(isLoggedIn);
  return <RouterProvider router={router} />;
};

export default Router;
