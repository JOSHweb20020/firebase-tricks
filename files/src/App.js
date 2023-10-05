import CallMadeIcon from '@mui/icons-material/CallMade';
import {compareAsc, format} from 'date-fns'
import oculus2 from './image/oculus2.png'



function App() {

  const date = new Date();
 const currentDate = date.getDay();
 const currentMonth = date.getMonth();
 const currentYear = date.getFullYear();
 const Hours = date.getHours();
 const Minutes = date.getMinutes();
 const seconds = date.getSeconds();
 const millisecond = date.getMilliseconds();

  return (
    <div className="App" style={{
     
      color:'white',
      background:'linear-gradient(90deg, rgba(56,38,57,1) 0%, rgba(84,45,97,1) 48%, rgba(28,2,43,1) 100%)'      
    }}>
      <header style={{
        textAlign:'center',
        

      }}>
        <div style={{
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
          borderBottom:'1px solid white',
          padding:'3px 20px',
          
          
        }}>
          <h3 style={{fontSize:"30px"}}>Get<span style={{color:'#e43be9'}}>Linked</span></h3>
          <div style={{display:"flex",alignItems:'center'}}>
            <div style={{margin:'0 50px'}}>Timeline</div>
            <div style={{margin:'0 50px'}}>Overview</div>
            <div style={{margin:'0 50px'}}>FAQs</div>
            <button style={{
              padding:'10px 15px',
              color:'white',
             background: 'linear-gradient(90deg, rgba(56,38,57,1) 0%, rgba(84,45,97,1) 48%, rgba(28,2,43,1) 100%)'
            }}>Register</button>
          </div>
          <CallMadeIcon style={{width:'40px', height:'30px',  border:'1px solid white'}}/>
        </div> 
        <h4 style={{ paddingRight:'20px',fontFamily: 'cursive', fontSize:'60px', marginBottom:'40px', textAlign:'right'}}>Igniting a Revolution in <span style={{borderBottom:'2px solid pink'}}>HR innovation</span></h4>
      </header>
      <div className='Top' style={{display:"flex", padding:'20px', flexDirection:'row', flexWrap:"wrap", alignContent:'center' ,justifyContent:"space-evenly"}}>
      <div className='top-text' style={{}}>
        <h4>Hackathon<span style={{color:'purple'}}>1.0</span></h4>
        <p>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
        <button style={{
          background:'linear-gradient(90deg, rgba(243,88,255,1) 0%, rgba(116,24,177,1) 100%);',
          padding:'15px 20px',  border:'none'}}>Register</button>
      </div>
      <div className='text-image'>
        <img src={oculus2} alt='oculus'/>
      </div>
      </div>
      
      <div style={{textAlign:'left'}}className='Date' >
        <span  style={{fontSize:"80px"}}className='day'>{currentDate} : {currentMonth} : {currentYear}</span>
        <div style={{fontSize:"30px"}} className='time'>{Hours} : {Minutes} : {seconds} : {millisecond}</div>

      </div>

      <h1>gatlinked Tech <br/>Hackathon 1.0</h1>
      
    </div>
  );
}

export default App;
