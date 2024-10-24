import React from 'react'
import { Merienda } from 'next/font/google'

const merienda = Merienda({
  subsets: ['latin'],
})

const PageHeader = ({ title }: { title: string }) => {
  return (
    <div className="py-8 w-full flex justify-between items-center">
      <Decoration side="left" />
      <Title title={title} />
      <Decoration side="right" />
    </div>
  )
}

const Decoration = ({ side }: { side: 'left' | 'right' }) => (
  <div className={`w-full md:w-[30%] flex ${side === 'right' ? 'flex-row-reverse' : ''}`}>
    <div className="w-full flex flex-col items-end ">
      <div className="w-[90%] mb-2 h-[1px] bg-gray-200"></div>
      <div className="w-full mb-2 h-[1px] bg-gray-300"></div>
    </div>
    <div className={`w-[1px] h-8 bg-primary ${side === 'left' ? 'relative bottom-5 mb-2' : 'relative -bottom-3 h-11'}`}></div>
  </div>
)

const Title = ({ title }: { title: string }) => (
  <div className='flex flex-col w-[40%]'>
    <div className='w-[40%] mb-2 h-[1px] bg-primary'></div>
    <h1 className={`text-5xl font-bold mb-4 text-center text-primary ${merienda.className}`}>{title}</h1>
    <div className='w-[40%] mb-2 h-[1px] bg-primary relative left-[60%]'></div>
  </div>
)

export default PageHeader
