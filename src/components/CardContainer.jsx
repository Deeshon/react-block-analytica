import React from 'react'

const CardContainer = () => {
  return (
    <div className='bg-white md:h-[650px] h-[fit-content] block items-center md:pt-18 pt-20 pb-10'>
        <div className='md:flex max-w-[1120px] m-auto justify-between'>
        <div className='mt-20 mx-auto md:w-[350px] w-[300px] h-96 flex flex-col items-center shadow-xl rounded-lg hover:scale-105 duration-500'>
            <div className='md:w-24 w-28'>
                <img src={`/single.png`}/>
            </div>
            <div className='text-center md:w-64 w-40'>
                <p className='pt-6 md:text-2xl text-xl font-bold'>Single User</p>
                <p className='py-5 border-b md:text-3xl text-2xl font-bold'>$149</p>
                <p className='py-1 md:text-l text-sm font-semibold border-b'>500GB Storage</p>
                <p className='py-1 md:text-l text-sm font-semibold border-b'>1 User Allowed</p>
                <p className='py-1 md:text-l text-sm font-semibold border-b'>Send upto 2GB</p>
                <button className='bg-[#00df9a] text-black font-bold p-2 px-5 rounded mt-6'>Start Trail</button>
            </div>
        </div>
        <div className='bg-gray-100 mt-20 mx-auto md:w-[350px] w-[300px] md:h-[420px] h-96 flex flex-col items-center shadow-xl rounded-lg hover:scale-105 duration-500'>
            <div className='md:w-24 w-28'>
                <img src={`/double.png`}/>
            </div>
            <div className='text-center md:w-64 w-40'>
                <p className='pt-6 md:text-2xl text-xl font-bold'>Partnership</p>
                <p className='py-5 border-b md:text-3xl text-2xl font-bold'>$199</p>
                <p className='py-1 md:text-l text-sm font-semibold border-b'>1TB Storage</p>
                <p className='py-1 md:text-l text-sm font-semibold border-b'>3 Users Allowed</p>
                <p className='py-1 md:text-l text-sm font-semibold border-b'>Send upto 10GB </p>
                <button className='bg-black text-[#00df9a] font-bold p-2 px-5 rounded mt-6'>Start Trail</button>
            </div>
        </div>
        <div className='mt-20 mx-auto md:w-[350px] w-[300px] h-96 flex flex-col items-center shadow-xl rounded-lg hover:scale-105 duration-500'>
            <div className='md:w-24 w-28'>
                <img src={`/triple.png`}/>
            </div>
            <div className='text-center md:w-64 w-40 pb-10'>
                <p className='pt-6 md:text-2xl text-xl font-bold'>Group Account</p>
                <p className='py-5 border-b md:text-3xl text-2xl font-bold'>$299</p>
                <p className='py-1 md:text-l text-sm font-semibold border-b'>5TB Storage</p>
                <p className='py-1 md:text-l text-sm font-semibold border-b'>10 Users Allowed</p>
                <p className='py-1 md:text-l text-sm font-semibold border-b'>Send upto 20GB</p>
                <button className='bg-[#00df9a] text-black font-bold p-2 px-5 rounded mt-6'>Start Trail</button>
            </div>
        </div>
        </div>
    </div>
  )
}

// const Card = ({image, user, price, storage, usersAllowed, amount}) => {
//     return (
//         <div className='mt-20 mx-auto md:w-[350px] w-74 h-96 flex flex-col items-center shadow-xl rounded-lg hover:scale-105 duration-500'>
//             <div className='md:w-24 w-28'>
//                 <img src={`/${image}`}/>
//             </div>
//             <div className='text-center md:w-52 w-40'>
//                 <p className='pt-6 md:text-2xl text-xl font-bold'>{user}</p>
//                 <p className='py-5 border-b md:text-3xl text-2xl font-bold'>{price}</p>
//                 <p className='py-1 md:text-l text-sm font-semibold border-b'>{storage}</p>
//                 <p className='py-1 md:text-l text-sm font-semibold border-b'>{usersAllowed}</p>
//                 <p className='py-1 md:text-l text-sm font-semibold border-b'>{amount}</p>
//                 <button className='bg-[#00df9a] text-black font-bold p-2 px-5 rounded mt-6'>Start Trail</button>
//             </div>
//         </div>
        
//     )
// }

export default CardContainer