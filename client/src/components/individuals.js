import { useState, useEffect } from "react";

const IndividualsDropDown = (prop) => {
  const [individuals, setIndividuals] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4002/api/individuals`)
      .then((response) => response.json())
      .then((individuals) => {
        setIndividuals(individuals);
      });
  }, []);

  return (
    <div>
      <label>Individuals</label>
      <select classname="dropdowns" onChange={prop.handleIndividualNickName} required>
        <option hidden>Select</option>
        {individuals.map((individual) => (
          <option value={individual.nickname} key={individual.id}>
            {individual.nickname}
          </option>
        ))}
      </select>
    </div>
  );
};

export default IndividualsDropDown;