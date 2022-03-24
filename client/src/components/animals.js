import { useState, useEffect } from "react";
// import Form from "./form";

function Animals() {

    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4002/api/animals")
        .then((response) => response.json())
        .then(animals =>{
            //setAnials((animals[3]));
            //console.log("Testing", typeof animals);
            for (let index in animals){
               if( index !== "3"){
                   setAnimals(animals);
               }
            };       
        })
        
    }, []);

    

    // const addAnimal = (newAnimal) => {
    //     //console.log(newAnimal);
    //     //postStudent(newAnimal);
    //     setAnimals((animals) => [...animals, newAnimal]);
    // }


    return (
      <div 
      className="left">
      <div className="animals">
        <h2> List of Animals </h2>
        <ul>
            {animals.map(animal =>
                <li key={animal.id}> {animal.commonname} {animal.scientificname} {animal.numbersinthewild} {animal.conservationstatuscode}</li>)}
        </ul>
        {/* <Form addAnimal={addAnimal} /> */}
      </div>
      </div>

    );
  }
  
  export default Animals;