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
            marginTop: '110px',
            width: '220px',
            height: '48px',
           
            borderRadius: '5px',
            color: 'white',
            fontSize:'19px',
            fontWeight:'500',
            textTransofrm: 'Uppercase',
            [theme.breakpoints.down('xs')]: {
                marginTop: '80px',
                width: '165px',
                height: '40px'
              }
        },
        btnAct:{
          background: 'linear-gradient(90deg, #FF9146 0%, #FF351B 100%)',
        },
        btnDis:{
                background: '#B2B7BB'
        },
        textField:{
           width:"260px"
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