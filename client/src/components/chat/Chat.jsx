import React from 'react'
import './chat.css'
import Conversation from '../conversations/Conversation'

const Chat = () => {
  return (
    <div className='chat'>
        <div className="chatmenu">
            <div className="chatmenuWrapper">
                <input placeholder="Search for client" className='chatmenuInput' />
                <Conversation />
            </div>
        </div>
        <div className="chatbox">
            <div className="chatboxWrapper">
                Box
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