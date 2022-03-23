import './App.css'
import React, {useState} from 'react';
import Nav from './components/Nav';
import Personal from './components/Personal';
import Experience from './components/Experience';
import Footer from './components/Footer';
import uniqid from "uniqid";


function App() {
  const experience = {
    position:"",
    company:"",
    description:"",
    from:"",
    to:"",
  }
  const usePersonal = useState({
    firstName:"",
    lastName:"",
    title:"",
    email:"",
    phone:"",
    summary:"",
  });
  const [experiences,setExperiences] = useState([{...experience,id:uniqid()}]);

  return (
    <div className="App">
      <header className="header">
        <Nav />
      </header>
      <section className="section">
        <div className="columns">
          <div className="column is-4 is-offset-4">
            <h4 className="title is-4">Personal Information</h4>
            <Personal usePersonal={usePersonal} />
            <h4 className="title is-4">Experience</h4>
            {experiences.map((experience) => {
              return <Experience
                key={experience.id}
                id={experience.id}
                experiences={experiences}
                setExperiences={setExperiences}
              />;
            })}
            <button
              className="button is-black"
              onClick={() => {
                setExperiences(
                  experiences.concat({...experience,id:uniqid()})
                );
              }}
            >
              <span className="icon">
                <i className="fas fa-add"></i>
              </span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
