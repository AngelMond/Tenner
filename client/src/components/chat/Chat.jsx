import React from 'react'
import './chat.css'
import Conversation from '../conversations/Conversation'
import Message from '../message/Message'

const Chat = () => {
  return (
    <div className='chat'>
        <div className="chatmenu">
            <div className="chatmenuWrapper">
                <input placeholder="Search for client" className='chatmenuInput' />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
            </div>
        </div>
        <div className="chatbox">
            <div className="chatboxWrapper">
                <div className="chatboxTop">
                <Message/>
                <Message own={true}/>
                <Message/>
                </div>
                <div className="chatboxbottom">
                    
                </div>
            </div>
        </div>
        <div className="chatonline">
            <div className="chatonlineWrapper">
                Online
            </div>
        </div>
    </div>
  )
}

export default Chat