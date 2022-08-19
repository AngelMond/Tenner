import React from 'react'
import './chat.css'
import Conversation from '../conversations/Conversation'
import MessageAJ from '../message/MessageAJ'
import MessageAE from '../message/MessageAE'
import MessageAC from '../message/MessageAC'
import ChatOnline from '../chatOnline/ChatOnline'
import { useState } from 'react'

const Chat = () => {

    const [active, setActive] = useState ("AE");

  return (
    <div className='chat'>
        <div className="chatmenu">
            <div className="chatmenuWrapper">
                <input placeholder="Search for client" className='chatmenuInput' />
                <div className='conversation' onClick={()=> setActive('AJ')}>
                <img className='conversationImg' src='https://avatars.githubusercontent.com/u/100006802?v=4' alt='Jorge'/>
                 <span className="conversationName">Jorge Cárdenas</span>
                </div>
                <div className='conversation'onClick={()=> setActive('AE')}>
                <img className='conversationImg' src='https://avatars.githubusercontent.com/u/99764345?v=4' alt='Edwin'/>
                 <span className="conversationName">Edwin Simpson</span>
                </div>
                <div className='conversation'onClick={()=> setActive('AC')}>
                <img className='conversationImg' src='https://avatars.githubusercontent.com/u/95456210?v=4' alt='Chris'/>
                 <span className="conversationName">Chris Nunez</span>
                </div>
                <Conversation />
            </div>
        </div>
        <div className="chatbox">
            <div className="chatboxWrapper">
                <div className="chatboxTop">
                {active === 'AJ' && <MessageAJ/> }
                {active === 'AE' && <MessageAE/> }
                {active === 'AC' && <MessageAC/> }
                </div>
                <div className="chatboxBottom">
                    <textarea className='chatMessageInput' placeholder='write something...'></textarea>
                    <button className='chatSubmmitButton'>send</button>
                    
                </div>
            </div>
        </div>
        <div className="chatonline">
            <div className="chatonlineWrapper">
                <ChatOnline/>
            </div>
        </div>
    </div>
  )
}

export default Chat

