import React, { useEffect, useState }from 'react';
import './App.css';
import axios from 'axios';
import Card from './components/Card';

function App() {

  // Function bodies are nested = useState can be accessed from within useEffect here

  const [charactersArray, setCharacters] = useState([]); // never directly manipulate first variable -- use the setter, setName
  console.log('array', charactersArray);
  // useEffect is just a function that takes an anonymous function and empty array as arguments

  useEffect(() => {
    axios // library that handles promises (resolves data)
      .get('https://swapi.co/api/people')
      .then(response => {
        console.log(response.data.results);
        const x = response.data.results;
        setCharacters(x);
      }).catch(err => { // good practice to include this
        console.log(err);
      })
  }, []) // empty array = update on render - leave this way when you want to update on page load/refresh; if it has a variable within, it only updates in that specific case

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {
       charactersArray.map(character => <Card info = {character} />) // MUST be this exact syntax: arbitrary word = {targeted data in these}
      }
    </div>
  )
}

export default App;
