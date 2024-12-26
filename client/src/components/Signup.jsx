import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const signup = async () => {
        try {
            const signupRes = axios.post("https://shortify-server-yash.vercel.app/user/signup", { name: name, email: email, password: password })

            if ((await signupRes).data.status == "success") {
                alert("signup success");

                const loginRes = axios.post("https://shortify-server-yash.vercel.app/user/login", { email: email, password: password })
                if ((await loginRes).data.status == "success") {
                    document.cookie = `token=${(await loginRes).data.token}; path=/;`;
                    window.location.href = "/"
                }
            }
            else {
                alert(res.data.message);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
        }
    }

    return (
        <div className='w-auto height text-center  bg-gray-900 flex justify-center items-center'>
            <form onSubmit={(e) => e.preventDefault()} className='flex flex-col gap-5 w-fit'>
                <h1 className='text-3xl text-white'>Signup to Short It</h1>
                <input
                    type="text"
                    className='border-2 w-64 rounded h-12 pl-2'
                    placeholder='Name'
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    className='border-2 w-64 rounded h-12 pl-2'
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    className='border-2 w-64 rounded h-12 pl-2'
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit' className='bg-blue-500 rounded h-12 text-gray-50' onClick={signup}>Signup</button>
            </form>
        </div>
    )
}

export default Signup