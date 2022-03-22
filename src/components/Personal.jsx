import React from 'react'

function Personal({usePersonal}) {
  const [personal,setPersonal] = usePersonal;
  return (
    <div className='notification'>
      <div className="field">
        <p className="control">
          <input className="input" type="text" placeholder="First Name"
            onChange={(e) => setPersonal({...personal,firstName: e.target.value})} value={personal.firstName}/>
        </p>
      </div>
      <div className="field">
        <p className="control">
          <input className="input" type="text" placeholder="Last Name"
            onChange={(e) => setPersonal({...personal,lastName: e.target.value})} value={personal.lastName}/>
        </p>
      </div>
      <div className="field">
        <p className="control ">
          <input className="input" type="text" placeholder="Title"
            onChange={(e) => setPersonal({...personal,title: e.target.value})} value={personal.title}/>
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="email" placeholder="Email"
            onChange={(e) => setPersonal({...personal,email: e.target.value})} value={personal.email}/>
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
          <input className="input" type="tel" placeholder="Number"
            onChange={(e) => setPersonal({...personal,number: e.target.value})} value={personal.number}/>
            <span className="icon is-small is-left">
              <i className="fas fa-phone"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
        </p>
      </div>
      <div className="field">
        <div className="control">
          <textarea className="textarea has-fixed-size" placeholder="Professional Summary"
          onChange={(e) => setPersonal({...personal,summary: e.target.value})} value={personal.summary}>

          </textarea>
        </div>
      </div>
    </div>
  )
}

export default Personal