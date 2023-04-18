import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import useRouter from "components/router";
import { authService } from "fbase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <RouterProvider router={useRouter(isLoggedIn)} />
    </>
  );
}

export default App;
