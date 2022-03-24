import React from "react";

function Experience({id,experiences,setExperiences}) {
  const experience = experiences.find((val)=>val.id===id);
  function setExperience(obj){
    setExperiences(experiences.map(exp=>exp.id===id?exp=obj:exp))
  }
  return (
    <div className='notification'>
          <button class="delete" onClick={() => 
              setExperiences(experiences.filter(item => item.id !== id))
              }>
          </button>
      <div className="field">
        <p className="control ">
          <input className="input" type="text" placeholder="Position"
            onChange={(e) => setExperience({...experience,position: e.target.value})} value={experience.position}/>
        </p>
      </div>
      <div className="field">
        <p className="control">
          <input className="input" type="text" placeholder="Company"
            onChange={(e) => setExperience({...experience,company: e.target.value})} value={experience.company}/>
        </p>
      </div>
      <div className="field">
        <div className="control">
            <textarea className="textarea has-fixed-size" placeholder="Description"
                onChange={(e) => setExperience({ ...experience, description: e.target.value })} value={experience.description}>
            </textarea>
        </div>
      </div>
      <div class="field is-grouped">
        <p class="control is-expanded">
          <input className="input" type="text" placeholder="From Date"
            onChange={(e) => setExperience({ ...experience, from: e.target.value })} value={experience.from}/>
        </p>
        <p class="control is-expanded">
          <input className="input" type="text" placeholder="To Date"
            onChange={(e) => setExperience({ ...experience, to: e.target.value })} value={experience.to}/>
        </p>
      </div>
    </div>
  )
}

export default Experience;
