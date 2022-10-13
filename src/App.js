import logo from './logo.svg';
import './assets/css/App.css';


// import {Homepage} from './views/Pages'
import Test from './views/Pages';
import {  useRef } from 'react';
// import Background from './components/Background';
import Background from './components/Background-vanta';

function App() {
  const App = useRef(null);
  return (
    <div className="App" ref={App}>
      <Background/>
      <header className="App-header" >
        <Test />
        {/* <Homepage test={App}/> */}
      </header>
      <footer className='App-footer'>
          <div>
              Designed and created by 2022 Marcus © <br/>
              This website is powered by ReactJS and hosted by github page
          </div>
      </footer>
    </div>
  );
}

export default App;
