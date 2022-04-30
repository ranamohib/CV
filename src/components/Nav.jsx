import React from 'react';


function Nav({setPersonal,personalExapmle,setExperiences,experiencesExample,setEducations,educationsExample}) {
  return (
    <div className='Nav'>
      <nav className="navbar is-transparent has-shadow is-spaced" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <strong>Mohib</strong>
          </a>
        </div>
        <div className="navbar-menu is-active">
          <div className="navbar-end">
            <div className="navbar-item">
              <a target="_blank" href="https://github.com/uuhib" className="button is-black">
                <span className="icon">
                  <i className="fab fa-github"></i>
                </span>
                <span>GitHub</span>
              </a>
            </div>
            <div className="navbar-item">
            <button className="button is-black" onClick={()=>{
              setPersonal(personalExapmle);
              setExperiences(experiencesExample);
              setEducations(educationsExample);
              }}>
              <span className="icon is-small">
                <i className="fas fa-share-from-square"></i>
              </span>
              <span>Load Example</span>
            </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav