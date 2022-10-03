import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container-80">
            <SearchBar/>
            <SelectBox/>

        </div>
      </div>
    )
  }
}
  export default App;

  /*import Header from './components/Header';
  import SelectBox from './components/SelectBox';
  import SearchBar from './components/SearchBar';
  import Countries from './components/Countries';
  
  class App extends React.Component {
  
    state = {
      regions: ['Africa', 'Americas', 'Antartic', 'Asia', 'Europe', Oceania'],
      countries: [],
        filtered: [],
        search: "",
        mode: "light",
        darkMode: false,
  
    }
  
  }*/

  /*function App() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }*/

  