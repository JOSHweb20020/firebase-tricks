import { Button } from '@mui/base'
import React, { useState } from 'react'



const Dropdown = () => {
  const [text, setText] = useState("none")
  const [text2, setText2] = useState("none")
  const [text3, setText3] = useState("none")
   
   function clicked(){
    setText('block')
    
   }

   function clicked2(){
    setText2('block') 
    
   }
    function clicked3(){
        setText3('block') 
    }

   function DoubleClicked(){
    setText('none')  
   }
   
 
  return (
    <div>
      <div sx={{
        textAlign:'left',
        width:'60%',
        margin:' 0 auto'
      }}>
        <h3 style={{borderBottom:'2px solid rgb(180,58,178)'}} >Can i work on a project i started before the hackathon?  <Button onClick={() => clicked()} onDoubleClick={() => DoubleClicked()} variant='contained'>-</Button></h3> 
        <span style={{display:text}}>
            Yes, but on a condition , the project most be inline with the hackathons
            requirement.
            and an article prior to application with the link to the project must be sent to our admins with crosscheck and confirmtion to continue
        </span>
      </div>

      <div sx={{
        textAlign:'left',
        width:'60%',
        margin:' 0 auto'
      }}>
        <h3 style={{borderBottom:'2px solid rgb(180,58,178)'}}>What happens after the hackathon ends  <Button onClick={() => clicked()} onDoubleClick={() => DoubleClicked()} variant='contained'>-</Button></h3> 
        <span style={{display:text}}>
            Yes, but on a condition , the project most be inline with the hackathons
            requirement.
            and an article prior to application with the link to the project must be sent to our admins with crosscheck and confirmtion to continue
        </span>
      </div>

      <div sx={{
        textAlign:'left',
        width:'60%',
        margin:' 0 auto'
      }}>
        <h3 style={{borderBottom:'2px solid rgb(180,58,178)'}} >Can i work on a project i started before the hackathon?  <Button onClick={() => clicked()} onDoubleClick={() => DoubleClicked()} variant='contained'>-</Button></h3> 
        <span style={{display:text}}>
            Yes, but on a condition , the project most be inline with the hackathons
            requirement.
            and an article prior to application with the link to the project must be sent to our admins with crosscheck and confirmtion to continue
        </span>
      </div>
    </div>
  )
}

export default Dropdown
