import logo from './logo.svg';
import './App.css';


import {Homepage} from './views/Pages'
import {  useRef } from 'react';

function App() {
  const App = useRef(null);
  return (
    <div className="App" ref={App}>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
        <Homepage test={App}/>
      </header>

    </div>
  );
}

export default App;
