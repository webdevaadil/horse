import { useState,useEffect } from "react"
import { Link,useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
// import "./Signup.css"
import axios from "axios"
import { clearErrors, register } from "../../actions/userAction"
import image1 from "../../Images/Rectangle1.jpg"
import { Metadata } from "../layout/Metadata"
import { Loader } from "../layout/Loader"
import { Success } from "../layout/Success"
import {useAlert, userAlert} from "react-alert"



export const Signup = ()=>{

const navigate = useNavigate()
const alert = useAlert()

    const {error,loading,isAuthenticated} = useSelector((state)=>state.user)
    
    const dispatch =  useDispatch()
    const [data,setData] = useState({
        username:"",
        email:"",
        password:"",
        dob: ``,
        gender:"",

    })

    const handleChange = (event)=>{

setData({...data,[event.target.name]:event.target.value})
console.log(data)


    }

const handleSubmit = async(e)=>{
e.preventDefault()
dispatch(register(data))
  
}

useEffect(()=>{

if(error){
    alert.error(error)
    dispatch(clearErrors())
}


if(isAuthenticated){
    alert.success("Signup Successfull")
    navigate("/")
}
},[navigate,isAuthenticated,loading,error])
  return(
      <>
{loading&&<Loader/>}
      <Metadata title = "Signup"/>
    <div className="login_container">
        <div className="login_form_container">
            <div className="left">
 <img src={image1} alt="" />
            </div>

            <div className="login_right">
                <form onSubmit={handleSubmit} action="" className="form_container">
                        <h1>Hello!</h1>
                        <div className="input_label">
                        <label htmlFor="name">Name</label>

                        <input 
                        onChange={handleChange}
                        type = "text"
                        placeholder = "Name"
                        name = "username"
                        required
                        value = {data.username}
                        className = "login_input"
                        />
                        </div>
                        <div className="input_label">
                        <label htmlFor="email">Email</label>

                        <input 
                        onChange={handleChange}
                        type = "email"
                        placeholder = "Email"
                        name = "email"
                        required
                        value = {data.email}
                        className = "login_input"
                        />

                        </div>

                        <div className="input_label">
                            <label htmlFor="password">Password</label>

                        <input 
                        onChange={handleChange}
                        type = "password"
                        placeholder = "Password"
                        name = "password"
                        required
                        value = {data.password}
                        className = "login_input"
                        />
                        </div>
                        <div className="btn-flex">
<div className="input_label">
<label htmlFor="date">Date of Birth</label>
                    <input onChange={handleChange} type="date" name="dob" placeholder="dob" required  value={data.dob} className = " greytxt" />
</div>
 
                           <select style={{ border:"2px solid rgba(128, 128, 128, 0.356)"  }} className="greytxt" placeholder="Gender" onChange = {handleChange } name="gender" id="">
                           <option value = "Male" >Male</option>
                           <option value = "Female" >Female</option>
                           </select>
                        </div>


              <button type = "submit" className="login_btn green">Signup</button>
              
                </form>
            </div>
        </div>
    </div>
    </>
    )
}

