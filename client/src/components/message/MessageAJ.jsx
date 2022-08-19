import React from 'react'
import './message.css'


const data = [
  { 
    image:'https://avatars.githubusercontent.com/u/95903051?v=4',
    title:'Angel Mondragon',
    message:"Hola, como estas?",
    cN:"message own",
    timeAgo:"1 hour ago",
  },
  { 
    image:'https://avatars.githubusercontent.com/u/100006802?v=4',
    title:'Jorge Cárdenas',
    message:"bien, gracias",
    cN:"message",
    timeAgo:"45 mins ago",
  },
  { 
    image:'https://avatars.githubusercontent.com/u/95903051?v=4',
    title:'Angel Mondragon',
    message:"Me interesaria contratarte para desarrollar una app chingona",
    cN:"message own",
    timeAgo:"30 minsago",
  },
  { 
    image:'https://avatars.githubusercontent.com/u/100006802?v=4',
    title:'Jorge Cárdenas',
    message:"claro, en que lenguaje estas pensando",
    cN:"message",
    timeAgo:"15 mins ago",
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
