import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import "./Home2.css";

const Home2 = ({data,fetctN, fetchData, setfetctN, mobile, setMobile}) => {
    const location = useLocation();
    const state = location.state;
    const navigate = useNavigate();
    // console.log(data,"data")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUserName] = useState("");
    const pwd = localStorage.getItem("pwd")
    let [balance, setBalance] = useState(state.balance);
    // const [email, setEmail] = useState("");
    const key = "http://localhost:5000/user";
    const getNAmes = async (id) => {
        return await axios.get(`${key}/${id}`)
    }
    // console.log(state.balance, "bal");
    const loadname = () => {
        getNAmes(state.id)
        .then((res) => {
            setEmail(res.data.email);
            setPassword(pwd);
            setUserName(res.data.username);
        })
    };
    useEffect(() => {
        loadname();
    });
    const updateName = async (id, name) => {
        return await axios.put(`${key}/${id}`, name);
    };
    const rename = (e) => {
        e.preventDefault();
        updateName(state.id, {username,email,password,balance})
        .then(() => {
            navigate("/home")
            loadname();
            fetchData()
            setfetctN(true)
        })
    }

    // console.clear()
    // console.log(state, "sta");
    const increment = () => {
        if (balance < 2500) {
            setBalance(balance+= 100)
        }
    }
    const decerment = () => {
        if(balance > 1){
            setBalance(balance-= 100);
        };
    };
  return (
    <div className='homBg2'>
          <button className='sec' onClick={() => setMobile(!mobile)}>
      {
            mobile ? <i id='time' className='fa fa-times'></i> : 
            <i id='bar' className='fa fa-bars'></i>
          }
      </button>
        <form onSubmit={rename}>
        {/* <input
        type="text"
        placeholder='username'
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        /> <br/>
        <input
        placeholder='email'
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        /> <br/>
        <input
        placeholder='password'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
  /> */}
        </form>
        <div className='buyCoinD'>
            <div className="coinD">
                <p>Amount :</p>
                <p className='count'>{balance}</p>
                <div>
                    <button className='IbcBtn' onClick={decerment}>-</button>
                    <button  className='IbcBtn' onClick={increment}>+</button>
                </div>
                <div>
                   <button  className='IbcBtn' id='IbcBtn' onClick={rename}>Buy Coin</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Home2