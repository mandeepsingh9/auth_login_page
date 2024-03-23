import React, { useRef } from 'react'

import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Login = () => {

     let username=useRef();
     let password=useRef();
     const navigate=useNavigate();
 async function handleForm(e)
  {
       e.preventDefault();
       let User=username.current.value;
       let pass=password.current.value;
       
        if(!User)
         {
            toast.error("username is required")
            return;
         }
         if(!pass)
         {
            toast.error("password is required")
            return;
         }

       try {
        
        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: User,
                password: pass,
            })
        });
    
        if (!response.ok) {
            toast.error("Invalid User")
            //throw new Error('Failed to authenticate');
            return;
        }
    
        const data = await response.json();
        toast.success('Successfully ')
        localStorage.setItem("user", JSON.stringify({ id: data.id, token: data.token }));
  navigate('/user');
        
    } catch (error) {
        toast.error("someThing Went Wrong")
        console.error("Something went wrong", error);
    }
    

  }

  return (
    <div className='formm' onSubmit={handleForm}>
        <Toaster position="top-center" reverseOrder={false} />
        <h2>Login</h2>
        <form className='formchild'>
            <div>
               <label>UserName</label>
               <input type='text' ref={username}/>
            </div>
            <div>
               <label>Password</label>
               <input type='text' ref={password} />
            </div>
            <button>Login</button>
        </form>

    </div>
  )
}

export default Login