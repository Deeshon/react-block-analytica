import React from 'react'

const contact = () => {
  return (
    <div className='text-white md:flex md:h-52 px-10 py-10 max-w-[1020px] m-auto justify-between items-center'>
        <div>
            <p className='font-bold md:text-2xl text-xl'>Want tips & tricks to optimize your flow?</p>
            <p className='text-xs'>Sign up to our news letter and stay upto date</p>
        </div>
        <div className='py-10'>
            <input className='p-2 w-52 rounded mb-6 text-black md:text-[16px] text-xs' type='text' placeholder='Enter you email'></input>
            <button className='md:ml-4 ml-2 p-2 md:px-6 rounded bg-[#00df9a] font-bold text-black md:text-[16px] text-xs'>Notify me</button>
            <p className='text-xs'>We care about the protection of your data. Read our</p>
            <p className='text-[#00df9a] underline text-xs'>Privacy Policy</p>
        </div>
    </div>
  )
}

export default contact