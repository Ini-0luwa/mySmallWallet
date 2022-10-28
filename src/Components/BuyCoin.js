import React, { useEffect, useState} from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import axios from 'axios';

const BuyCoin = ({data ,fetchData, debit, setDebit}) => {
  const navigate = useNavigate()
  const state = useLocation().state;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const pwd = localStorage.getItem("pwd")
  let [balance, setBalance] = useState(state.balance);
  const key = "http://localhost:5000/user";
  const getNAmes = async (id) => {
      return await axios.get(`${key}/${id}`)
  };
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
    increment();
    updateName(state.id, {username,email,password,balance})
    .then(() => {
        navigate("/home")
        loadname();
        fetchData();
        // setfetctN(true)
        // increment();
    })
  }
  const increment = () => {
    if (balance < 2501) {
        setBalance(balance-= debit)
    }
}
  // console.log(location,"location");
  return (
    <div className='homBg2'>
      BuyCoin
      <h1>{balance}</h1>
      <input value={debit} onChange={(e) => setDebit(+e.target.value)} type="number" />
      <button>+</button>
      <button onClick={rename}>submit</button>
      <ul>
        {data.map((a) => {
          return <li key={a.id}>{a.username}: <Link to={{pathname: `finalltransfer/${a.id}`}} state={a && rename}>
          <button>Transfer</button>
          </Link></li>
        })}
      </ul>
    </div>
  )
}
  
export default BuyCoin