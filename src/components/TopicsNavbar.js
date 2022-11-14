import { NavLink } from "react-router-dom";

function TopicsNavbar() {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "rgb(250 204 21)" : null,
      textDecoration: isActive ? "underline" : "none",
    };
  };

  return (
    <nav className="py-6">
      {/* Nav Links */}
      <ul className="flex justify-center space-x-16 text-gray-400">
        <NavLink to="/" style={navLinkStyles}>
          Home
        </NavLink>
        <NavLink to="/sports" style={navLinkStyles}>
          Sports
        </NavLink>

        <NavLink to="/business" style={navLinkStyles}>
          Business
        </NavLink>
        <NavLink to="/entertainment" style={navLinkStyles}>
          Entertainment
        </NavLink>
      </ul>
      <div className="mx-auto my-4 border lg:max-w-7xl" />
    </nav>
  );
}

export default TopicsNavbar;
