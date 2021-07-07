import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import './App.css';

function App() {
   const { register, handleSubmit, errors } = useForm()
   const [userInfo, setUserInfo] = useState()
   const onSubmit = (data) => {
    setUserInfo(data)
    console.log(data);
   }

  return (
    <div className="container">
      <pre>
          {JSON.stringify(userInfo, undefined, 2)}
      </pre>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Register Form</h1>
          <div className="ui divider"></div>
            <div className="ui form">
              <div className="field">
                <label>Username</label>
                 <input type="text" name="username" 
                placeholder="Username"ref={register} 
                />
            </div>
             <div className="field">
                <label>Email</label>
                 <input type="email" name="email" 
                placeholder="Email" 
                ref={register} 
                />
            </div>
         <div className="field">
                <label>Password</label>
                 <input type="password" name="password" 
                placeholder="Enter Password" 
                ref={register} 
                />
            </div>
         </div>
            <button className="fluid ui button blue">Submit</button>
      </form>
    </div>
  );
}

export default App;
