import React from 'react'
import { Link } from 'react-router-dom';
import './LoginPage.css'

function LoginPage() {
  return (
      <div className="login">
          <Link to = "">
          <div className="login_logo">
            <img src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" width = "100px"/>
          </div>
          </Link>

          <div className="login_container">
            <h1>Sign-in</h1>

            <form>
              <h5>E-mail</h5>
              <input type = 'text'/>

              <h5>Password</h5>
              <input type = 'password'/>

              <button className = "login_SignIn"> Sign In</button>
            </form>

            <p> 
              By signing-in you agree to the AMAZON FAKE CLONE
              conditions of Use & Sale. Please see our Privacy 
              Notice, and our Interest Based Ads Notice.
            </p>

            <button className='login_register'>Create you Amazon Account</button>

          </div>
      </div>
  )
}

export default LoginPage  
