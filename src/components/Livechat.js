import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName } from '../utils/helper';


const Livechat = () => {
    const [liveMessage,setLiveMessage]=useState("");
    const dispatch=useDispatch();
    const chatmessages=useSelector((store)=>store.chat.messages);

    useEffect(()=>{
           
       

      const id= setInterval(()=>{
        //api pollling
      //console.log("api pollling");
      dispatch(addMessage({
        name: generateRandomName(),
        message:"This is Diwakar Live Chat 😍😍😍😉",
      }))
      },1000);

      return ()=>clearInterval(id);

     })
    return (
        <>
        <div className='w-full h-[450px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
       
       {  chatmessages.map((c,i) =>(
            <ChatMessage key={i} name={c.name} message={c.message}></ChatMessage>
         ))
       }
      </div>
      <form className='w-full p-2 ml-2 border border-black flex' onSubmit={(e)=>{
        e.preventDefault();
        console.log("onformSubmit",liveMessage);
        dispatch(addMessage({
            name:"Diwakar",
            message:liveMessage,
        }))
      }}> 
      <input className="w-96" type="text" value={liveMessage} placeholder='write chat' onChange={(e)=>{setLiveMessage(e.target.value)}}></input>
      <button className='px-2 mx-2 bg-green-100'>Send</button>

      </form>


        </>
    );
};

export default Livechat;