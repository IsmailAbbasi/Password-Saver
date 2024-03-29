
import React, {useState} from "react";
import {createUserWithEmailAndPassword} from "firebase/auth"
import {auth} from "../firebase"
import { useNavigate } from "react-router-dom";


const Register = () => {
    const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
//   const [masterPassword, setMasterPassword] = useState("");
const register = (e) => {
    e.preventDefault();
    
    createUserWithEmailAndPassword(auth,email ,password)
    .then((userCredential) => {
        
        console.log(userCredential)
        console.log("navigating.....")
        navigate("/Home");
    })
    .catch((error) => {
        console.log(error)
    })

}
  return (
    <div className="formContainer">
      <div className="formWrapper">
       
        <span className="logo">Lock Box </span>
        <span className="title">Register</span>
        <form onSubmit={register}>
        
          <input required name="email" type="email" placeholder="email" onChange={(e)=> setEmail(e.target.value)}  />
          <input required name="password" type="password" placeholder="password" onChange={(e)=> setPassword(e.target.value)}  />
          {/* <input required name="Master-password" type="Master-password" placeholder="Master-password" onChange={(e)=> setPassword(e.target.value)}/> */}
          <label htmlFor="file">
            
          </label>
          
          <button type="submit">Sign up</button>
          
        </form>
        <p>
          You do have an account? Login
        </p>
      </div>
    </div>
  );
};

export default Register;