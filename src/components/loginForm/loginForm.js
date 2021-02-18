import React, { useState } from 'react'
import {Button,makeStyles} from '@material-ui/core'
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import './loginForm.css'
import { pink } from '@material-ui/core/colors';
const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submit')
    }
    const useStyles = makeStyles({
        btn:{
            marginTop: '110px',
            width: '220px',
            background: 'linear-gradient(90deg, #FF9146 0%, #FF351B 100%)',
            borderRadius: '5px',
            color: 'white'
        },
        textField:{
            width:"50%",
            minWidth:"260px",
            marginTop:'24px',
        }
    })
    const classes = useStyles()
    return(
        <div className = 'login-form' id = 'login-form'>
                    <h1  >LOGIN</h1>
                    <FormControl variant="outlined" className={classes.textField}>
                        <InputLabel htmlFor="component-outlined">Email address</InputLabel>
                        <OutlinedInput id="component-outlined" value={email} onChange={(e) => setEmail(e.target.value)} label="Name" aria-describedby="component-error-text"/>
                        <FormHelperText id="component-error-text">Error</FormHelperText>
                    </FormControl>
                    <FormControl variant="outlined" className={classes.textField} >
                        <InputLabel htmlFor="component-outlined-password">Password</InputLabel>
                        <OutlinedInput id="component-outlined-password" value={password} onChange={(e) => setPassword(e.target.value)} label="Name" aria-describedby="component-error-text"/>
                        <FormHelperText id="component-error-text">Error</FormHelperText>
                    </FormControl>
                    <Button className = {classes.btn} size ='large'>LOG IN</Button>
                    <p className = 'login-form__help-text_underlined'>Forgot your password?</p>
                    <p className = 'login-form__help-text'>Don’t have an account yet? <span>Register</span></p>
        </div>
    )
}

export default LoginForm