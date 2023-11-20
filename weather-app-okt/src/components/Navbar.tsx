import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbarContainer">
      <Link to="/today">Today</Link>
      <Link to="/forecast">Forecast</Link>
      <Link to="/mylocation">My location</Link>
    </div>
  );
};
