import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
const Users = () => {
     const navigate=useNavigate();
      
       const [Data,setData]=useState({})

     useEffect(()=>{
        try {
                
           const excess= localStorage.getItem("user");
            if(!excess) 
            {
                toast.error("acess token Failed")
                navigate('/');
            }

            const userData = JSON.parse(excess);
             const token=userData.token;
             const id=userData.id;

             try {
                
                fetch(`https://dummyjson.com/users/${id}`, {
                   method: 'GET',
                   headers: {
                     'Authorization': `Bearer ${token}`, 
                   }, 
                 })
                 .then(res => res.json())
                 .then((res)=>{
                    setData(res);
                    
                 });
                
             } catch (error) {
                toast.error("Invalid Token");
                
             }   



        } catch (error) {
            console.log("Invalid User");
        }
     },[])

    
    function handlelogout()
    {
        localStorage.removeItem("user");
       navigate('/');
    }

  return (
    
        <div className='userContainer'>
             <Toaster position="top-center" reverseOrder={false} />
            <h2>Profile</h2>
             <div className='profile'>
                <div className='sidebar'>
                    <div>
                        <div className='image'> <img src={Data.image} alt='wrong' /></div>
                        <p>Hello, <span>{Data.username}</span></p>
                    </div>
                        <button onClick={handlelogout}>Logout</button>
                    


                </div>
                <div className='details'>
                    <label>Full name: <span>{Data.firstName+" "+Data.maidenName+" "+Data.lastName}</span></label>
                    <label>Email: <span>{Data.email}</span></label>
                    <label>Gender: <span>{Data.gender}</span></label>
                    <label>Mobile No: <span>{Data.phone}</span></label>
                    <label>D.O.B : <span>{Data.birthDate}</span></label>
                    <label>Blood Group : <span>{Data.bloodGroup}</span></label>
                </div>
             </div>
        </div>
    
  )
}

export default Users