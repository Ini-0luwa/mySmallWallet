import React,{useEffect, useState,} from 'react';
import { Link } from 'react-router-dom';
import "./SignIn.css";
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SidnIn = ({submitHandler, pwd, setPwd, user, setUser, err, email, setEmail, loading}) => {
    // const userRef = useRef();
    // const [user, setUser] = useState('hello');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);
    // const [pwd, setPwd] = useState('Dd!123456');
    const [validpwd, setvalidPwd] = useState(false);
    const [pwdFocus, setpwdFocus] = useState(false);
    useEffect(() => {
        const test = USER_REGEX.test(user);
        setValidName(test);
    }, [user]);
    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        setvalidPwd(result)
    }, [pwd])
  return (
    <div>
        <div className='welcomePdiv'>
        <div className='WelcomePage'>
                <form className='welcome' onSubmit={submitHandler}>
                    <div className='scrollAnime'>
                        <div className='fistLoad'></div>
                        <div className='secLoad'></div>
                    </div>
                    <h2 className='color'>Create a New Account </h2>
                    <small className='smtext'>Create an account so you can so you can<br/> manage your personal finaces</small>
                        <br/> <small style={{color: "red"}}>{err}</small>
                        {loading && <small style={{color: "green"}}>Loading...</small>}
                        <div>
                   <div className='inpBox'>
                   <input className='Inp'
                    type='text' 
                    name="name"
                     required
                     aria-invalid={validName ? "false" : "true"}
                     aria-describedby="uidnote"
                     onFocus={() => setUserFocus(true)}
                     onBlur={() => setUserFocus(false)}
                     autoComplete="off"
                     value={user}
                        onChange={(e) => setUser(e.target.value)}
                     />
                <label className='Label'  >
                  <span className='context'>Name</span>
                  <i id='fa' className="fa fa-user-o"></i>
                </label>
                   </div>
                   <p id='uidnote' className={userFocus && user && 
                    !validName ? "instruction" : "offscreen"}>
                        4 to 24 characters. <br/>
                        Must begin with a Letter <br/>
                        Letters, numbers, underscores, hyphen allowed.
                    </p>
                   <br/>
                   <div className='inpBox'>
                   <input className='Inp' type='text' value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   name="name" required/>
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
                     name="name" 
                     required
                     onChange={(e) => setPwd(e.target.value)}
                     aria-invalid={validpwd ? 'false' : 'true'}
                    aria-describedby="pwdnote"
                     onFocus={() => setpwdFocus(true)}
                     onBlur={() => setpwdFocus(false)}
                     />
                <label className='Label'  >
                  <span className='context'>Password</span>
                  <i id='fa' className="fa fa-lock"></i>
                </label>
                   </div>
                   <p id='pwdnote' className={pwdFocus && !validpwd ? "instruction" : "offscreen"}>
                        8 to 24 characters. <br/>
                        must include upper case and lower case,<br/>
                        a number and a special Character.<br/>
                        Allowed special Character!@#$%
                    </p>
                   </div> <br/>
                            {!validName || !validpwd ? <small className='color'>fil the form feild above to sign in</small> : "" }
                    <div>
                    {/*  */}
                        <button disabled={!validName || !validpwd ? true : false} className='logInBtn'>Create Account</button>
                    </div> <br/>
                    <small>Already have an Account? <Link to="/login">Sign In</Link> / <Link to="/">Go Home</Link></small>
                    <div className='scrollAnime'>
                        <div className='fistLoad'></div>
                        <div id='secLoad' className='secLoad'></div>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default SidnIn