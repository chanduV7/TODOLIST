import { useEffect, useRef, useState } from "react";
import '../styles/signUpPage.scss';
import { useNavigate } from "react-router-dom";
export default function LoginPage(){
    const refForm = useRef(null);
    const navigate = useNavigate();  
    const token = localStorage.getItem("token");
    const baseUrl = "https://students.codex.today/";
    
    const login = async(e) => {
       try {
        e.preventDefault()
        const formData = {
            emailAddress : refForm.current.email.value,
            password : refForm.current.password.value
         }
        const res = await fetch(`${baseUrl}users/login`,
        {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(formData)
        }
        ) 
        const resout = await res.json();
        console.log(resout);
        const keys = Object.keys(resout)
        keys.forEach((e) => localStorage.setItem(e,resout[e]))
        
        if(resout.userId === localStorage.getItem("userId")){
            navigate("/home");
            // alert("token")
        }
       } catch (error) {
        console.log(error)
       }
    }
   function navigatetoSignup(){
    navigate("/")
   }
  
    return(
        <div className="signUpPage">
            <div className="header1">
                <img className="logo" src="https://to-do-cdn.microsoft.com/static-assets/c87265a87f887380a04cf21925a56539b29364b51ae53e089c3ee2b2180148c6/icons/logo.png"/>
                <h1>Todolist</h1>
            </div>
            <div className="inside">
                <div className="center">
                 <form ref={refForm} className="formPart">
                    <h1>Login</h1>
                     <input type="text" placeholder="Email address" name="email"/>
                     <input  type="password" placeholder="Password" name="password"/>
                     <button type="submit" onClick={login}>Login</button> 
                     <span  className="btn" onClick={() => navigatetoSignup()}>Didn't Signup? Click Me</span>
                 </form>
                </div>
            </div>
        </div>
    )
}