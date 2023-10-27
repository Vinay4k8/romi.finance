import { dashTokens, indexCom, stats } from '@/utils/dashboardData'
import React from 'react'

const page = () => {
  return (
    <div className='p-5 max-w-6xl mx-auto mb-10 '>
        <div className='flex gap-2 items-center mt-10'>
        <h1 className=' text-white text-3xl'>Stats</h1>
        <img  src='https://zomi.finance/static/media/ic_avalanche_24.4f4088f4.svg' className='w-6'/>
        </div>
        <p className='text-[#cecece] mt-3'>Ethereum Total Stats start from 06 Jan 2022.</p>
        <p className='text-[#cecece] '>For detailed stats:</p>
        <div className='grid lg:grid-cols-2  mt-3 gap-6'>
            {stats.map((table)=>{
                return(
                    <div className='border-[0.1px] border-[#4d4d4e] w-full text-white rounded-sm bg-[#151515] flex flex-col'>
                        <h3 className='p-2 my-1 text-xl'>{table.title}</h3>
                        <div className='border-t-[0.1px] border-[#4d4d4e]' />
                        {table?.info1.map((info,index)=>{
                            return <div key={index} className='flex justify-between p-2'>
                                <span className='text-[#b9b9b9]'>{info.name}</span><span>{info.cost}</span>
                            </div>
                        })}
                        </div>)})}
         </div>
         <div className='flex gap-2 items-center mt-10'>
        <h1 className=' text-white text-3xl'>Tokens</h1>
        <img  src='https://zomi.finance/static/media/ic_avalanche_24.4f4088f4.svg' className='w-6'/>
        </div>
        <p className='text-[#cecece] mt-3'>Platform and $ZLP index tokens.</p>
                        
        <div className='grid lg:grid-cols-2 gap-7'>
            {dashTokens.map((token)=>{
                return (
                    <div className='border-[0.1px] border-[#4d4d4e] w-full text-white rounded-sm bg-[#151515] flex  mt-10 p-3'>
                        <div className='flex-grow'>
                            <div className='flex gap-2 items-center'>
                                <img src={token.image} className='w-10'/>
                                <div className='ml-2'> 
                                   <h3 className='text-lg '>{token.title}</h3> 
                                   <p className='text-[#4d4d4e] text-sm'>{token.title}</p>
                                </div>
                            </div>
                            <div className='border-t-[0.1px]' >
                            {token?.info1.map((info,index)=>{
                            return <div key={index} className='flex justify-between p-2'>
                                <span className='text-[#b9b9b9]'>{info.name}</span><span>{info.cost}</span>
                            </div>
                        })}
                            </div>
                        </div>
                        <div className='bg-blue-500 m-3 my-auto w-44 h-44 rounded-full flex items-center justify-center'>
                            <div className='w-40 h-40 rounded-full bg-[#151515] flex items-center justify-center text-white text-lg'>
                        {token.rtitle}
            </div>
        </div>
                    </div>
                )
            })}

        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-7 mt-10'>
            {indexCom.map((item)=>{
                return (
                    <div className='border-[0.1px] border-[#4d4d4e] w-full text-white rounded-sm bg-[#151515] flex flex-col'>
                        <div className='flex gap-3 items-center'>
                            <h3 className='p-2 my-1 text-xl'>{item.cap}</h3>
                            <img className='w-7' src={item.image} />
                        </div>
                    <div className='border-t-[0.1px] border-[#4d4d4e]' />
                    {item?.info1.map((info,index)=>{
                        return <div key={index} className='flex justify-between p-2'>
                            <span className='text-[#b9b9b9]'>{info.name}</span><span>{info.cost}</span>
                        </div>
                    })}
                    </div>
                )
            })}
        </div>




    </div>
  )
}

export default page