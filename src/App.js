import './App.css'
import Nav from './components/Nav';
import Personal from './components/Personal';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
        <header className="header">
          <Nav/>
        </header>
        <Personal/>
        <Footer/>
    </div>
  );
}

export default App;
