import './App.css';
import Person from './components/Person'

function App() {
  return (
    <div className="App">
      <Person firstName = { "Old Man" } lastName = { "Jenkins" } hairColor = { "Smokey White"} initialAge = {82}/>
      <Person firstName = { "SpongeBob" } lastName = { "SquarePants" } hairColor = { "Square Yellow"} initialAge = {25}/>
      <Person firstName = { "Patrick" } lastName = { "Star" } hairColor = { "Cone Pink"} initialAge = {30}/>
      <Person firstName = { "Squidward" } lastName = { "Tentacles" } age = { 50 } hairColor = { "BALD"} initialAge = {50}/>
    </div>
    
  );
}

export default App;
