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
    const handleSubmit = (e) => {
      
    }
    const classes  = Styles()
    return(
        <div className = 'login-form' id = 'login-form'>
                    <h1  >LOGIN</h1>
                    <FormControl variant="outlined" className={classes.textField}>
                        <InputLabel htmlFor="component-outlined" className={classes.inputLabel} >Email address</InputLabel>
                        <OutlinedInput id="component-outlined" value={email} className={classes.inputField} onChange={(e) => setEmail(e.target.value)} label="Name" aria-describedby="component-error-text"/>
                        <FormHelperText id="component-error-text">Error</FormHelperText>
                    </FormControl>
                    <FormControl variant="outlined" className={classes.textField} >
                        <InputLabel htmlFor="component-outlined-password">Password</InputLabel>
                        <OutlinedInput id="component-outlined-password" value={password}   className={classes.inputField} onChange={(e) => setPassword(e.target.value)} label="Name" aria-describedby="component-error-text"/>
                        <FormHelperText id="component-error-text">Error</FormHelperText>
                    </FormControl>
                    <Button className = {classes.btn} size ='large' onClick = { () =>handleSubmit()}>LOG IN</Button>
                    <p className = 'login-form__help-text_underlined'>Forgot your password?</p>
                    <p className = 'login-form__help-text'>Don’t have an account yet? <span>Register</span></p>
        </div>
    )
}

export default LoginForm