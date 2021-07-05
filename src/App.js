import { useForm } from 'react-hook-form'
import './App.css';

function App() {
  return (
    <div className="container">
      <form>
        <h1>Register Form</h1>
          <div className="ui divider"></div>
            <div className="ui form">
              <div className="field">
                <label>Username</label>
                 <input type="text" name="username" 
                placeholder="Username" />
            </div>
             <div className="field">
                <label>Email</label>
                 <input type="email" name="email" 
                placeholder="Email" />
            </div>
         <div className="field">
                <label>Password</label>
                 <input type="password" name="password" 
                placeholder="Enter Password" />
            </div>
         </div>
            <button className="fluid ui button blue">Submit</button>
      </form>
    </div>
  );
}

export default App;
