"use client";
import Link from 'next/link'
import React, { useState } from 'react'

const NavLinks=["Home","Dashboard","NFT","Earn","Buy","Referrals","Ecosystem","About","Settings"]


const Navbar = () => {

    const [active,setActive]=useState(false)

  return (
    <div className='flex sticky top-0 bg-[#151515] justify-between items-center shadow-lg px-1 gap-3 pr-5'>
        <div className='text-white flex items-center'>
          <button className='md:hidden block'
          onClick={()=>setActive(active?false:true)}
          >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          </button>
            <img className='w-16 md:w-20 inline ' src={"/New Logo.png"} />
           <span className='text-3xl  font-saira'>Romi Finance</span>
        </div>
        <div 
        className={`text-gray-400 top-0  fixed lg:static bg-[#151515] lg:flex gap-3 text-base ${active?"-left-0 flex flex-col w-full min-h-screen p-5 pl-7 gap-y-5":"-left-full"}`}>
          <button className='md:hidden block'
          onClick={()=>setActive(active?false:true)}
          >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          </button>
          {NavLinks.map((link,index)=>{
            return <Link key={index} href={link==="Home"?"/":"/"+link.toLowerCase()}
            className='hover:text-gray-200'>{link}</Link>
          })}
        </div>
        <div className='flex gap-3 items-center justify-center text-sm text-white' >
            <button className='rounded-md p-2 bg-[#3eb489] text-white text-sm hover:bg-[#3eb489]/80'>
              Trade
            </button>
            <button className='border-[1px] border-gray-400 p-2 rounded-md flex gap-2 items-center hover:bg-white/10'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
              </svg>
              Connect
            </button>
            <button className='border-[1px] border-gray-400 p-2 rounded-md flex gap-2 items-center hover:bg-white/10'>
              <div className='border-r-[1px] border-r-gray-400 pr-2'>

                <img src="https://logowik.com/content/uploads/images/ethereum3649.jpg"className='w-6 rounded-xl h-6 '/>
              </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>

            </button>
        </div>
    </div>
  )
}

export default Navbar