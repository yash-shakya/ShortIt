import React, { useEffect, useState } from 'react'
import axios from 'axios'

function MyUrls() {
    const [urls, setUrls] = useState([]);
    const [message, setMessage] = useState("")

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

    useEffect(() => {
        const token = getCookie("token")
        axios.get("https://shortit-2eym.onrender.com/getUrls", { headers: { "token": token } })
            .then((res) => { 
                if(res.data.status=="success"){
                    console.log(res.data)
                    setUrls(res.data.data)
                }
                else{
                    setMessage(res.data.message)
                }
             })
    }, [])

    const copyUrl = (custom)=>{
        window.navigator.clipboard.writeText(`https://shortify-ashen.vercel.app/${custom}`)
        alert("URL Copied")
    }

    return (
        <div className='w-auto height  bg-gray-900 flex justify-center text-white' >
            <div>
                {urls.length==0 ? (
                    <h1>{message}</h1>
                ) : (
                    <table >
                        <thead>
                            <tr>
                                <th>Sr. No.</th>
                                <th>Complete Url</th>
                                <th>Short Url</th>
                                <th>Copy Button</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(urls).map((e, ind) =>
                                <tr key={ind}>
                                    <td className='w-4'>{ind + 1}</td>
                                    <td>{e.mainUrl}</td>
                                    <td>{`http://localhost:5173/${e.shorturl}`}</td>
                                    <td className='w-4 '><button onClick={()=>{copyUrl(e.shorturl)}} className='bg-blue-500 px-4 py-2 rounded-lg'>Copy</button></td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                )}
            </div>

        </div>
    )
}

export default MyUrls