import { NavLink as Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/cats">Cats</Link>
      <Link to="/Dogs">Dogs</Link>
    </div>
  );
};
export default Nav;
