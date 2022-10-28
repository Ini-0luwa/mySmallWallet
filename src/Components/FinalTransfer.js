import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
const FinalTransfer = () => {
    const state = useLocation().state;
    console.log(state, "state");
  return (
    <div className='homBg2'>FinalTransfer</div>
  )
}

export default FinalTransfer