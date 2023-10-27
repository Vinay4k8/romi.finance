import { icons } from '@/utils/data'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#151515] mt-20 border-t-[0.1px] border-t-[#cecece]'>
        <div className='flex flex-col p-4 items-center justify-center'>
          <div className='flex '>
              <img className='w-10' src='/New Logo.png'/>
              <h3 className='font-serif text-xl font-bold text-white mt-3'>Romi Finance</h3>
          </div>
          <div className='flex items-center justify-center mt-5 gap-10'>
              {icons.map((icon,index)=>{
                return <img key={index} className='w-7 cursor-pointer' src={icon}/>
              })}
          </div>
          <div className='flex items-center justify-center gap-5 mt-10'>
            <p className='cursor-pointer text-[#cecece]'>Terms and Conditions</p>
            <p className='cursor-pointer text-[#cecece]'>Referral Terms</p>
            <p className='cursor-pointer text-[#cecece]'>Media Kit</p>
          </div>
        </div>
    </div>
  )
}

export default Footer