import React, { useState } from 'react'
import {Button,makeStyles,createMuiTheme} from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import './loginForm.css'
const theme = createMuiTheme({
    breakpoints: {
      values: {
        xs:375,
        sm: 768,
        md: 1024,
        lg: 1440,
      },
    },
  })

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        console.log(theme.breakpoints.down('xs'))
    }
    const useStyles = makeStyles((theme)=>({
        btn:{
            marginTop: '80px',
            width: '220px',
            height: '48px',
            background: 'linear-gradient(90deg, #FF9146 0%, #FF351B 100%)',
            borderRadius: '5px',
            color: 'white',
            fontSize:'19px',
            fontWeight:'500',
            [theme.breakpoints.down('xs')]: {
                marginTop: '60px',
                width: '165px',
                height: '40px'
              }
        },
        textField:{
           width:"260px",
           marginTop:'24px',
           
        },
        inputField:{
            [theme.breakpoints.down('xs')]: {
                height: '40px',
                borderRadius:'10px'
              }
        },
        inputLabel:{
            [theme.breakpoints.down('xs')]: {
                lineHeight: "10px"
              }
        }

    }))
    const classes = useStyles()
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