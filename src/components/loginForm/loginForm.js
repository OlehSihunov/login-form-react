import React, { useState } from 'react'
import {Button} from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import './loginForm.css'
import Styles from '../stylesMUI/stylesMUI';

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError,setEmailError] = useState(false)
    const [passwordError,setPasswordError] = useState(false)

    const handleSubmit = (e) => {
      !email?setEmailError(true):setEmailError(false)
      !password?setPasswordError(true) : setPasswordError(false)
      if(email !== ''&&password !== ''){
        console.log(!email)
        console.log(!password)
        alert(`Email: ${email}\nPassword: ${password}`)
      }
    }

    const handleField =(e,type) => {
        if(type === 'email'){
            setEmail(e.target.value)
            !e.target.value?setEmailError(true):setEmailError(false)
        }
        if(type ==='password'){
            setPassword(e.target.value)
            !e.target.value?setPasswordError(true):setPasswordError(false)
        }
    }
   
    const classes  = Styles()
    return(
        <div className = 'login-form' id = 'login-form'>
                    <h1  >LOGIN</h1>
                    <FormControl variant="outlined"
                     className={classes.textField}
                     error ={emailError}>
                        <InputLabel htmlFor="component-outlined" className={classes.inputLabel} >Email address</InputLabel>
                        <OutlinedInput id="component-outlined"
                        value={email} 
                        className={classes.inputField} 
                        onChange={(e) => handleField(e,'email')} 
                        label="Name" 
                        aria-describedby="component-error-email-text"/>
                        <FormHelperText id="component-error-email-text">{passwordError?'Email Required':`\ `}</FormHelperText>
                    </FormControl>
                    <FormControl variant="outlined"
                    className={classes.textField}
                    error ={passwordError} >
                        <InputLabel htmlFor="component-outlined-password">Password</InputLabel>
                        <OutlinedInput id="component-outlined-password" 
                        value={password}   
                        className={classes.inputField} 
                        onChange={(e) => handleField(e,'password')} 
                        label="Name" 
                        aria-describedby="component-error-password-text"/>
                        <FormHelperText id="component-error-password-text">{passwordError?'Password Required':`\ `}</FormHelperText>
                    </FormControl>
                    <Button className = {passwordError||emailError?classes.btnDis:classes.btn} size ='large' onClick = { () =>handleSubmit()}>LOG IN</Button>
                    <p className = 'login-form__help-text_underlined'>Forgot your password?</p>
                    <p className = 'login-form__help-text'>Don’t have an account yet? <span>Register</span></p>
        </div>
    )
}

export default LoginForm