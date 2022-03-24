import React from "react";
import Experience from "./Experience";
import uniqid from "uniqid"

function Experiences({experiences,setExperiences,experience}) {
    return (
        <div className="block">
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
                        experiences.concat({ ...experience, id: uniqid() })
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

export default Experiences;
