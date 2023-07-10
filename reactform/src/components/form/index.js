import './index.css'
import {useState} from 'react'

const loginImage = "https://res.cloudinary.com/dmmgoh7jg/image/upload/v1688973697/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector-r_gvcqau.png"

const Form = () =>{
 const [email,setEmail] = useState('')
 const [password,setPassword] = useState('')
 const [emailErr,setEmailErr] = useState('')
 const [passErr,setPassErr] = useState('')
 const [errText,setErrText] = useState('')

 const onChangeEmail = (event) =>{
    setEmail(event.target.value)
 }

 const onChangePassword =(event)=>{
    setPassword(event.target.value)  
 }

 const onSubmitForm = (event)=>{
    event.preventDefault()
    if (email===""&&password===""){
        setErrText('*Enter Email and Password')
    }
    else if(email===""){
        setErrText('*Enter Email')
    }
    else if(password===""){
        setErrText('*Enter Password')
    }
    else{
        setErrText('')
        
    }
 }

 const onBlurEmail = (event) =>{
    if (email===""){
        setEmailErr('*Required')
    }else{
        setEmailErr("")
    }
 }

 const onBlurPassword = (event) =>{
    if (password===""){
        setPassErr('*Required')
    }else{
        setPassErr("")
    }
 }
    return(
        <div className="main-container">
            <div className="container">
                <form className="form-container" onSubmit={onSubmitForm}>
                    <h1 className="heading">Login</h1>
                    <label htmlFor="email" className="label">Email Address</label>
                    <input type="text" value={email} className="input" id="email" placeholder="you@@mobilefirstapplications.com" onChange={onChangeEmail} onBlur={onBlurEmail} />
                    <p className="error">{emailErr}</p>
                    <label htmlFor="password" className="label">Password</label>
                    <input type="password" value={password} className="input" id="password" placeholder="Enter Password" onChange={onChangePassword} onBlur={onBlurPassword} />
                    <p className="error">{passErr}</p>
                    <button type="submit" className="button">Login</button>
                    <p className="error">{errText}</p>
                </form>
                <img alt="login" src={loginImage} className="image" />
            </div>
        </div>
    )
}

export default Form