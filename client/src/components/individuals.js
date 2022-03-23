import { useState, useEffect } from "react";
// import Form from "./form";

function Individuals() {

    const [individuals, setIndividuals] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4002/api/individuals")
        .then((response) => response.json())
        .then(individual =>{
            //setAnials((animals[3]));
            //console.log("Testing", typeof animals);
            for (let index in individual){
               if( index !== "3"){
                   setIndividuals(individual);
               }
            };       
        })
        
    }, []);

    

    // const addIndividual = (newIndividual) => {
    //     //console.log(newAnimal);
    //     //postStudent(newAnimal);
    //     setIndividuals((individuals) => [...individuals, newIndividual]);
    // }


    return (
      <div className="individuals">
        <h2> List of Animals </h2>
        <ul>
            {individuals.map(individual =>
                <li key={individual.id}> {individual.nickname} {individual.species}</li>)}
        </ul>
        {/* <Form addIndividual={addIndividual} /> */}
      </div>
    );
  }
  
  export default Individuals;