import { NavLink, useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  console.log(loadedCoffees);
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div className="m-20">
      <h1 className="text-2xl font-semibold text-center text-purple-600">
        Espresso Emporium
      </h1>
      <div className="text-center text-blue-500 underline my-5">
        <NavLink style={{ marginRight: "25px" }} to="/signin">
          Login
        </NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/users">Users</NavLink>
      </div>
      <h2 className="text-center text-2xl font-semibold mt-12">
        Total Coffee: {coffees.length}
      </h2>

      <div className="grid md:grid-cols-2 gap-4 my-20">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
