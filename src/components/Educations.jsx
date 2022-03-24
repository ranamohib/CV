import React from "react";
import Education from "./Education";
import uniqid from "uniqid"

function Educations({educations,setEducations,education}) {
  return (
      <div className="block">
        {educations.map((experience) => {
            return <Education
                key={experience.id}
                id={experience.id}
                educations={educations}
                setEducations={setEducations}
            />;
        })}
        <button
            className="button is-black"
            onClick={() => {
                setEducations(
                    educations.concat({ ...education, id: uniqid() })
                );
            }}
        >
            <span className="icon">
                <i className="fas fa-add"></i>
            </span>
        </button>
      </div>
  )
}

export default Educations;
