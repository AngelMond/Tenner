import React from 'react'
import "./conversation.css"

const data = [
  { 
    image:'https://avatars.githubusercontent.com/u/94471464?v=4',
    title:'Pablo Garcia',
  },
  { 
    image:'https://avatars.githubusercontent.com/u/99716209?v=4',
    title:'David Trujillo',
  },
  ]

const Conversation = () => {
  return (
    data.map (({image,title})=>{
      return (
        <div className='conversation'>
          <img className='conversationImg' src={image} alt={title}/>
          <span className="conversationName">{title}</span>
       </div>
      )
    })
  )
}

export default Conversation

