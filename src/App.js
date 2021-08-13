import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Container from "./components/Container";

function App() {
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
