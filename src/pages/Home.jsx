import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const navigate = useNavigate()


  return (
    <div  style={{display:'flex', flexDirection:'column',height:"100vh", alignItems:'center'}} >
     <h1 > Welcome to the home page !</h1>  
     <h3>Choose an option</h3>

     <div style={{display:'flex', flexDirection:'row'}}>
        <button onClick={()=>{ navigate('/Signup')}}>
          Register
        </button>

        <button onClick={()=>{ navigate('/Login')}}>
          Login
        </button>
     </div>
    </div>
  )
}
