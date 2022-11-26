import { signInWithEmailAndPassword } from 'firebase/auth'
import React, {useState} from 'react'
import { auth } from './../Bdd/firebase.config';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate()
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')

  const [loginData, setLoginData] = useState({
    email : '',
    password : ''
  })



  const loginUser = async () => {
    try {
      const {email, password} = loginData
      await signInWithEmailAndPassword(auth, email, password)

      navigate('/Done')

    } catch (err) {
      if (err.code === 'auth/user-not-found'){
        setErrorEmail("Email introuvable")
       }
       

       if (err.code === 'auth/wrong-password'){
        setErrorPassword("Mot de passe incorrect")
       }
    }
  }

  return (
    <div style={{display:'flex', flexDirection:'column',height:"100vh", width:'100%', alignItems:'center'}} >
      <button onClick={()=> {navigate('/')}}> Back home</button>

     <h1>Login</h1> 

      <input placeholder='email' value={loginData.email} onChange={(e)=>{ setLoginData({...loginData , email:e.target.value})}}/>
      <p style={{color:'red'}}>{errorEmail}</p>

      <input placeholder='password' value={loginData.password} onChange={(e)=>{ setLoginData({...loginData , password:e.target.value})}} />
      <p style={{color:'red'}}>{errorPassword}</p>
      
      <button onClick={loginUser}> Connexion</button>
    </div>
  )
}