import { Box } from '@mui/material'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import React, { useState } from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from './firebase-config'
const Signup = () => {

    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [Date, setDate] = useState('')
    const [Password, setPassword] = useState('')
    const [Email, setEmail] = useState('')
    const [ConfirmPassword, setConfirmPassword] = useState('')

    

    const register = async() => {
    
      try{
        const user = await  createUserWithEmailAndPassword(
            Email,
            ConfirmPassword

        )
         console.log(user)
      } catch (error){
        console.log(error.message);
      }

      console.log('hello')
    }

    const Login = async() => {
    }

    const LogOut = async() => {

    }

    

  return (
    <Box sx={{
        width:{sx:'70%', md:'50vw'},
        textAlign:'center',
        height:'60vh',
        padding:'80px 30px',
        margin:' 20px auto',
        background: 'rgb(180,58,178)'
        
    }}>

      <TextField
            sx={{
                marginBottom:"30px",
                width:'100%',
                backgroundColor: 'white'
            }}
            variant='filled'
            size="small"
            value={Email}
            onChange={(event) => {setEmail(event.target.value)}}
            type='email'
            label="Email"
            />

        
     

      
      <TextField
            sx={{
                marginBottom:"30px",
                width:'100%',
                backgroundColor: 'white'
            }}
            variant='filled'
            size="small"
            value={ConfirmPassword}
            onChange={(event) => {setConfirmPassword(event.target.value)}}
            type='Password'
            label="Confirm Password"
            />

            <Button sx={{
                padding:"10px 80px"
            }}
              label='Submit'
              variant='contained'
              color='error'
              onClick={register}
              >SUbmit</Button>


      
    </Box>

  )
}

export default Signup

// git pull --rebase origin branchname
// git push origin branchname
