import { useState } from "react";

const Form = (props) => {
    const [animal, setAnimal] = useState({
        commonname: "",
        scientificname: "",
        numbersinthewild: "",
        conservationstatuscode: ""
        // timestamp ***make sure to add these***
    
    });

    //create functions that handle the event of the user typing into the form
    const handleNameChange = (event) => {
        const commonname = event.target.value;
        setAnimal((animal) => ({ ...animal, commonname }));

    }

    const handleScientificNameChange = (event) => {
        const scientificname = event.target.value;
        setAnimal((animal) => ({ ...animal, scientificname }));

    }


    const handleNumbersInTheWildChange = (event) => {
        const numbersinthewild = event.target.value;
        setAnimal((animal) => ({ ...animal, numbersinthewild }));

    }


    const handleConservationStatusChange = (event) => {
        const conservationstatuscode = event.target.value;
        setAnimal((animal) => ({ ...animal, conservationstatuscode }));

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
            numbersinthewild: "",
            conservationstatuscode: ""
        }
        e.preventDefault();
        postAnimal(animal);
        setAnimal(animal)
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
                    placeholder="Scientific Name"
                    required
                    value={animal.scientificname}
                    onChange={handleScientificNameChange}
                />
                     <label> Numbers In Wild </label>
                <input
                    type="number"
                    id="add-numbersinthewild"
                    placeholder="Numbers In The Wild"
                    // required
                    value={animal.numbersinthewild}
                    onChange={handleNumbersInTheWildChange}
                />
                     <label>Conservation Status Code</label>
                <input
                    type="text"
                    id="add-conservationstatuscode"
                    placeholder="Conservation Status Code"
                    // required
                    value={animal.conservationstatuscode}
                    onChange={handleConservationStatusChange}
                />
            </fieldset>
            <button type="submit">Add</button>
        </form>
    );
};

export default Form;