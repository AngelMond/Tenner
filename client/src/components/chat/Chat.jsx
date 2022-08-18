import React from 'react'
import './chat.css'
import Conversation from '../conversations/Conversation'
import Message from '../message/Message'
/*import ChatOnline from '../chatOnline/ChatOnline'*/
import { useContext, useState } from 'react'
import { useEffect } from 'react'
import {AuthContext} from ''
import axios from 'axios'
import { useRef } from 'react'
import {io} from 'socket.io-client'

 

export default function Chat() {

    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState([null]);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    {/* AuthContext te trae toda la informacion de usuario min 48*/}
    const {user} = useContext (AuthContext);
    const scrollRef = useRef();
    const socket = useRef();

    useEffect(() => {
        socket.current = io("ws://localhost:8900");
        socket.current.on("getMessage", (data) => {
            setArrivalMessage({
              sender: data.senderId,
              text: data.text,
              createdAt: Date.now(),
            });
          });
      }, []);

      useEffect(() => {
        arrivalMessage &&
          currentChat?.members.includes(arrivalMessage.sender) &&
          setMessages((prev) => [...prev, arrivalMessage]);
      }, [arrivalMessage, currentChat]);

    useEffect(() => {
        socket.current.emit("addUser", user._id);
        socket.current.on("getUsers", (users) => {
          setOnlineUsers(
            user.followings.filter((f) => users.some((u) => u.userId === f))
          );
        });
      }, [user]);


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

    const receiverId = currentChat.members.find(
        (member) => member !== user._id
        );


    socket.current.emit("sendMessage", {
        senderId: user._id,
        receiverId,
        text: newMessage,
        });



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
         {/*<div className="chatonline">
           <div className="chatonlineWrapper">
                <ChatOnline onlineUsers={onlineUsers} currentId={user.id} setCurrentChat={setCurrentChat}/>
                </div>
        </div>*/}
    </div>
  )
}

