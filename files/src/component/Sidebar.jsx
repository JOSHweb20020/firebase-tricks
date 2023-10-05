import React from 'react'

const Sidebar = () => {
  return (
    <div style={{
        background:'rgb(180,58,178)',
        height:'80vh',
        width:'200px',
        zIndex:"9999",
        position:'fixed',
        marginTop:'83px',
       
        padding:'10px',
        borderRight:'2px solid white'
    }}>
        <div style={{
            border:"2px solid white",
            lineHeight:'30px',
            padding:'10px',
            marginTop:'40px'
        }}><a href='/'>Timeline</a></div>
        <div style={{
            border:"2px solid white",
            lineHeight:'30px',
            padding:'10px',
            marginTop:'40px'
        }}><a href='/'>Reward</a></div>
       
       
       <div style={{
        border:"2px solid white",
        lineHeight:'30px',
        padding:'10px',
        marginTop:'40px'
       }}> <a href='/'>Questions</a></div>

     <div style={{
        border:"2px solid white",
        lineHeight:'30px',
        padding:'10px',
        marginTop:'40px'
       }}> <a href='/'>Contact-us</a></div>

     <div style={{
        border:"2px solid white",
        lineHeight:'30px',
        padding:'10px',
        marginTop:'40px'
       }}> <a href='/'>Hackathon steps</a></div>

      
    </div>
  )
}

export default Sidebar
