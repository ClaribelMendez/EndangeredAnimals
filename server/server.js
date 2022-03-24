const express = require('express');
const cors = require('cors');
require('dotenv').config()
const db = require('../server/db/db-connection.js'); 

const app = express();

const PORT = 4002;
app.use(cors());
app.use(express.json());

//creates an endpoint for the route /api
app.get('/', (req, res) => {
    res.json({ message: 'Hello from My ExpressJS' });
});

//create the get request
app.get('/api/animals', cors(), async (req, res) => {
    // const STUDENTS = [

    //     { id: 1, commonname: 'Elephant', scientificname: 'Latinus', numberinthewild: 200},
    // ];
    // res.json(endangeredanimals);
    try{
        const { rows: animals } = await db.query('SELECT * FROM animals');
        res.send(animals);
    } catch (e){
        return res.status(400).json({e});
    }
});

//create the POST request
app.post('/api/animals', cors(), async (req, res) => {
    const newAnimal = { commonname: req.body.commonname, scientificname: req.body.scientificname, 
        numbersinthewild: req.body.numbersinthewild, conservationstatuscode: req.body.conservationstatuscode}

     console.log([newAnimal.commonname, newAnimal.scientificname, newAnimal.numbersinthewild, newAnimal.conservationstatuscode]);

    const result = await db.query(
        'INSERT INTO animals(commonname, scientificname, numbersinthewild, conservationstatuscode) VALUES($1, $2, $3, $4) RETURNING *',
        [newAnimal.commonname, newAnimal.scientificname, newAnimal.numbersinthewild, newAnimal.conservationstatuscode]
    );
    console.log(result.rows[0]);
    res.json(result.rows[0]);
});

// INDIVIDUALS

app.get('/', (req, res) => {
    res.json({ message: 'Hello from My ExpressJS' });
});

app.get('/api/individuals', cors(), async (req, res) => {

    try{
        const { rows: individuals } = await db.query('SELECT * FROM individuals');
        res.send(individuals);
    } catch (e){
        return res.status(400).json({e});
    }
});

//create the POST request
app.post('/api/individuals', cors(), async (req, res) => {
    const newIndividual = { nickname: req.body.nickname, species: req.body.species}

     console.log([newIndividual.nickname, newIndividual.species]);

    const result = await db.query(
        'INSERT INTO individuals(nickname, species) VALUES($1, $2) RETURNING *',
        [newIndividual.nickname, newIndividual.species]
    );
    console.log(result.rows[0]);
    res.json(result.rows[0]);
});

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

app.get('/api/sightings', cors(), async (req, res) => {
    // const STUDENTS = [

    //     { id: 1, commonname: 'Elephant', scientificname: 'Latinus', numberinthewild: 200},
    // ];
    // res.json(endangeredanimals);
    try{
        const { rows: sightings2 } = await db.query('SELECT * FROM sightings2');
        res.send(sightings2);
      
    } catch (e){
        return res.status(400).json({e});
    }
    // const joined =   await db.query(
    //     'SELECT individuals.nickname FROM individuals INNER JOIN sightings2 ON individuals.id = sightings2.id'

    //     );
    //     console.log(joined)


});

//create the POST request
app.post('/api/sightings', cors(), async (req, res) => {
    const newSightings = { datetime: req.body.datetime, individualseen: req.body.individualseen, 
        locationofsighting: req.body.locationofsighting, healthy: req.body.healthy}

     console.log([newSightings.datetime, newSightings.individualseen, newSightings.locationofsighting, newSightings.healthy]);

    const result = await db.query(
        'INSERT INTO sightings2(datetime, individualseen, locationofsighting, healthy) VALUES($1, $2, $3, $4) RETURNING *',
        [newSightings.datetime, newSightings.individualseen, newSightings.locationofsighting, newSightings.healthy]
    )    
    // const joined =   await db.query(
        // 'SELECT individuals.nickname FROM individuals INNER JOIN sightings2 ON individuals.id = sightings2.id'   
    //  );
    console.log(result.rows[0]);
    res.json(result.rows[0]);
// console.log(joined)    // console.log(result.rows[0])
});