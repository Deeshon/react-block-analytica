import React from 'react'
import {FaFacebookSquare} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import {FaTwitterSquare, FaGithubSquare} from 'react-icons/fa'
import {ImLinkedin} from 'react-icons/im'


const Footer = () => {
  return (
    <div className='text-white h-72 md:max-w-[1120px] mx-auto md:flex p-10 justify-between items-center'>
        <div className='h-[180px] pr-5'>
            <div className='md:w-[350px]'>
                <h1 className='text-[#00df9a] font-bold text-xl pb-5'>REACT.</h1>
                <p className='text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Iusto totam, temporibus, repudiandae neque dolore facilis ipsam 
                    incidunt molestias dolo.
                </p>
                <div className='flex w-56 pt-4 justify-between'>
                    <FaFacebookSquare size={25} />
                    <GrInstagram size={25} />
                    <FaTwitterSquare size={25} />
                    <FaGithubSquare size={25} />
                    <ImLinkedin size={25} />
                </div>
            </div>
        </div>
        <div className='md:text-sm text-xs pt-5 pb-10 flex md:w-[700px] justify-between'>
            <div>
                <ul>
                    <li className='py-2 h-8 text text-gray-400'>Solutions</li>
                    <li className='py-2 h-8 text'>Analytics</li>
                    <li className='py-2 h-8 text'>Marketing</li>
                    <li className='py-2 h-8 text'>Commerce</li>
                    <li className='py-2 h-8 text'>Insights</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='py-2 h-8 text text-gray-400'>Support</li>
                    <li className='py-2 h-8 text'>Pricing</li>
                    <li className='py-2 h-8 text'>Documentation</li>
                    <li className='py-2 h-8 text'>Guides</li>
                    <li className='py-2 h-8 text'>API Stations</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='py-2 h-8 text text-gray-400'>Company</li>
                    <li className='py-2 h-8 text'>About</li>
                    <li className='py-2 h-8 text'>Blog</li>
                    <li className='py-2 h-8 text'>Jobs</li>
                    <li className='py-2 h-8 text'>Press</li>
                    <li className='py-2 h-8 text'>Partners</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='py-2 h-8 text text-gray-400'>Legal</li>
                    <li className='py-2 h-8 text'>Claim</li>
                    <li className='py-2 h-8 text'>Privacy</li>
                    <li className='py-2 h-8 text'>Termination</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer