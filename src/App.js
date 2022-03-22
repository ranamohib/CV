import './App.css'
import React, {useState} from 'react';
import Nav from './components/Nav';
import Personal from './components/Personal';
import Experience from './components/Experience';
import Footer from './components/Footer';


function App() {
  const usePersonal = useState({
    firstName:"",
    lastName:"",
    title:"",
    email:"",
    phone:"",
    summary:"",
  });
  const useExperience = useState({
    position:"",
    company:"",
  });

  return (
    <div className="App">
        <header className="header">
          <Nav/>
        </header>
        <section className="section">
        <div className="columns">
          <div className="column is-4 is-offset-4">
            <h4 className="title is-4">Personal Information</h4>
            <Personal usePersonal={usePersonal}/>
            <h4 className="title is-4">Experience</h4>
            <Experience useExperience={useExperience}/>
          </div>
        </div>
      </section>

        <Footer/>
    </div>
  );
}

export default App;
