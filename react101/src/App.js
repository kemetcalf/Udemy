import './App.css';
// import Item from './MyItem';
import React from 'react';

class StarWars extends React.Component{
  render() {
    return (
      <div>
        <h1>Name</h1>
        <p>Height (cm)</p>
        <p>Homeworld:</p>
        <ul>
          <li>Films in here</li>
        </ul>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars />
      </header>
    </div>
  );
}

export default App;
