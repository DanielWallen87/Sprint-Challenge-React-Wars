import React from 'react';
import './App.css';
import CreateCard from "./components/CreateCard";

function App() {

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CreateCard />
    </div>
  )
}

export default App;

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // const [character, setCharacter] = useState();

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // useEffect(() => {
  //   axios.get('https://swapi.co/api/people/1')
  //     .then((response => {
  //       setCharacter(response.results)
  //     }))
  //     .catch((err => {
  //       console.log(err);
  //     }));
  //   }, [] );  