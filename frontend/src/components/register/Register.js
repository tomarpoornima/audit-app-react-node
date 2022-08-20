import React, {useState} from "react";   //usestate  used to manage state in react
import "./register.css";
import axios from "axios";
import { useNavigate  } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();

    const [ user, setUser ] = useState({   //it is user object which uses usestate to create it
        name: "",
        email: "",
        password: "",
        reEnterPassword: "" 
    })

    const handleChange =  e => { //event 
        const {name, value} = e.target
        // console.log(name, value)
        setUser({          //it is used to set the values in user object
            ...user,   // this is spread operator, it keep all other values as it is in user object
            [name]: value   // it will place the value whatever we type in input tag, eg. typing in email input tag so will keep in the email varible
        })  
    }

    const register = () => {
        const {name, email, password, reEnterPassword} = user
        if(name && email && password && (password===reEnterPassword)){
                //alert("Posted")
                axios.post("http://localhost:9002/register", user)
                .then(res => {
                    alert(res.data.message)
                    navigate("/login")
                })
        }else{
            alert("Invalid input")
        }       
    }
    return (
        <div className="register">
            {console.log("User", user)}
            <h1>Register</h1>
            <input type="text"     name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input> 
            {/* //onChange function reflect the change in user input value */}
            <input type="text"     name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword  } placeholder="Re-enter Password" onChange={handleChange}></input>
            <div className="button" onClick={register}>Register</div>
            <div>or</div>
            <div className="button" onClick={() => navigate("/login")}>Login</div>
        </div>
    )
}

export default Register;