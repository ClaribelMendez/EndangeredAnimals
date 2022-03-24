import { useState, useEffect } from "react";
import Form from "./form";

function Sightings() {

    const [sighting, setSighting] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4002/api/sightings")
        .then((response) => response.json())
        .then(sighting =>{
            //setAnials((animals[3]));
            //console.log("Testing", typeof animals);
            for (let index in sighting){
               if( index !== "3"){
                   setSighting(sighting);
               }
            };       
        })
        
    }, []);

    

    const addSighting = (newSighting) => {
        //console.log(newAnimal);
        // postSighting(newSighting);
        setSighting((sighting) => [...sighting, newSighting]);
    }


    return (
      <div className="sighting">
        <h2> List of sightings </h2>
        <ul>
            {sighting.map(sighting =>
                <li key={sighting.id}> {sighting.individualseen} {sighting.healthy}</li>)}
        </ul>
        <Form addSighting={addSighting} />
      </div>
    );
  }
  
  export default Sightings;