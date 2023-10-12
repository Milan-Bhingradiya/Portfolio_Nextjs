import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='flex flex-col  items-center justify-center h-screen ' >
      
    <div  className=' border-black text-6xl'> Welcome </div>
    <div className='h-5'></div>
      
    <div><Link href='milan'>click</Link></div>
    </div>
  )
}
