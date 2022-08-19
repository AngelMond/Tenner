import React from 'react'
import './chatOnline.css'



const data = [
  { 
    image:'https://avatars.githubusercontent.com/u/95903051?v=4',
    title:'Angel Mondragon',
  },
  { 
    image:'https://avatars.githubusercontent.com/u/95456210?v=4',
    title:'Chris Nunez',
  },
  { 
    image:'https://avatars.githubusercontent.com/u/100006802?v=4',
    title:'Jorge Cárdenas',
  },
  { 
    image:'https://avatars.githubusercontent.com/u/94471464?v=4',
    title:'Pablo Garcia',
  },
  ]


export default function ChatOnline() {
  return (
    data.map (({image,title})=>{
      return (
        <div className='chatOnline'>
        <div className="chatOnlineFriends">
            <div className="chatOnlineImgContainer">
                <img className='chatOnlineImg' src={image} alt={title} />
                <div className="chatOnlineBadge"></div>
            </div>
            <span className="chatOnlineName">{title}</span>
        </div>
    </div>
      )
    })
  )
}