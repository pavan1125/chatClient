import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [details,setDetails]=useState({
     userName:"",
     room:""
  })

const changeHandler=(e)=>{
  setDetails((prev)=>{
    return{
      ...prev,
      [e.target.name]:e.target.value
    }
  })
}
  return (
    <div>
       <input type='text' name="userName" value={details.userName} onChange={changeHandler} />
       <input type='text' name="room" value={details.room} onChange={changeHandler} />
       <button><Link to={`/chat?userName=${details.userName}&&room=${details.room}`}>submit</Link></button>
    </div>
  )
}

export default Home
