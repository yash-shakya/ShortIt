import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

function NavBar() {

  const [user, setUser] = useState(null);

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
    if (token) {
      axios.get("https://shortit-2eym.onrender.com/getUser", { headers: { "token": token } })
        .then((res) => setUser(res.data))
    }
  }, [user]);

  const logout = () => {
    document.cookie = `token=; path=/;`;
    window.location.href = "/"
  }

  return (
    <div className='relative flex items-center justify-between px-5 text-2xl h-20 bg-gray-600 text-gray-50 border-t border-b border-zinc-400 '>
      <h1 className='font-bold hoverp'><b><i><Link to="/">Shortify</Link></i></b></h1>
      {!user ? (
        <h1 className='ml-12 text-base'>Login to see your created URLs</h1>
      ):(
        <h1 className='ml-12'>Welcome {user.name}</h1>
      )}
      <div className='flex gap-5'>
        {!user ? (
          <>
            <button className=' px-5 py-3 rounded-lg'><Link to="/login">Login</Link></button>
            <button><Link to="signup">Signup</Link></button>
          </>
        ) : (
          <>
            <button><Link to="/myUrls">My URLs</Link></button>
            <button onClick={logout}>Logout</button>
          </>
        )
        }

      </div>
    </div>
  )
}

export default NavBar