import React, { useState } from 'react'
// import WelcomePage from './WelcomePage'
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
// import Home1 from './Home1';
import Home2 from './Home2';
import Testr from './Testr';
import "./Home.css"
import HHomePage from './HHomePage';
import Transfer from './Transfer';
import BuyCoin from './BuyCoin';
import FinalTransfer from './FinalTransfer';
import DebitCard from './DebitCard';
//  <ul>
//             {
//                  data.filter((a) => a.email === email).map((a) => <li key={a.id}>Welcome {a.username}</li>)
//             }
//         </ul>

const Home = ({data, fetctN, setfetctN, fetchData}) => {
  const [debit, setDebit] = useState("");
  const navigate = useNavigate();
  // console.log(data,"data")
  const [mobile, setMobile] = useState(false);
  const [reciver, setReciver] = useState("Nife");
  // const recive = data.filter((a) => a.username === reciver).map((a,i) => a.id);
  // const rec = data.findIndex((a) => a.username === reciver);
  // console.log(recive,"reciver");
  // console.log(rec,"reciver==");
  const email = localStorage.getItem("email", "****");
  // const namn = data.filter(((a) => a.email === email)).map((a) => a.id);
  // console.log(namn);
  const drag = () => {
    // console.log("hhi");
    setMobile(!mobile)
  };
  const LogOut = () => {
    localStorage.removeItem("pwd");
    localStorage.removeItem("email");
    localStorage.removeItem("username");
    navigate("/");
  };
  return (
    <div className="homeBg"> 
    {/* <button
    onClick={() => setMobile(!mobile)}
     className='choose'>
      Chosse
      </button> */}
    <div onClick={() => setMobile(false)} className={mobile ? 'homBg1' : "off"}>
     <div className='pProfileDiv'>
        <div className="profileDiv">
          <i className='fa fa-user-o'></i>
        </div>
        <p className='profileName'>
        {                  data.filter((a) => a.email === email).map((a) => <label key={a.id}>{a.username}</label>)
             }
        </p>
     </div>
      <div className="appSwitchD"> 
      <p onClick={() => navigate("/home")}
      ><i className='fa fa-home'></i> <span>- -Home</span></p>
      <p>
        <i className='fa fa-money'></i> <span> 
        {
          data.filter((a) => a.email === email).map((a,i) => {
            return <Link style={{color: "white",textDecoration: "none"}} key={i} to={{ pathname:`home2/${a.id}`}} state={a}>Buy Coin</Link>
          })
        }
          </span></p>
          <p>
        <i className='fa fa-money'></i> <span> 
        {
          data.filter((a) => a.email === email).map((a,i) => {
            return <Link style={{color: "white",textDecoration: "none"}} key={i} to={{ pathname:`buycoin/${a.id}`}} state={a}> Transfer</Link>
          })
        }
          </span></p>
      </div>
      <div className="exitDiv">
       <p onClick={LogOut}
      ><i className='fa fa-times'></i> <span>- -Log_Out</span></p>
      </div>
    </div>
    <div>
    <div className="userTop">
        <div>
          <p className='Logoo'>Welcome {data.filter((a) => a.email === email).map((a) => <label key={a.id}>{a.username}</label>)} !</p>
          <small>You've been missed ! ! !</small>
        </div>
        {/* {
                data.filter((a) => a.username === reciver).map((a,i) => <p key={i}>
                  <Link style={{color: "white",textDecoration: "none"}} to={{ pathname:`debit/${a.id}`}} state={a}>Buy Coin</Link>
                </p>)
              } */}
          {
            data.filter((a) => a.username === reciver).map((a) => {
              return <Link key={a.id} to={{pathname: `debit/${a.id}`}} state={a}><div className='Statuss'></div></Link>
            })
          }
        <div className='usero' onClick={drag}>
          <div onClick={() => setMobile(!mobile)}>
          {
            mobile ? <i className='fa fa-times'></i> : 
            <i className='fa fa-bars'></i>
          }
          </div>
        </div>
      </div> 
    <Routes>
        <Route exact path='/' element={<HHomePage
        email={email}
        setMobile={setMobile}
        mobile={mobile}
        drag={drag}
        data={data}/>}/>
        <Route path='debit/:id' element={<DebitCard debit={debit} data={data} fetchData={fetchData}/>}/>
        <Route path='home2/:id' element={<Home2
        mobile={mobile}
        setMobile={setMobile}
        fetchData={fetchData} fetctN={fetctN} setfetctN={setfetctN} data={data}/>} />
        <Route path='transfer' element={<Transfer data={data}/>} />
        <Route path='buycoin/:id' element={<BuyCoin
        debit={debit}
        setDebit={setDebit}
         mobile={mobile}
         setMobile={setMobile}
         fetchData={fetchData} fetctN={fetctN} setfetctN={setfetctN} data={data}
        />} />
        <Route path='finalltransfer' element={<FinalTransfer/>}/>
      </Routes>
    </div>
    <div  onClick={() => setMobile(false)} className='homBg3'>
      <div className='topBuy'>
            <div className=''>Upgrade</div>
            <div className='Linee'></div>
            <div className=''>
              {
                data.filter((a) => a.email === email).map((a,i) => <p key={i}>
                  <Link style={{color: "white",textDecoration: "none"}} to={{ pathname:`home2/${a.id}`}} state={a}>Buy Coin</Link>
                </p>)
              }
            </div>
      </div>
          <Testr/>
    </div>
    </div>
  )
}

export default Home