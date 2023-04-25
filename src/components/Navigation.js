import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/edit-profile">Edit Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
