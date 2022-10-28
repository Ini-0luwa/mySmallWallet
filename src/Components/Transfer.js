import React from 'react';
import { Link } from 'react-router-dom';
// import Home1 from './Home1';
import "./Transfer.css";

const Transfer = ({data}) => {
  return (
    <div className='homBg2'>
      Transfer
        <ul>
          {
            data.map((a) => {
              return <li key={a.id}>{a.username} <Link to='debit'>
                <button>Transfer</button>
              </Link></li>
            })
          }
        </ul>
    </div>
  )
}

export default Transfer;