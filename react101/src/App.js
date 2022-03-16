import './App.css';
// import Item from './MyItem';
import React from 'react';

class AffiliationRow extends React.Component {
  render() {
    return (
      <li>
       {this.props.organization}
      </li>
    )
  }
}

class StarWars extends React.Component{
  constructor() {
    super();
    this.state = {
      loadedCharacter: false,
      image: null,
      name: null,
      height: null,
      homeworld: null,
      affiliations: [],
    };
  }
  getNewCharacter() {
    const randomNumber = Math.round(Math.random() * 88);
    const url = `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          image: data.image,
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          affiliations: data.affiliations,
          loadedCharacter: true,
        })
      })

  };

  render() {
    
      const groups = this.state.affiliations.map((group, i) => {
        return <AffiliationRow key={i} organization={group}/>
      })
    
    return (
      <div>
        {
          this.state.loadedCharacter && 
          <div>
            <img src={this.state.image} alt="character headshot"></img>
            <h1>{this.state.name}</h1>
            <p>{this.state.height} m</p>
            <p>Homeworld: {this.state.homeworld}</p>
            <ul>
              {groups}
            </ul>
          </div>
        }

        <button 
          type="button" 
          onClick={() => this.getNewCharacter()}
          className="btn"
          >
          Randomize Character
        </button>
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
