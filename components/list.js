import React from 'react'

export default function List({ children, name }) {
  return (
    <div className='p-4 bg-slate-400 rounded-md flex-1'>
      <h2 className='text-gray-900 font-bold mb-4'>{name}</h2>
      <div className='flex flex-col gap-2'>
        {children}
      </div>
    </div>
  )
}
