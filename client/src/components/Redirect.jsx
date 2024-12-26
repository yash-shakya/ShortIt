import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'

function Redirect() {
    const param=useParams();
    const [message,setMessage] = useState("Redirecting...")

    useEffect(()=>{
        console.log(param.id)
        axios.get(`https://shortify-server-yash.vercel.app/${param.id}`)
        .then((res)=>{
            if(res.data.status=="success"){
                window.location.href=res.data.url
            }
            else{
                setMessage(res.data.message)
            }
        })
    },[param])

    return (
        <div className='w-auto height bg-gray-900 flex justify-center items-center'>
            <h1 className='text-white text-4xl'>{message}</h1>
        </div>
    )
}

export default Redirect