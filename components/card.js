import React from 'react'
import Image from 'next/image'

export default function Card({ text, id }) {
  const handleClick = () => {
    console.log(id)
  }
  
  return (
    <div onClick={handleClick} className='bg-slate-100 text-slate-900 rounded-md p-3 flex flex-col gap-4'>
      <div className='flex justify-between'>
        <div className='flex flex-col gap-4'>
          <p className='font-medium'>{ text }</p>
          <p className='font-medium'>{ id }</p>
        </div>
        <Image src='/static/icons/edit.svg' alt="" width={20} height={20} />
      </div>
      <div className='flex justify-between'>
        <Image src='/static/images/avatar.png' alt="" width={20} height={20} />
        <Image src='/static/icons/square.svg' alt="" width={20} height={20} />
      </div>
    </ div>
  )
}
