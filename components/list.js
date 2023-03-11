import React from 'react'

export default function List({ children, name, id, handleDrop }) {
  const handleDragOver = (e) => {
    e.preventDefault()
    console.log('DragOver event', e)
  }

  return (
    <div id={id} onDragOver={handleDragOver} onDrop={handleDrop} className='p-4 bg-slate-400 rounded-md flex-1'>
      <h2 className='text-gray-900 font-bold mb-4'>{name}</h2>
      <div className='flex flex-col gap-2'>
        {children}
      </div>
    </div>
  )
}
