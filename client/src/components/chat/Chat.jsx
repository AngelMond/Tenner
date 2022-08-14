import React from 'react'
import './chat.css'
import Conversation from '../conversations/Conversation'
import Message from '../message/Message'
import ChatOnline from '../chatOnline/ChatOnline'
import { useContext, useState } from 'react'
import { useEffect } from 'react'
import {AuthContext} from ''
import axios from 'axios'


export default function Chat() {

    const [conversations, setConversations] = useState([]);

    {/* AuthContext te trae toda la informacion de usuario min 48*/}
    const {user} = useContext (AuthContext)

    useEffect (()=>{
        const getConversations = async ()=>{
            try{
            const res = await axios.get("/conversations/"+user.id)
            setConversations(res.data);
            } catch(err){
                console.log(err);
            }
        };
        getConversations();
    }, [user._id]);

  return (
    <div className='chat'>
        <div className="chatmenu">
            <div className="chatmenuWrapper">
                <input placeholder="Search for client" className='chatmenuInput' />
                {conversations.map((c)=> (
                <Conversation conversation={c} currentUser={user}/>
                ))}
               
               
            </div>
        </div>
        <div className="chatbox">
            <div className="chatboxWrapper">
                <div className="chatboxTop">
                <Message/>
                <Message own={true}/>
                <Message/>
                </div>
                <div className="chatboxBottom">
                    <textarea className='chatMessageInput' placeholder='witre something...'></textarea>
                    <button className='chatSubmmitButton'>send</button>
                    
                </div>
            </div>
        </div>
        <div className="chatonline">
            <div className="chatonlineWrapper">
                <ChatOnline/>
                <ChatOnline/>
                <ChatOnline/>
            </div>
        </div>
    </div>
  )
}

