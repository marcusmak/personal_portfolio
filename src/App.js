import logo from './logo.svg';
import './assets/css/App.css';


// import {Homepage} from './views/Pages'
import Pages from './views/Pages_copy';
import {  useRef } from 'react';
// import Background from './components/Background';
import Background from './components/Background-vanta';

function App() {
  const App = useRef(null);
  return (
    <div className="App" ref={App}>
      <Background/>
      <header className="App-header" >
      </header>

        <div className='App-body'>
          <Pages test={App} />
          <div className='App-footer'>
              <div>
                  Designed and created by 2022 Marcus © <br/>
                  This website is powered by ReactJS and hosted by github page
              </div>
          </div>
        </div>    

    </div>
  );
}

export default App;
