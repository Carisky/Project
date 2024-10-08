import logo from './logo.svg';
import './App.scss';
import axios from 'axios';


function App() {

  axios.get('http://localhost:5000/api/')
  .then(response => console.log(response.data))
  .catch(error => console.log(error));

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
}

export default App;
