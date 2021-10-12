import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Container from "./components/Container";

function App() {
  setTimeout( function() { window.location.href = "https://inkodeapp.com"; }, 5000 );
  return (
    <div className="App">
      <Navbar />
      {/*
      <header className="App-header">
      
      </header>*/}

      <Container />
      <Footer />
    </div>
  );
}

export default App;
