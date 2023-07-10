import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white h-96 text-center max-w-[620px] mx-auto my-20 px-5 mb-52'>
        <p className='uppercase text-[#00df9a] font-semibold pb-5 text-xs'>Growing with data analytics</p>
        <p className='text-6xl font-bold pb-6'>Grow with data.</p>
        <p className='pb-6 font-medium text-4xl'>Fast, flexible financing for <Typed className='text-gray-500' strings={[
                "BTC",
                "SAAS",
                "BTB",
                "D2C"
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop /></p>
        <p className='pb-6 text-gray-500 font-bold text-l'>Monitor your data analytics to increase revenue for BTB, BTC, & SaaS platforms</p>
        <button className='bg-[#00df9a] text-black font-bold p-2 px-8 rounded'>Get Started</button>
    </div>
  )
}

export default Hero