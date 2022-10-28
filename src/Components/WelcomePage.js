import React from 'react'
import "./WelcomePage.css";
import {useNavigate} from "react-router-dom"

const WelcomePage = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div className='welcomePdiv'>
            <div className='welcomeAnimation'>
                <div className='welcomBox'>
                    <div className='welcomBox1'>
                        <div className='hand1'></div>
                        <div className='hand2'></div>
                        <div className='hand3'></div>
                        <div className='hand4'></div>
                        <div className='hand5'></div>
                    </div>
                    <div className='welcomeBox2'>
                        <h2>Un_Known_x</h2>
                    </div>
                </div>
            </div>
            <div className='WelcomePage'>
                <div className='welcome'>
                    <div className='scrollAnime'>
                        <div className='fistLoad'></div>
                        <div className='secLoad'></div>
                    </div>
                    <h1>Welcome !</h1>
                    <p>Un_Known_x Bank</p>
                    <h2>Future of fast transaction</h2>
                    <h3>One app that manage your money</h3>
                    <small>Sign up takes only 2 minutes
                    </small> 
                    <div>
                        <button className='logInBtn' onClick={() => {navigate("login")}}>Log In</button> <br/>
                        <button className='logInBtn' onClick={() => {navigate("signin")}}>Sign up</button>
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

export default WelcomePage