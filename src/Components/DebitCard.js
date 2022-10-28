import React, {useEffect, useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const DebitCard = ({data, debit, fetchData}) => {
    const location = useLocation().state;
    // console.log(location);
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pwd, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const pwdd = location.pwd;
//   console.log(pwdd, "password")
  const [balance, setBalance] = useState(location.balance);
  const key = "http://localhost:5000/user";
  const getNAmes = async (id) => {
      return await axios.get(`${key}/${id}`)
  };
  const loadname = () => {
    getNAmes(location.id)
    .then((res) => {
        setEmail(res.data.email);
        setPassword(pwdd);
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
    // increment();
    Calculate();
    updateName(location.id, {username,email,pwd,balance})
    .then(() => {
        // navigate("/home")
        // loadname();
        fetchData();
        console.log(location.balance, "balance");
        // setfetctN(true)
        // increment();
    })
}
const Calculate = () => {
    setBalance((prev) => prev += debit);
    console.log(debit,"debit");
};
  return (
    <div className='homBg2'>DebitCard
    <button onClick={rename}>Transfer</button>
    </div>
  )
}

export default DebitCard;