import React from 'react'

const Page2 = () => {
  return (
    <div className='bg-white h-[fit-content] py-20 px-10'>
        <div className='md:flex max-w-[1020px] m-auto items-center justify-between'>
            <div className='md:w-[1000px]'>
                <img src="/laptop.jpg" alt="laptop.jpg"></img>
            </div>
            <div className='py-10'>
                <p className='text-[#00df9a] uppercase font-bold text-xs pb-3'>Data analytics dashboard</p>
                <p className='font-bold md:text-3xl ms:text-2xl text-2xl pb-3'>Manage Data analytics centrally</p>
                <p className='text-xs font-semibold pb-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eum quibusdam, voluptatem corporis a quasi repudiandae tempora. 
                    Sapiente at qui odio facere autem, deserunt voluptatem repellat, 
                    rerum error ab nulla doloremque?
                </p>
                <button className='bg-black text-[#00df9a] p-2 px-6 rounded text-xs font-bold'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Page2