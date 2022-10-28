import React from 'react'

const HHomePage = ({data, mobile, setMobile, email, drag}) => {
  return (
    <div className='homBg2'>
      <div className="cardAbal">
      <button className='sec' onClick={() => setMobile(!mobile)}>
      {
            mobile ? <i id='time' className='fa fa-times'></i> : 
            <i id='bar' className='fa fa-bars'></i>
          }
      </button>
      {/* <div className='after'></div> */}
        <div className="caard">
          <div className='card2'>
            <p>VISA</p>
          </div>
          <div className='card1'>
            <div className='Numb'>
              <p>7585 3452 3245 4325</p>
              <div className='detail'>
                <>
                {
                  data.filter((a) => a.email === email).map((a) => <small key={a.id}>{a.username}</small>)
             }
                </>
                <small>12 / 90</small>
                <small>08 / 90</small>
              </div>
            </div>
          </div>
          
        </div>
        <div className="bal">
          <div>
            <p>Total Balance:</p>
            <h1 className='texxt'>
            {
                  data.filter((a) => a.email === email).map((a) => <p key={a.id}>$ {a.balance}</p>)
             }
            </h1>
            <p>Weekly Allowance:</p>
            <h3>$ 1, 000</h3>
          </div>
        </div>
      </div>
      {/* <p>Market</p> */}
      <div className='graph'>
             <div className='gaphBox'>
              <label className='value'>60%</label>
              <label id='v1' className='value'>100%</label>
              <label id='v2' className='value'>90%</label>
              <label id='v3' className='value'>80%</label>
              <label id='v4' className='value'>70%</label>
              <label id='v5' className='value'>60%</label>
              <label id='v6' className='value'>50%</label>
              <label id='v7' className='value'>40%</label>
              <label id='v8' className='value'>30%</label>
              <label id='v9' className='value'>20%</label>
                <div style={{height: "50%", backgroundColor:"blueviolet"}} className='lineo'><p>January</p></div>
                <div style={{height: "82%", backgroundColor:"blue"}} className='lineo'><p>Febuary</p></div>
                <div style={{height: "64%", backgroundColor:"green"}} className='lineo'><p>May</p></div>
                <div style={{height: "75%", backgroundColor:"grey"}} className='lineo'><p>April</p></div>
                <div style={{height: "90%", backgroundColor:"blueviolet"}} className='lineo'><p>June</p></div>
                <div style={{height: "95%", backgroundColor:"green"}} className='lineo'><p>July</p></div>
             </div>
      </div>
    </div>
  )
}

export default HHomePage