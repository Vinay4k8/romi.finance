import Image from 'next/image'
import { cards,infoCards,ecoTokens } from '@/utils/data'

export default function Home() {
  return (<div>
    <div className='max-w-6xl mx-auto mt-5 p-6'>
        <div className='text-left w-96 p-5 '>
          <h1 className='leading-snug gap-y-4 text-white text-5xl font-bold'>
            Decentralized Perpetual Exchange
          </h1>
          <h3 className='text-gray-300 mt-3 text-xl '> 
          Trade BTC, ETH, AVAX and other top cryptocurrencies with up to 30x leverage directly from your wallet
          </h3>
          <button className='rounded-md p-2 bg-[#3eb489] text-white text-base hover:bg-[#3eb489]/80 mt-10'>
            Launch Exchange
          </button>
        </div>
        <div className='grid md:grid-cols-3 gap-8 ml-10'>
          {cards.map((card)=>{
            return (
              <div className='border-[1px] w-80 rounded-sm border-gray-600 shadow-lg flex gap-5 items-center p-5 my-5'>
                    <img src={card.link} />
                    <div className='flex flex-col gap-y-4'>
                      <h4 className='text-gray-300 text-base'>{card.title}</h4>
                      <h3 className='text-white text-xl'>{card.cost}</h3>
                    </div>
                </div>
            )
          })}
        </div>
    </div>
    <div className='border-t-[0.1px] mt-20 border-t-gray-500'></div>
    <div className='max-w-6xl mx-auto'>
          <div className='grid md:grid-cols-3 gap-10 mt-10 grid-cols-2'>
            {infoCards.map((card)=>{
              return (
                <div className='p-2'>
                  <div className='flex gap-4 items-center'>
                  <img src={card.image}/>
                  <h3 className='text-white text-xl'>{card.title}</h3>
                  </div>
                  <p className='text-lg text-[#cecece] mt-4'>{card.info}</p>
                </div>
              )
            })}
          </div>
          <h2 className='text-4xl font-semibold w-80 m-2 mt-10 text-white'>Two tokens create our ecosystem</h2>
          <div className='grid md:grid-cols-2 gap-6 mt-6'>
            {ecoTokens.map((token)=>{
              return (
                <div className='bg-[#151515] p-4 px-6 border-[0.1px] border-[#cecece] rounded-md shadow-lg md:m-0 m-5'>
                    <div className='flex gap-4 items-center mt-2'>
                      <img className='w-10' src={token.image} />
                      <h3 className='text-xl font-medium text-white'>{token.title}</h3>
                    </div>
                    <p className='mt-3 text-white text-lg'>{token.info}</p>
                    <p className='mt-3 text-[#cecece]'>{token.info2}</p>
                    <button className='rounded-md p-2 bg-[#3eb489] text-white text-base hover:bg-[#3eb489]/80 mt-10 md:w-auto w-full'>Buy</button>
                    <button className='rounded-md p-2 md:w-auto w-full text-white text-base md:ml-5 hover:bg-white/10 border-[1px] border-[#cecece] mt-10 mx-auto'>Read more</button>
                </div>
              )
            })}
          </div>
    </div>
    </div>
  )
}
