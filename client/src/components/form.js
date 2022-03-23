import { useState } from "react";

const Form = (props) => {
    const [animal, setAnimal] = useState({
        commonname: "",
        scientificname: "",
    
    });

    //create functions that handle the event of the user typing into the form
    const handleNameChange = (event) => {
        const commonname = event.target.value;
        setAnimal((animal) => ({ ...animal, commonname }));

    }

    const handleLastnameChange = (event) => {
        const scientificname = event.target.value;
        setAnimal((animal) => ({ ...animal, scientificname }));

    }

    //A function to handle the post request
    const postAnimal = async (newAnimal) => {
        const response = await fetch('http://localhost:4002/api/animals', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newAnimal)
        });
        const data = await response.json();
        console.log("From the post ", data);
        props.addAnimal(data);
    }

    const handleSubmit = (e) => {
        let resetState = {
            commonname: "",
            scientificname: "",
        }
        e.preventDefault();
        postAnimal(animal);
        // setAnimal(animal)
        setAnimal(resetState)
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label>Common Name</label>
                <input
                    type="text"
                    id="add-commonname"
                    placeholder="Common Name"
                    required
                    value={animal.commonname}
                    onChange={handleNameChange}

                />
                <label>Scientific Name</label>
                <input
                    type="text"
                    id="add-scientificname"
                    placeholder="Last Name"
                    required
                    value={animal.scientificname}
                    onChange={handleLastnameChange}
                />
            </fieldset>
            <button type="submit">Add</button>
        </form>
    );
};

export default Form;