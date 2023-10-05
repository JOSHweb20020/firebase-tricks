
import { Box } from '@mui/material'
import React from 'react'
import '../App.css'


const Timeline = () => {
  return (
    <div style={{border:'1px solid white', textAlign:"center"}}>
      <h2>Timeline</h2>
      <p>Here is the breakdown of the time we anticipate using for the upcoming event</p>

      <Box sx={{ width:'80%', margin: ' 0 auto'} } display='flex' flexWrap='wrap' justifyContent="space-evenly" alignItems="start">

        <div className='left'>
            <Box>
                <h2 style={{color:'rgb(180,58,178)'}}>Hackathon Announcement</h2>
                <p>The getlinked tech hackathon 1.0 is formally announced to the general public
                    and teams begin to get ready to register
                </p>
            </Box>
            <h2 style={{color:'rgb(180,58,178)'}}>November 18, 2023</h2>
            <Box>
                <h2 style={{color:'rgb(180,58,178)'}}>Teams Registration ends</h2>
                <p>Intrested Paripants are no longer Allowed to register</p>

            </Box>
            <h2 style={{color:'rgb(180,58,178)'}}>November 18, 2023</h2>
            <Box>
                <h2>Getlinked Hackathon 1.0<br/>Officially Begins</h2>
                <p>Accepted teams can now proceed to build teyre ground breaking skill driven solutions</p>
            </Box>
            <h2 style={{color:'rgb(180,58,178)'}}>November 18, 2023</h2>
        </div>

        <div className='in-between'>
            <p className='circle'>1</p>
            <p className='stroke'></p>
            <p className='circle'>2</p>
            <p className='stroke'></p>
            <p className='circle'>3</p>
            <p className='stroke'></p>
            <p className='circle'>4</p>
            <p className='stroke'></p>
        </div>
        <div className='right'>
            <h2 style={{color:'rgb(180,58,178)'}}>November 18, 2023</h2>
            <Box>
                <h2 style={{color:'rgb(180,58,178)'}}>Teams Registration begins</h2>
                <p>Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register</p>
            </Box>
            <h2 style={{color:'rgb(180,58,178)'}}>November 18, 2023</h2>
            <Box>
                <h2 style={{color:'rgb(180,58,178)'}}>Announcement of the accepted teams and ideas</h2>
                <p>All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formall</p>

            </Box>
            <h2 style={{color:'rgb(180,58,178)'}}>November 18,2023</h2>
            <Box>
                <h2 style={{color:'rgb(180,58,178)'}}>Demo Day</h2>
                <p>Teams get the oppurtunity to pitch their projects to judges. The winner of the hackathon will also be annonced on the this day</p>
            </Box>
        </div>
      </Box>
    </div>
  )
}

export default Timeline
