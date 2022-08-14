import React from 'react'
import './chat.css'
import Conversation from '../conversations/Conversation'
import Message from '../message/Message'
import ChatOnline from '../chatOnline/ChatOnline'
import { useContext, useState } from 'react'
import { useEffect } from 'react'
import {AuthContext} from ''
import axios from 'axios'
import { useRef } from 'react'


export default function Chat() {

    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState([null]);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    {/* AuthContext te trae toda la informacion de usuario min 48*/}
    const {user} = useContext (AuthContext);
    const scrollRef = useRef ();

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


    useEffect (()=>{
        const getMessages = async ()=>{
            try{
            const res = await axios.get("/messages/"+ currentChat?._id)
            setMessages(res.data);
            } catch(err){
                console.log(err);
            }
        };
        getMessages();
    }, [currentChat]);

    const handleSubmit = async (e)=> {
        e.preventDefault();
        const message = {
            sender: user._id,
            text: newMessage,
            conversationId: currentChat._id,
        };

        try {
            const res = await axios.post("/messages", message);
            setMessages([...messages, res.data])
            setNewMessage("")
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(()=>{
        scrollRef.current?.scrollIntoView({behavior:"smooth"})
    },[messages])

  return (
    <div className='chat'>
        <div className="chatmenu">
            <div className="chatmenuWrapper">
                <input placeholder="Search for client" className='chatmenuInput' />
                {conversations.map((c)=> (
                <div onClick={()=>setCurrentChat(c)}>
                <Conversation conversation={c} currentUser={user}/>
                </div>
                ))}
               
               
            </div>
        </div>
        <div className="chatbox">
            <div className="chatboxWrapper">
                {currentChat ? (
                <>
                <div className="chatboxTop">
                    {messages.map(m=>(
                        <div ref={scrollRef}>
                        <Message message={m} own={m.sender === user._id}/>
                        </div>
                    ))}
                </div>
                <div className="chatboxBottom">
                    <textarea 
                        className='chatMessageInput'
                        placeholder='witre something...' 
                        onChange={(e)=>setNewMessage(e.target.value)}
                        value= {newMessage}
                    ></textarea>
                    <button className='chatSubmmitButton' onClick={handleSubmit}>send</button>
                </div>
                </>) : (
                <span className='noConversationText'>
                    Open a conversation to start a chat
                </span> )}
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

