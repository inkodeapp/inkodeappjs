import logo from './inkode.png';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <div>
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>
          Proximamente Nexo para Programadores.
        </p>
        {/*
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
      </header>
    </div>
  );
}

export default App;
