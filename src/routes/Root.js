import Navigation from "components/Navigation";

const { Outlet } = require("react-router-dom");

const Root = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default Root;
