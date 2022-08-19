import React from 'react'
import './message.css'


const data = [
  { 
    image:'https://avatars.githubusercontent.com/u/95903051?v=4',
    title:'Angel Mondragon',
    message:"Hola, como estas?",
    cN:"message own",
    timeAgo:"30 mins ago",
  },
  { 
    image:'https://avatars.githubusercontent.com/u/99764345?v=4',
    title:'Edwin Simpson',
    message:"que onda?",
    cN:"message",
    timeAgo:"20 mins ago",
  },
  { 
    image:'https://avatars.githubusercontent.com/u/95903051?v=4',
    title:'Angel Mondragon',
    message:"Estoy buscando gente para desarrollar una app y volverme millonario",
    cN:"message own",
    timeAgo:"15 mins ago",
  },
  { 
    image:'https://avatars.githubusercontent.com/u/99764345?v=4',
    title:'Edwin Simpson',
    message:"Perdon, ya tengo fobia a programar",
    cN:"message",
    timeAgo:"5 mins ago",
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

