import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { db, signupUser} from '../Bdd/firebase.config'
import { useNavigate } from "react-router-dom";
import { auth } from './../Bdd/firebase.config';


export default function SignUp() {

  
  const navigate = useNavigate()
  const [registerData , setRegisterData] = useState({
    email :'',
    nom: '',
    prenom: '',
    adresse: '',
    age:'',
    password:'',
    password2:'',

  });
  
  const formSubmit = async () => {
    const {nom,prenom, email, password, age} = registerData
    try {
          const result = await createUserWithEmailAndPassword(auth,email,password); 
          console.log(result.user.uid)

          await setDoc(doc(db, 'AsmaUsers', result.user.uid), {
              uid          :result.user.uid,
              nom,
              prenom,
              email,
              age,
              password,
          })   
          navigate('/Done')             
    } catch (error) {
       console.log(error)
      return
    }

   
  };
  
  return (
    
    
    <div style={{height:"100vh", alignItems:'center', display:'flex', flexDirection:'column'}} >
      <button onClick={()=> {navigate('/')}}> Back home</button>
      
        <h1 >Sign Up</h1> 
         
        <input placeholder='email'         value={registerData.email}      onChange={(e)=>{ setRegisterData({...registerData , email:e.target.value})}}/>
        <input placeholder='nom'           value={registerData.nom}        onChange={(e)=>{ setRegisterData({...registerData , nom:e.target.value})}} />
        <input placeholder='prenom'        value={registerData.prenom}     onChange={(e)=>{ setRegisterData({...registerData , prenom:e.target.value})}} />
        <input placeholder='adresse'       value={registerData.adresse}    onChange={(e)=>{ setRegisterData({...registerData , adresse:e.target.value})}} />
        <input placeholder='age'           value={registerData.age}        onChange={(e)=>{ setRegisterData({...registerData , age:e.target.value})}} />
        <input placeholder='mot de passe'  value={registerData.password}   onChange={(e)=>{ setRegisterData({...registerData , password:e.target.value})}} />
        <input placeholder='Confirmation'  value={registerData.password2}  onChange={(e)=>{ setRegisterData({...registerData , password2:e.target.value})}} />
        <br></br>
        
        <button onClick={formSubmit} >SignUp</button>
      </div>
    
  )
}
