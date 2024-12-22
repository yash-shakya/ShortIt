import React, { useState } from 'react'
import axios from 'axios'

function Home() {
    const [url,setUrl] = useState("")
    const [custom,setCustom] = useState("")
    const [message,setMessage] = useState("")
    const [showButton, setShowButton] = useState(false);
    const [short, setShort] = useState("")

    function getCookie(name) {
        const cookieString = document.cookie;
        const cookies = cookieString.split('; ');
      
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].split('=');
          if (cookie[0] === name) {
            return cookie[1];
          }
        }
        return null;
    }

    const generateShortUrl = ()=>{
        axios.post('http://localhost:4000/create',{mainUrl:url,shortUrl:custom},{
            headers:{
                "token":getCookie("token")
            }
        })
        .then((res)=>{
            if(res.data.status=="success"){
                setMessage(res.data.message);
                setShort(res.data.url) 
                setShowButton(true)
            }
            else{
                setMessage(res.data.message)
                setShowButton(false)
            }
        })
    }

    const copyUrl = ()=>{
        window.navigator.clipboard.writeText(`http://localhost:5173/${short}`)
        alert("URL Copied")
    }

  return (
    <div className='w-auto height text-center  bg-gray-900'>
        <h1 className='text-3xl text-white pt-9 font-bold'>URL Shortner and Custom URL Generator</h1>
        <form onSubmit={(e)=>e.preventDefault()} className='flex gap-4 justify-center items-center h-16 m-4'>
            <input 
                onChange={(e)=>setUrl(e.target.value)} 
                type="url" 
                className='border-2 w-72 rounded-lg h-12 pl-2' 
                placeholder='Enter URL' required
            />
            <input 
                onChange={(e)=>setCustom(e.target.value)} 
                type="text" 
                className='border-2 w-64 rounded-lg h-12 pl-2' 
                placeholder='Custom Keyword (Optional)'
            />
            <button type='submit' className='bg-blue-500 px-3 rounded-lg text-gray-50 h-12' onClick={generateShortUrl}>Generate Short URL</button>
        </form>
        {message && (
          <div>
            <label className="text-xl text-white">{message}</label>
            {showButton && (
              <button
                className="ml-4 bg-blue-500 px-3 rounded-lg text-gray-50 h-10"
                onClick={copyUrl}
              >
                Copy
              </button>
            )}
          </div>
        )}
    </div>
  )
}

export default Home