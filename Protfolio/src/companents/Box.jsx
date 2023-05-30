import React from 'react'

export default function Box({item}) {
  return (
    <div className='Box'>
      <img src={item.image} alt="" />
      <div className="boxInfo">
        <p>{item.title}</p>
        <span>{item.info}</span>
        <button>LEARN MORE</button>
      </div>
    </div>
  )
}
