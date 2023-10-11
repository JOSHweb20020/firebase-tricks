import React from 'react';
import AppBar from '@mui/material/AppBar'
import {  IconButton, Stack, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import '../App.css'
import Top from './Top';
import Sidebar from './Sidebar';
const Main = () => {
  return (
    <Stack sx={{
      width:{sx:'70%'},
      background: 'black',
      height:'100%'
      
    }}>
      <AppBar 
       position=" static"
       color="secondary"
       sx={{padding:'10px 20px'}}
       >
       

        <Toolbar  display='flex'
        flexDirection='row'
        justifyContent='space-between'>
        <div><a href='home'>Get<span style={{color:'red'}}>Linked</span></a></div>
          <IconButton 
            size ='large'
            color='inherit'
            aria-label='open drawer'>
              <MenuIcon onClick={() => {}}/>
            </IconButton>
        </Toolbar>
      </AppBar>
      {/* <Sidebar/> */}
      <Top/>
    </Stack>
  )
}

export default Main
