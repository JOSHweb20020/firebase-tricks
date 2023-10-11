import { Box, Button, Stack } from '@mui/material'
import React from 'react'
import oculus from '../image/oculus.png'
import Dropdown from './Dropdown'
import snip1 from '../image/snip1.png'
import emoji2 from '../image/emoji2.png'
import emoji3 from '../image/emoji3.png'
import emoji4 from '../image/emoji4.png'
import '../App.css'
import Timeline from './Timeline'
import Reward from './Reward'
const Top = () => {

    

  return (
    <Stack sx={{ textAlign:'center', color:'white', fontSize:'18px', width:'90%', margin:'auto'}}>
        <Box sx={{
            color:'white',
            textAlign:'right',
            marginRight:'40px'
        }}>
            <h2>Igniting a Revolution in <span style={{
                borderBottom:'4px solid red'
            }}>Hr innovation</span></h2>

        </Box>
        <Box
         sx={{
            color:'white',
           fontSize:"25px",
           
            
        }}>
            <div className='texts'>
             <h1 >getLinked Tech Hackathon 1.0</h1>
             <p>Participate in getlinked tech Hackathon 2023 and stand a chance to win a Big prize</p>
             <Button sx={{
                background:' linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)', color:'white', padding:'20px 35px' }} >Register</Button>
            </div>
            <img src={emoji2} alt=''/>
        </Box>
      

        <Box display='flex' flexDirection='row' flexWrap='wrap' >
              {/* <Images/> */}
            <img src={snip1} alt=""/>
            <Box className='texts' sx={{width:{md:'50%'} , margin:'0 auto'}}>
                <h2>Introduction to getlinked<br/><span style={{color:'purple'}}>techHAckaathon 1.0</span></h2>
                <p sx={{lineHeight:'20px'}}>our tech hackathon is a melting pit of visionaries, and its purpose is as clear as day, to shape the future.<br/>
                whether youre a coding genius, a design maerick , or a concept wizard, you'll have the chance to transform your ideas into reality.
                solving real-world problems, pushing the boundries of technology, and creating solutions that can change the world, that's what were all about!</p>
            </Box>
        </Box>
        {/* <images/> */}

      <Box display='flex' flexDirection='row' flexWrap='wrap'>
        
      <Box  sx={{width:{md:'50%'}}}>
            <h2>Rules and<br/> <span style={{color:'purple'}}>Guidelines</span></h2>
            <p>Our tech hackathon is a melting pot of visionaries , and its purpose is as clear as day to shape the future. whether you're coding
                genius a design maverick, or a concept wizard, you'll have the chance to transform your ideas into <br/> 
                reality.Solving real-world Problems,Pushing the  boundariesof technologyand creating solutioons that can
                change the world, thats what were all about!
            </p>
        </Box>
        <img src={emoji3} alt=''/>
      </Box>
        {/* <imag></imag> */}

        <Box display='flex' flexDirection='row' flexWrap='wrap'>
        <img src={emoji2} alt=''/>
        <Box sx={{width: {md:'40%'}}}>
            <h2>Judging criteria<br/><span style={{color:'purple'}}>Key attribute</span></h2>
            <p><span style={{color:"red"}}>Innovation and Creativity:</span>Evaluate the uniqueness and creativity of thesolution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.</p>
            <p><span style={{color:"red", fontWeight:"600"}}>Functionality:</span> Asses how well solution works.Does it perform its intended functoions effectively and without major issues  Judges would consider the completeness and robustness of the solution</p>
            <p><span style={{color:"red"}}>Innovation and Creativity:</span>Evaluate the uniqueness and creativity of thesolution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.</p>
            <p><span style={{color:"red", fontWeight:"600"}}>Functionality:</span> Asses how well solution works.Does it perform its intended functoions effectively and without major issues  Judges would consider the completeness and robustness of the solution</p>
            <Button style={{padding:'20px 60px', margin: '30px 0 '}} variant="contained">Read More</Button>
        </Box>
       
        </Box>
         
         {/* dropdown */}
         <h2>Frequently Ask <span style={{color:"red"}}>Question</span></h2>
       <Box display='flex' justifyContent='space-evenly' alignItems='center' flexDirection='row' flexWrap='wrap'>
       <Box sx={{width:{md:'40%'}, textAlign:'left'}}>
            
            <p>We got answers to the questions that you might want to ask about <span style={{fontWeight:"600"}}>getlinked Hackathon 1.0</span></p>
            <Box display='flex' flexDirection='row' justifyContent='flex-start'>
                {/* <img */}
                <Dropdown/>
            </Box>
        </Box>
        <img src={emoji4} alt=''/>
       </Box>
       <Timeline/>
       <Reward/>
       </Stack>
  )
}

export default Top
