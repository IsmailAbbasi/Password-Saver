import React, {useState} from "react";
import {signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../firebase"

const Login = () => {
      const [email,setEmail] = useState("");
      const [password,setPassword] = useState("");
    //   const [masterPassword, setMasterPassword] = useState("");
    const login = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth,email ,password)
            // ,masterPassword
            
        .then((userCredential) => {
    
        console.log(userCredential)
        })
        .catch((error) => {
            console.log(error)
        })
    }
  return (
    <div className="formContainer">
      <div className="formWrapper">
       
        <span className="logo">Lock Box</span>
        <span className="title">Login</span>
        <form onSubmit={login}>
        <input required name="email" type="email" placeholder="email" onChange={(e)=> setEmail(e.target.value)}  />
          <input required name="password" type="password" placeholder="password" onChange={(e)=> setPassword(e.target.value)}  />
          {/* <input required name="Master-password" type="Master-password" placeholder="Master-password" onChange={(e)=> setPassword(e.target.value)}/> */}
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
          
          </label>
          <button type="submit">Login</button>
          
        </form>
        <p>
          You don't have an account? Register
        </p>
      </div>
    </div>
  );
};

export default Login;