import { useState, useEffect } from "react";
import Form from "./form";

function Animals() {

    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4002/api/animals")
        .then((response) => response.json())
        .then(animals =>{
            //setStudents((students[3]));
            //console.log("Testing", typeof students);
            for (let index in animals){
               if( index !== "3"){
                   setAnimals(animals);
               }
            };       
        })
        
    }, []);

    

    const addAnimal = (newAnimal) => {
        //console.log(newStudent);
        //postStudent(newStudent);
        setAnimals((animals) => [...animals, newAnimal]);
    }


    return (
      <div className="animals">
        <h2> List of Animals </h2>
        <ul>
            {animals.map(animal =>
                <li key={animal.id}> {animal.commonname} {animal.scientificname}</li>)}
        </ul>
        <Form addAnimal={addAnimal} />
      </div>
    );
  }
  
  export default Animals;