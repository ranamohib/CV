import './App.css'
import React, {useState} from 'react';
import Nav from './components/Nav';
import Experiences from './components/Experiences';
import Personal from './components/Personal';
import Footer from './components/Footer';
import uniqid from "uniqid";
import Educations from './components/Educations';
import PrexView from 'prexview';

function App() {
  const personalExample = {
    firstName:"Ashley",
    lastName:"Smith",
    title:"Software Developer",
    email:"ashley.smith@email.com",
    number:"786-237-6937",
    summary:`Energetic software developer with 3+ years of experience participating in the full software development life-cycle from planning to launch. Looking to join Alphabet Inc. to contribute to application development with next-generation features. In previous roles, performed debugging that saved the company over $54,000 of potential lost revenue in downtime.`,
    address:"340 Dora Dr. Elizabeth, Pennsylvania(PA), 15037"
  }
  const experience = {
    position:"",
    company:"",
    description:"",
    from:"",
    to:"",
  }
  const experiencesExample = [
    {
      id: uniqid(),
      position:"Software Engineer",
      company:"Digital Seas",
      description:"Designed, developed, and troubleshot software programs for databases and applications in Java, C++, and SQL.",
      from:"September 2018",
      to:"Present",
    },
    {
      id: uniqid(),
      position:"Software Engineer Intern",
      company:"Fortune Tech",
      description:"Documented and tested new software applications in Java.",
      from:"September 2017",
      to:"August 2018",
    }
  ]
  const education = {
    university:"",
    education:"",
    description:"",
    city:"",
    start:"",
    end:"",
  }
  const educationsExample = [{
      id: uniqid(),
      university:"University of Pennsylvania",
      education:"B.Sc., Computer Science",
      description:"Vice-president for the campus game development club.",
      city:"Pennsylvania",
      start:"2014",
      end:"2017",
    }]
  const usePersonal = useState({
    firstName:"",
    lastName:"",
    title:"",
    email:"",
    number:"",
    summary:"",
    address:""
  });
  const [button,setButton] = useState("");
  async function getPDF(json) {
    const response = await fetch('https://api.craftmypdf.com/v1/create', {
    method:"POST",  
    headers:{
      'X-API-KEY':"4a70NzI5OjcyMzphWW5TQmRLVnZnMkFjVkV"
      },
    body:json
    });
    const blob = await response.blob();
    setButton("");
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  }
  const [personal,setPersonal] = usePersonal;
  const [experiences,setExperiences] = useState([{...experience,id:uniqid()}]);
  const [educations,setEducations] = useState([{...education,id:uniqid()}]);

  return (
    <div className="App">
      <header className="header">
        <Nav setPersonal={setPersonal} personalExapmle={personalExample}
         setExperiences={setExperiences} experiencesExample={experiencesExample}
         setEducations={setEducations} educationsExample={educationsExample}/>
      </header>
      <section className="section">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <h4 className="title is-4">Personal Information</h4>
            <Personal usePersonal={usePersonal} />
            <h4 className="title is-4">Experience</h4>
            <Experiences experiences={experiences} setExperiences={setExperiences} experience={experience}/>
            <h4 className="title is-4">Education</h4>
            <Educations educations={educations} setEducations={setEducations} education={education}/>
            <button class={`button is-black ${button}`}  onClick={()=>{
              setButton("is-loading")
              getPDF(JSON.stringify({
                "output_file": "cv.pdf",
                "export_type":"file",
                template_id:"e0077b2b1bfc0f26",
                data:{educations,experiences,personal}
            }))}}>
              <span class="icon is-small">
                <i class="fas fa-download"></i>
              </span>
              <span>Download</span>
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;


// Data Structures
// Open Source Software 
// Cloud Computing Services (AWS)
// Ruby on Rails
// Git Version Control
// Teamwork Skills
