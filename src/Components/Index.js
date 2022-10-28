import {useNavigate} from "react-router-dom";
import React, { useEffect, useState } from 'react'
import WelcomePage from './WelcomePage'
import {Route, Routes} from "react-router-dom"
import Login from './Login'
import SidnIn from './SidnIn'
import axios from 'axios'
import Home from "./Home";
// import Password from 'antd/lib/input/Password'

const Index = () => {
  const [pwd, setPwd] = useState('');
  const [username, setUser] = useState('');
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(false);
  const key = "http://localhost:5000/user";
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const balance = 1200;
  const alreadyExist = data.find((a) => a.email === email || a.username === username);
  const [fetctN, setfetctN] = useState(false);
  const fetchData = async () => {
    await axios.get(key)
    .then((res) => {
      setData(res.data)
    })
    .catch((err) => {
      console.log(err.res);
    })
  };
  useEffect(() => {
    fetchData();
  }, [])
  // useEffect(() => {
  //   fetchData();
  // }, [fetctN])
  const createN = async (email,pwd,username) => {
    return await axios.post(key, email,pwd,username,balance)
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setErr("");
    // console.clear()
    setLoading(true);
    if(alreadyExist){
    // console.log(alreadyExist,"existed");
    // setEmail("");
    // setPwd("");
    // setUser("");
    
    setTimeout(() => {
      // setLoading(false);
      setErr("Email or Username not available !");
    }, 5000)
    setLoading(false);
    } else{
       return createN({email,pwd,username,balance})
      .then((res) => {
        fetchData();
        // console.log(data);
        // console.log(res.data,"data");
        localStorage.setItem("email", email);
        localStorage.setItem("pwd", pwd);
        localStorage.setItem("username", username);
        setTimeout(() => {
          setLoading(true)
          navigate("/home");
        setEmail("");
        setPwd("");
        setUser("");
        setLogged(true);
        setLoading(false)
        }, 5000)
        setLoading(false);
      })
    }
    // console.log("ho");
  };
  const authenticated = data.findIndex((a) => a.email === email && a.pwd === pwd) !== -1
  const handleSubmit = (e) => {
    setErr("")
    setLoading(true);
    e.preventDefault();
    // console.clear()
    // console.log(authenticated, "check");
    if(authenticated){
      setTimeout(() => {
        navigate("/home");
        setLogged(true);
      localStorage.setItem("email", email);
      localStorage.setItem("pwd", pwd);
      localStorage.setItem("username", username);
      // setEmail("");
      setPwd("");
      setLoading(false)
      }, 6000)
    } else{
      setTimeout(() => {
        setLoading(false)
        setErr("Wrong Email or Password ! ! !")
      }, 6000)
    }
  };
  return (
    <React.Fragment>
        <Routes>
          <Route exact path="/" element={<WelcomePage/>}/>
          <Route element={<Login 
          email={email} 
          loading={loading}
          setEmail={setEmail}
          pwd={pwd}
          handleSubmit={handleSubmit}
          setPwd={setPwd}
          err={err}
          />} path="login" />
          <Route element={<SidnIn
           submitHandler={submitHandler}
           setPwd={setPwd}
           pwd={pwd}
           user={username}
           setUser={setUser}
           loading={loading}
           err={err}
           email={email}
           setEmail={setEmail}
           />} path="signin" />
           <Route path="home/*"
            element={<Home data={data} 
            logged={logged} 
            username={username}
            email={email}
            fetctN={fetctN}
            setfetctN={setfetctN}
            loading={loading}
            fetchData={fetchData}
            />} />
        </Routes>
    </React.Fragment>
  )
}

export default Index