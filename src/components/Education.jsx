import React from "react";

function Education({id,educations,setEducations}) {
    const education = educations.find((val)=>val.id===id);
    function setExperience(obj){
      setEducations(educations.map(exp=>exp.id===id?exp=obj:exp))
    }
  return (
    <div className="notification">
                  <button class="delete" onClick={() => 
              setEducations(educations.filter(item => item.id !== id))
              }>
          </button>
      <div className="field">
        <p className="control ">
          <input className="input" type="text" placeholder="University/College"
            onChange={(e) => setExperience({...education,university: e.target.value})} value={education.university}/>
        </p>
      </div>
      <div className="field">
        <p className="control">
          <input className="input" type="text" placeholder="Education"
            onChange={(e) => setExperience({...education,education: e.target.value})} value={education.education}/>
        </p>
      </div>
      <div className="field">
        <p className="control">
          <input className="input" type="text" placeholder="City"
            onChange={(e) => setExperience({...education,city: e.target.value})} value={education.city}/>
        </p>
      </div>
      <div className="field">
        <div className="control">
            <textarea className="textarea has-fixed-size" placeholder="Description"
                onChange={(e) => setExperience({ ...education, description: e.target.value })} value={education.description}>
            </textarea>
        </div>
      </div>
      <div class="field is-grouped">
        <p class="control is-expanded">
          <input className="input" type="text" placeholder="Start Date"
            onChange={(e) => setExperience({ ...education, start: e.target.value })} value={education.start}/>
        </p>
        <p class="control is-expanded">
          <input className="input" type="text" placeholder="End Date"
            onChange={(e) => setExperience({ ...education, end: e.target.value })} value={education.end}/>
        </p>
      </div>
    </div>
  );
}

export default Education;
