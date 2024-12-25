import axios from 'axios'
import React, { useState } from 'react'


function Login() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const login = ()=>{
        axios.post(`/api/user/login`,{email:email,password:password})
        .then((res)=>{
            if(res.data.status=="success"){
                document.cookie=`token=${res.data.token}; path=/;`;
                alert(res.data.message);
                window.location.href="/";
            }
            else{
                alert(res.data.message);
            }
        })
    }

    return (
        <div className='w-auto height text-center  bg-gray-900 flex justify-center items-center'>
            <form onSubmit={(e)=>e.preventDefault()} className='flex flex-col gap-5 w-fit'>
                <h1 className='text-3xl text-white'>Login to Short It</h1>
                <input 
                    type="email"
                    className='border-2 w-64 rounded h-12 pl-2'
                    placeholder='Email'
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    className='border-2 w-64 rounded h-12 pl-2'
                    placeholder='Password'
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <button type='submit' className='bg-blue-500 rounded h-12 text-gray-50' onClick={login}>Login</button>
            </form>
        </div>
    )
}

export default Login