import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <p>HOME PAGE</p>
      <NavLink to="/root">Go To App</NavLink>
    </div>
  );
}

export default Home;
