import "./styles.css";
import { useState } from "react";

/*
  INSTRUCTIONS:
  Create a "todo"(add cities) app with the following criteria.
    1. The user can add new cities
    2. The user can remove existing cities items
*/

export default function App() {
  const [City, setcity] = useState("");
  const [cities, setcities] = useState([]);
  const addCities = (city) => {
    setcities([...cities, city]);
    //Complete function
  };
  const removecity = (city) => {
    console.log(city);
    alert(city);
    setcities(cities.filter((item) => item !== city));
  };

  return (
    <div className="App">
      <input
        type="text"
        value={City}
        onChange={(e) => setcity(e.target.value)}
      />
      <button onClick={() => addCities(City)}>Add</button>
      <ul>
        {cities.map((item, indx) => (
          <div key={indx} className="list">
            <li key={indx}>{item}</li>
            <button onClick={() => removecity(item)}>X</button>
          </div>
        ))}
      </ul>
    </div>
  );
}
