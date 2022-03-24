import './App.css';
import Animals from './components/animals';
import Sightings from './components/Sightings';


function App() {
  return (
    <div className="App">
      <h1>ENDANGERED ANIMALS</h1>
      <Animals />
      <Sightings />
    </div>
  );
}

export default App;
