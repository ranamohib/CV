import './App.css'
import React, {useState} from 'react';
import Nav from './components/Nav';
import Personal from './components/Personal';
import Footer from './components/Footer';


function App() {
  const usePersonal = useState({firstName:"",lastName:"Mohib"});
  const [personal,setPersonal] = usePersonal;
  return (
    <div className="App">
        <header className="header">
          <Nav/>
        </header>
        <section className="section">
        <div className="columns">
          <div className="column is-4 is-offset-4">
            <input className="input" type="text" placeholder="First Name" 
              onChange={e => setPersonal({...personal,firstName: e.target.value})} value={personal.firstName+personal.lastName}/>
            <h4 className="title is-4">Personal Information</h4>
            <Personal usePersonal={usePersonal}/>
          </div>
        </div>
      </section>

        <Footer/>
    </div>
  );
}

export default App;
