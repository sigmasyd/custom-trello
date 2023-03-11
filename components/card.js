import React from 'react'
import Image from 'next/image'

export default function Card({ text, id, setDragged, list }) {
  const handleDragStart = (e) => {
    setDragged({
      data: {
        text,
        id
      },
      // funciona pero no da buena espina, prefiero enviar como prop
      // al card desde el Board
      //list: e.target.closest('[data-list]').dataset.list
      list: list
    })
  }
  
  return (
    <div 
      draggable 
      onDragStart={handleDragStart} 
      className='bg-slate-100 text-slate-900 rounded-md p-3 flex flex-col gap-4 hover:cursor-move'
    >
      <div className='flex justify-between'>
        <p className='font-medium'>{ text }</p>
        <Image src='/static/icons/edit.svg' alt="" width={20} height={20} />
      </div>
      <div className='flex justify-between'>
        <Image src='/static/images/avatar.png' alt="" width={20} height={20} />
        <Image src='/static/icons/square.svg' alt="" width={20} height={20} />
      </div>
    </ div>
  )
}
