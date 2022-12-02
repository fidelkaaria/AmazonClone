import React, { useState } from 'react';
import './Login.css'
import { auth } from './firebase.js';
import { Link, useNavigate } from 'react-router-dom';



const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

    const signIn = (e) => {
      e.preventDefault()

      auth.signInWithEmailAndPassword(email, password).then((auth) => {
        
        if (auth) {
       
          navigate("/")
     }

      }).catch((error)=>alert(error))

   
        // firebase login cool stuff

    }
      const register = (e) => {
        e.preventDefault();

        // firebase register cool stuff
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
          // console.log('This worked really well', auth)
          if (auth) {
            
         navigate("/")

          }
        })
              
          .catch((error) => alert(error.message))
        

    
          
      };


  return (
    <div className="login">
      {/* //link to homepage */}
      <img
        className="login__logo"
        src="https://pngimg.com/uploads/amazon/small/amazon_PNG1.png"
        alt="loginLogo"
      />

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <h5>Password</h5>
                  <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          <button onClick={signIn} className='login__signInButton'   type="submit">Sign In</button>
        </form>
        <p>
          The information and opinions contained in this report are provided as
          of the date of this report and are subject to change without notice.
          Amazon does not undertake to update or revise any such statements.
          This report represents current Amazon policy and intent and is not
          intended to create legal rights or obligations.
              </p>
              <button onClick={register}   className='login__registerButton'>Create your Amazon Account</button>
      </div>
    </div>
  );
}

export default Login