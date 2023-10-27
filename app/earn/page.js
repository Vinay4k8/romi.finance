import { Vest, earnTables } from '@/utils/earnData'
import React from 'react'

const page = () => {
  return (
    <div className='p-5 max-w-6xl mx-auto mb-10 '>
        <h1 className='mt-10 text-white text-3xl'>Earn</h1>
        <p className='text-[#cecece] mt-3'>Stake $ZOMI and $ZLP to earn rewards.</p>
        <div className='grid lg:grid-cols-2  mt-3 gap-6'>
            {earnTables.map((table)=>{
                return(
                    <div className='border-[0.1px] border-[#4d4d4e] w-full text-white rounded-sm bg-[#151515] flex flex-col'>
                        <h3 className='p-2 my-1 text-xl'>{table.title}</h3>
                        <div className='border-t-[0.1px] border-[#4d4d4e]' />
                        {table?.info1.map((info,index)=>{
                            return <div key={index} className='flex justify-between p-2'>
                                <span className='text-[#b9b9b9]'>{info.name}</span><span>{info.cost}</span>
                            </div>
                        })}
                        <div className='border-t-[0.1px] border-[#4d4d4e]' />
                        {table.info2 && table?.info2.map((info,index)=>{
                            return <div key={index} className='flex justify-between p-2'>
                                <span className='text-[#b9b9b9]'>{info.name}</span><span>{info.cost}</span>
                            </div>
                        }) }
                       {table.info2 && <div className='border-t-[0.1px] border-[#4d4d4e]' />}
                        {table.info3 && table?.info3.map((info,index)=>{
                            return <div key={index} className='flex justify-between p-2'>
                                <span className='text-[#b9b9b9]'>{info.name}</span><span>{info.cost}</span>
                            </div>
                        })}
                        <div className='  mt-auto'>
                        <div className='border-t-[0.1px] border-[#4d4d4e] mt-auto' />
                        <button   className=' p-2 m-3 bg-[#3eb489] rounded-md hover:bg-[#3eb489]/80 ' > {table.title==="Total Rewards" ||table.title==="Escrowed $ZOMI"?"Connect wallet":"Buy"+table.title}</button>
                        </div>
                    </div>
                )
            })}
        </div>
        <h1 className='mt-10 text-white text-3xl'>Vest</h1>
        <p className='text-[#cecece] mt-3'>Convert esZOMI tokens to $ZOMI tokens.</p>
        <p className='text-[#cecece] mt-3'>Please read the vesting details before using the vaults.</p>
        <div className='grid lg:grid-cols-2  mt-3 gap-6'>
            {Vest.map((table)=>{
                return(
                    <div className='border-[0.1px] border-[#4d4d4e] w-full text-white rounded-sm bg-[#151515] '>
                        <h3 className='p-2 my-1 text-xl'>{table.title}</h3>
                        <div className='border-t-[0.1px] border-[#4d4d4e]' />
                        {table?.info1.map((info,index)=>{
                            return <div key={index} className='flex justify-between p-2'>
                                <span className='text-[#b9b9b9]'>{info.name}</span><span>{info.cost}</span>
                            </div>
                        })}
                        <div className='border-t-[0.1px] border-[#4d4d4e]' />
                        <button   className=' p-2 m-3 bg-[#3eb489] rounded-md hover:bg-[#3eb489]/80 ' > Connect wallet</button>
                        </div>
                        )})}
                        </div>

    </div>
  )
}

export default page