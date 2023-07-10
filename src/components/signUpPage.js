import { useRef } from "react";
import '../styles/signUpPage.scss';
import { useNavigate } from "react-router-dom";
export default function RegisterPage(){
    const refForm = useRef(null);
    const baseUrl = "https://students.codex.today/";
    const navigate = useNavigate();
    const register = async(e) => {
       try {
        e.preventDefault()
        const formData = {
            userName : refForm.current.username.value,
            emailAddress : refForm.current.email.value,
            mobileNumber : refForm.current.phone.value,
            password : refForm.current.password.value
         }
        const res = await fetch(`${baseUrl}users/register`,{
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(formData)
        }) 
        const resout = await res.json();
        console.log(resout);   
       } catch (error) {
        console.log(error)
       }
    }
    function navigatetoLogin(){
        navigate("/login")
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
                     <h1>SignUp</h1>
                     <input type="text" placeholder="Username" name="username"/>
                     <input type="text" placeholder="Email address" name="email"/>
                     <input  type="text" placeholder="Mobile number" name="phone"/>
                     <input  type="password" placeholder="Password" name="password"/>
                     <button type="submit" onClick={register}>Sign Up</button> 
                     <span className="btn" onClick={() => navigatetoLogin()}>Already Registered? Click Me</span>
                 </form>
                </div>
             
            </div>
        
        </div>
    )
}