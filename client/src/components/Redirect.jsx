import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams} from 'react-router-dom'

function Redirect() {
    const param=useParams();

    useEffect(()=>{
        console.log(param.id)
        axios.get(`http://localhost:4000/${param.id}`)
        .then((res)=>window.location.href=res.data.url)
    },[param])

    return (
        <div className='w-auto height bg-gray-900 flex justify-center items-center'>
            <h1 className='text-white text-4xl'>Redirecting...</h1>
        </div>
    )
}

export default Redirect