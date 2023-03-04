import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <div className='p-2 text-center flex justify-center items-center bg-slate-900'>
      <Image src="/static/images/avatar.png" width={40} height={60} alt=""/>
      <h1 className='p-2 text-white font-bold font text-xl'>Sigma Syd</h1>
    </div>
  )
}
