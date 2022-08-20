import React from 'react'
import './message.css'


const data = [
  { 
    image:'https://avatars.githubusercontent.com/u/95903051?v=4',
    title:'Angel Mondragon',
    message:"Hola, como estas?",
    cN:"message own",
    timeAgo:"12 hours ago",
  },
  { 
    image:'https://avatars.githubusercontent.com/u/95456210?v=4',
    title:'Chris Nunez',
    message:"Sup",
    cN:"message",
    timeAgo:"6 hours ago",
  },
  { 
    image:'https://avatars.githubusercontent.com/u/95903051?v=4',
    title:'Angel Mondragon',
    message:"Estoy buscando a un cocinero experto de Ramen",
    cN:"message own",
    timeAgo:"3 hours ago",
  },
  { 
    image:'https://avatars.githubusercontent.com/u/95456210?v=4',
    title:'Chris Nunez',
    message:"Claro, cuantos platos quieres?",
    cN:"message",
    timeAgo:"1 hour ago",
  },

  ]


export default function Message() {
  return (
    data.map (({image,title,message,cN,timeAgo})=>{
      return (
      <div className={cN}>
        <div className="messageTop">
          <img className='messageImg' src={image} alt={title} />
          <p className='messageText' >{message}</p>
        </div>
      <div className="messageBottom">
         {timeAgo}
      </div>
    </div>
      )
    })
    
  )
}
