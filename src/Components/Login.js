import React from 'react'
import {useNavigate} from "react-router-dom"

const Login = ({email, setEmail, pwd, setPwd, handleSubmit, err, loading}) => {
  // const [name, setname] = useState("")
  const navigate = useNavigate();
  // console.log(setEmail);
  return (
    <div>
      <div className='welcomePdiv'>
      <div className='WelcomePage'>
                <div className='welcome'>
                    <div className='scrollAnime'>
                        <div className='fistLoad'></div>
                        <div className='secLoad'></div>
                    </div>
                    <h2 className='color'>Welcome Back ! </h2>
                    <h3>Login to continue</h3>
                    <small>Sign In takes only 2 minutes
                    </small>
                    <small style={{color: "red"}}>{err}</small>
                    <form>
                    <div className='inpBox'>
                   <input className='Inp' type='text' value={email}
                   onChange={(e) => setEmail(e.target.value)}
                    required/>
                <label className='Label'  >
                  <span className='context'>Email</span>
                  <i id='fa' className="fa fa-envelope"></i>
                </label>
                   </div> <br/>
                   <div className='inpBox'>
                   <input
                   value={pwd}
                    className='Inp' 
                    type='password'
                    //  name="name" 
                     required
                     onChange={(e) => setPwd(e.target.value)}
                    //  aria-invalid={validpwd ? 'false' : 'true'}
                     />
                <label className='Label'  >
                  <span className='context'>Password</span>
                  <i id='fa' className="fa fa-lock"></i>
                </label>
                   </div> <br/>
                   <small>Forget password?</small> <br/>
                   <button onClick={handleSubmit} className='logInBtn'>Log In</button> <br/>
                   {loading && <small style={{color: "green"}}>Loading...</small>} 
                      </form>
                      <button className='logInBtn' onClick={() => navigate("/signin")}>Create Account</button>
                      
                    <div>
                        
                    </div>
                    <div className='scrollAnime'>
                        <div className='fistLoad'></div>
                        <div id='secLoad' className='secLoad'></div>
                    </div>
                </div>
            </div>    
      </div>
    </div>
  )
}

export default Login