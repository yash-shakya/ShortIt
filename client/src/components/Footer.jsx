import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='flex justify-between items-center px-5 text-lg h-32 bg-gray-600 text-gray-50 border-t border-b border-zinc-400'>
        <div className='font-bold'>
            Created by: Yash Shakya
        </div>
        <div className='flex gap-5 items-center'>
            Follow me on: 
                <Link to="https://github.com/yash-shakya">
                    <div className='flex gap-2 items-center'>
                        <img className='size-7' src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png" alt="github" /> Github
                    </div>
                </Link>
                <Link to="https://www.linkedin.com/in/yash-shakya-1b52332b8/">
                    <div className='flex gap-2 items-center'>
                        <img className='size-7' src="https://cdn-icons-png.flaticon.com/128/145/145807.png" alt="LinkedIn" /> LinkedIn
                    </div>
                </Link>
                <Link to="https://www.instagram.com/suspici.yash">
                    <div className='flex gap-2 items-center'>
                        <img className='size-7' src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="Instagram" /> Instagram
                    </div>
                </Link>
        </div>
    </div>
  )
}

export default Footer
