import React from 'react'
import emoji6 from '../image/emoji6.png'
import emoji5 from '../image/emoji5.png'
import { Box } from '@mui/material'

const Reward = () => {
  return (
    <div>
      <h1>Prizes and <span style={{color:'rgb(180,58,178)'}}>Rewards</span></h1>
      <p>Highlight of the prizes or rewards for winners and for participants.</p>

      <div className='trophy-cabinet' display='flex' flexDirection='row' alignItems='center' justifyContent='space-evenly' flexWrap='wrap'>
        <img src={emoji6} alt=""/>
        <Box display='flex' flexDirection='row' alignItems='center' justifyContent='space-evenly' flexWrap='wrap' sx={{width:'90vw'}}>
            <img style={{width:'90wv'}} src={emoji5} alt=''/>
            
        </Box>
      </div>
    </div>
  )
}

export default Reward
