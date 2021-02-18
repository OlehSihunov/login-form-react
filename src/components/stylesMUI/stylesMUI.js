import React from 'react'
import {createMuiTheme,makeStyles} from '@material-ui/core'

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

const Styles = () => {
    const useStyles = makeStyles(theme => ({
        btn:{
            marginTop: '80px',
            width: '220px',
            height: '48px',
            background: 'linear-gradient(90deg, #FF9146 0%, #FF351B 100%)',
            borderRadius: '5px',
            color: 'white',
            fontSize:'19px',
            fontWeight:'500',
            textTransofrm: 'Uppercase',
            [theme.breakpoints.down('xs')]: {
                marginTop: '60px',
                width: '165px',
                height: '40px'
              }
        },
        btnDis:{
                marginTop: '80px',
                width: '220px',
                height: '48px',
                background: '#B2B7BB',
                borderRadius: '5px',
                color: 'white',
                fontSize:'19px',
                fontWeight:'500',
                textTransofrm: 'Uppercase',
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
    return useStyles()
  }
export default Styles