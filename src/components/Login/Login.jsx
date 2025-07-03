import './Login.css'
import { assets } from '../../assets/frontend_assets/assets'
import { useState, useEffect } from 'react';

const Login = ({ showLogin, setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Login");
  //disable scroll when showing Login/SignUp
  useEffect(() => {
    if (showLogin) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showLogin]);
  return (
    <div className='login-container'>
      <div className="login-section">
        <header>
          <img src={assets.cross_icon} alt="" onClick={() => setShowLogin(false)} />
          <h1>{currentState}</h1>
        </header>
        <form action="#">
          {currentState === "Login" ? <></> : <><input type='text' placeholder='Your full name' alt='' required /></>}
          <input type="email" placeholder='Your email' required />
          <input type="password" placeholder='Password' required />
          {currentState === "Login" ? <button className='login-button'>{currentState}</button> : <button className='login-button'>{currentState}</button>}
          <div className="checkbox-agree">
            <input type="checkbox" required />
            <label>By continuing. I agree to the terms of use & privacy policy.</label>
          </div>
        </form>
        <footer>
          {currentState === "Login" ? <p>Create a new account? <a href="#" onClick={() => setCurrentState("Sign Up")}>Click here</a></p> :
            <p>Already have an account? <a href="#" onClick={() => setCurrentState("Login")}>Click here</a></p>}
        </footer>
      </div>
    </div>
  )
}

export default Login