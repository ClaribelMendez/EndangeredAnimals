import { useState } from "react";

const Form = (props) => {
    const [sighting, setSighting] = useState({
        datetime: '',
        individualseen: "",
        locationofsighting: "",
        healthy: 'healthy = Boolean',
        emailaddressofsighter: "",
        creationtime: '',
    
    });

    // const dropdown = [1,2,3]

    //create functions that handle the event of the user typing into the form
    const handledatetime = (event) => {
        const datetime = event.target.value;
        setSighting((sighting) => ({ ...sighting, datetime }));

    }

    const handleindividualseenChange = (event) => {
        const individualseen = event.target.value;
        setSighting((sighting) => ({ ...sighting, individualseen }));

    }


    const handlelocationofsightingChange = (event) => {
        const locationofsighting = event.target.value;
        setSighting((sighting) => ({ ...sighting, locationofsighting }));

    }

    const handlehealthy = (event) => {
        const healthy = event.target.value;
        setSighting((sighting) => ({ ...sighting, healthy }));

    }


    const handlecreationtime = (event) => {
        const creationtime = event.target.value;
        setSighting((sighting) => ({ ...sighting, creationtime }));

    }

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
            datetime: "",
            individualseen: "",
            locationofsighting: "",
            healthy: true,
            creationtime: '',

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
                <label>Date / Time</label>
                <input
                    type="datetime-local"
                    id="add-datetime"
                    placeholder="ex: 3/22/22 12:00:00"
                    required
                    value={sighting.datetime}
                    onChange={handledatetime}

                />
                <label>Individual Seen</label>
                <input
                    type="text"
                    id="add-individualseen"
                    placeholder="nickname"
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
                     <label>Healthy or Not</label>
                     <select name = 'healthy' onChange ={handlehealthy}>
                        <option value='TRUE'>TRUE</option>
                        <option value='FALSE'>FALSE</option>
            

                    </select>
                    <label>Record Creation time</label>
                <input
                    type="datetime-local"
                    id="add-creationtime"
                    placeholder="0"
                    required
                    value={sighting.creationtime}
                    onChange={handlecreationtime}
                />
            </fieldset>
            <button type="submit">Add</button>
        </form>
    );
};

export default Form;