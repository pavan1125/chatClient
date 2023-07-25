import React, { useState, useEffect } from "react";

import io from "socket.io-client";


const ENDPOINT = 'https://chatserver-stq1.onrender.com';


let socket;
const Chat = () => {
    
  const [recievedMessage,setRecievedMessage]=useState("")
  const [message, setMessage] = useState('');
  const [room,setRoom]=useState("")
  const[user,setUser]=useState("")
  socket = io(ENDPOINT);
   
      
  
        
        socket.on("recieve-message",(data)=>{
            if(data.user!==user){
              setRecievedMessage(data.message)
            }
        })
        socket.on("user-joined",(data)=>{
            if(data.user!==user){
              setRecievedMessage(data.message)
            }
        })


   

  const sendMessage=()=>{
     if(message){
       socket.emit("send-message",{message,user,room})
     }
  }
  
  const joinRoomHandler=()=>{
      if(room){
         socket.emit("join",{user,room,})
      }
  }

  return (
    <div className="outerContainer">
      <div className="container">
         
         {
             recievedMessage && <h1>{recievedMessage}</h1>
         }
      </div>
       <label><input placeholder="name" value={user} onChange={(e)=>setUser(e.target.value)}/> name</label>
       <label><input type="text" value={room} onChange={(e)=>setRoom(e.target.value)}/></label>
       <button onClick={joinRoomHandler}>joinRoom</button>
      <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)}/>
      <button onClick={sendMessage}>send message</button>
    </div>
  );
}

export default Chat;