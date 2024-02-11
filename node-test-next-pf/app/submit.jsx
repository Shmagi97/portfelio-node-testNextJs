'use client'

import { useState } from "react";

const Submit = () => {

    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const clickSubmit = async (event) => {
        event.preventDefault();
      
        const response = await fetch(" http://localhost:4000/register ", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({ username, email, password })
          });

         if (response.ok) {
             console.log('sucess');
          } else {
            console.log('eroor');
          }
      };
    

  
    return <>
       
       <h1>Register</h1>
    <form action="/register" method="post">
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" onChange={(e)=> setUsername(e.target.value)} required/>
   
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" onChange={(e)=> setEmail(e.target.value)} required/>
   
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" onChange={(e)=> setPassword(e.target.value)}  required/>
     
      <button type="submit" onClick={clickSubmit}>Register</button>
    </form>
    
    </>
  };

  export default Submit

  