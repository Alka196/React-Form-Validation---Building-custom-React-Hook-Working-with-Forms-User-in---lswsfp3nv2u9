
import React, { useState, useRef } from 'react';
/**
 * @task :add validation to email, if email is not valid, if not valid email, dont allow to submit
 * @error_message :  "Email is invalid"  if email is wrong. (must be same message) 
 * 
 * 
 */

function App() {

  const fnameRef = useRef("");
  const emailRef = useRef("");
  const [data, setData] = useState({});

  const handleSubmit = event => {
    event.preventDefault();
    if(error === 'Email is invalid') return ;

    const data = {'fname': fnameRef.current.value, 'email': emailRef.current.value};
    console.log(data);
    setData((pre) => data);
  }

  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const handleChange = event => {
    if(!isValidEmail(event.target.value)){
      setError('Email is invalid');
    }else{
      setError(null);
    }
    setMessage(event.target.value);
  }


  return(
    <div className="App">
      <h1>How About Them Apples</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>First Name</p>
            <input id='fname' name="name"  ref={fnameRef}/>
            <br></br>
            <p>Email</p>
            <input id='lname' name="name" onChange={handleChange} ref={emailRef}/>
            {error && <h2 style={{color: 'red'}}>{error}</h2>}
          </label>
        </fieldset>

        <button id='submit' type="submit">Submit</button>
      </form>
      {
        data.fname != undefined && (
          <div>
          <h1>{data.fname}</h1>
          <h2>{data.lname}</h2>
          </div>
        )
      }
    </div>
  )
}


export default App;