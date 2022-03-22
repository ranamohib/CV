import React from 'react'

function Personal({usePersonal}) {
  const [personal,setPersonal] = usePersonal
  return (
    <div className='notification'>
      <div className="field">
        <p className="control ">
          <input className="input" type="text" placeholder="First Name"
            onChange={(e) => setPersonal({...personal,firstName: e.target.value})} value={personal.firstName}/>
        </p>
      </div>
      <div className="field">
        <p className="control">
          <input className="input" type="text" placeholder="Last Name"/>
        </p>
      </div>
      <div className="field">
        <p className="control ">
          <input className="input" type="text" placeholder="Title"/>
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="email" placeholder="Email"/>
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="tel" placeholder="Number"/>
            <span className="icon is-small is-left">
              <i className="fas fa-phone"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
        </p>
      </div>
    </div>
  )
}

export default Personal