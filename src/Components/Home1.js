import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';

const Home1 = ({data}) => {
    console.log(data,"data ");
  return (
    <div>
        <h1>Home1</h1>
        <ul> hi
            {
                data.map((a,i) => {
                    return <li key={i}>{a.username} <Link to={{pathname:`home2/${a.id}`}} state={a}><button>Update</button></Link></li>
                })
            }
        </ul>
    </div>
  )
}

export default Home1