import {useState} from 'react';
import '../stylesheets/Login.css';

function Login(props) {
  const [loginBool, setLoginBool] = useState(true);
  const toggleLoginBool = () => {
    setLoginBool(!loginBool);
  };
  const fetchUserData = async (event, string, func) => {
    event.preventDefault();

    let username = event.target.parentNode.childNodes[0].value,
        password = event.target.parentNode.childNodes[1].value,
        confirmPassword = (string === 'signup' ? event.target.parentNode.childNodes[2].value : password),
        userData;
    
    if (password !== confirmPassword) {
      return;
    }

    userData = await fetch('http://localhost:3001/api/' + string,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      }
    )
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));

    if (userData) {
      console.log(userData);
      func(userData);
    }
  }

  if (loginBool) {
    return (
      <div className='auth login'>
        <div className='heading'>
          <h1>odinbook</h1>
          <h2>Connect with friends and the world around you on OdinBook.</h2>
        </div>
        <div className='form'>
          <form>
            <input type='text' placeholder='Username' required/>
            <input type='password' placeholder='Password' required/>
            <button className='auth-btn' onClick={(e) => fetchUserData(e, 'login', props.setData)}>Log In</button>
          </form>
          <button className='auth-btn fb-auth'>Log in with Facebook</button>
          <button className='form-switch-btn' onClick={toggleLoginBool}>Create new account</button>
        </div>
      </div>
    )
  } else {
    return (
      <div className='auth signup'>
        <div className='heading'>
          <h1>odinbook</h1>
          <h2>Sign up. It's quick and easy.</h2>
        </div>
        <div className='form'>
          <form>
            <input type='text' placeholder='Username' required/>
            <input type='password' placeholder='Password' required/>
            <input type='password' placeholder='Confirm password' required/>
            <button className='auth-btn' onClick={(e) => fetchUserData(e, 'signup', props.setData)}>Sign Up</button>
          </form>
          <button className='auth-btn fb-auth'>Sign up with Facebook</button>
          <button className='form-switch-btn' onClick={toggleLoginBool}>Already have an account?</button>
        </div>
      </div>
    )
  }
}

export default Login;