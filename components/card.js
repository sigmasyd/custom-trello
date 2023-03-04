import React from 'react'
import Image from 'next/image'

export default function Card({ text }) {
  return (
    <div className='bg-slate-100 text-slate-900 rounded-md p-3 flex flex-col gap-4'>
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
