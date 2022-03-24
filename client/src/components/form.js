import { useState } from "react";

const Form = (props) => {
    const [sighting, setSighting] = useState({
        // datetime: 12/12/12,
        individualseen: "",
        locationofsighting: "",
        healthy: true,
        emailaddressofsighter: "",
        // creationtime: 12/12/12,
    
    });

    // const dropdown = [1,2,3]

    //create functions that handle the event of the user typing into the form
    // const handleNameChange = (event) => {
    //     const datetime = event.target.value;
    //     setSighting((sighting) => ({ ...sighting, datetime }));

    // }

    const handleindividualseenChange = (event) => {
        const individualseen = event.target.value;
        setSighting((sighting) => ({ ...sighting, individualseen }));

    }


    const handlelocationofsightingChange = (event) => {
        const locationofsighting = event.target.value;
        setSighting((sighting) => ({ ...sighting, locationofsighting }));

    }


    // const handleConservationStatusChange = (event) => {
    //     const healthy = event.target.value;
    //     setSighting((sighting) => ({ ...sighting, healthy }));

    // }

    //A function to handle the post request
    const postSighting = async (newSighting) => {
        const response = await fetch('http://localhost:4002/api/sightings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newSighting)
        });
        const data = await response.json();
        console.log("From the post ", data);
        props.addSighting(data);
    }

    const handleSubmit = async (e) => {
        let resetState = {
            // datetime: "",
            individualseen: "",
            locationofsighting: "",
            healthy: ""
        }
        e.preventDefault();
        await postSighting(sighting);
        // setSighting(sighting)
        setSighting(resetState)
        
    };



    return (
        <form 
        className=" right"
        onSubmit={handleSubmit}>
            <fieldset>
                {/* <label>Date / Time</label>
                <input
                    type="number"
                    id="add-datetime"
                    placeholder="ex: 3/22/22 12:00:00"
                    required
                    value={sighting.datetime}
                    onChange={handleNameChange}

                /> */}
                <label>Individual Seen</label>
                <input
                    type="text"
                    id="add-individualseen"
                    placeholder="ex: Gigantus"
                    required
                    value={sighting.individualseen}
                    onChange={handleindividualseenChange}
                />
                     <label> Location of Sighting </label>
                <input
                    type="text"
                    id="add-locationofsighting"
                    placeholder = "ex: nyc"
                    // required
                    value={sighting.locationofsighting}
                    onChange={handlelocationofsightingChange}
                />
                     {/* <label>Healthy or Not</label>
                     <select>
         <option value={setSighting}></option>
          </select> */}

            </fieldset>
            <button type="submit">Add</button>
        </form>
    );
};

export default Form;