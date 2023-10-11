import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="relative w-390 h-844 border m-auto mt-8 flex flex-col items-center">
      {" "}
      <p>HOME PAGE</p>
      <NavLink to="/root" className="absolute top-20">
        <button className="border p-5 bg-primary-color text-white rounded-md">
          Click Here!
        </button>
      </NavLink>
    </div>
  );
}

export default Home;
