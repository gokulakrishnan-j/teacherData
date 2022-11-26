
import { useState  } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {useNavigate} from 'react-router-dom'
function AddDetails() {
  var [name,setname]=useState([])
  var [age,setage]=useState([])
  var [dob,setdob]=useState([])
  var [standard,setStandard]=useState([])

  const movieList={
    name:name,
    age:age,
    dob:dob,
    standard:standard
  }
  var navigate=useNavigate()
  
  var handlesubmit=()=>{
   
   
    
    movieList.name=== "" || movieList.age=== "" || movieList.dob=== "" || movieList.standard=== "" ?alert("FILL THE VALUE") ||
    navigate('/add-details'):  
    fetch("https://632161eafd698dfa29f6a0c4.mockapi.io/student",{
      method:"POST",
      body:JSON.stringify(movieList),
      headers: {"Content-Type": "application/json",}
    })
    .then(()=>navigate('/databoard') )
        

  }
  return (
    <div>
        
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField id="outlined-basic" sx={{width:"50vw"}} onChange={(event)=>setname(event.target.value)} label="Name" variant="outlined" />
      </div>
      <div>
      <TextField id="outlined-basic" sx={{width:"50vw"}} onChange={(event)=>setage(event.target.value)} label="Age" variant="outlined" />
      </div>
      <div>
      <TextField id="outlined-basic" sx={{width:"50vw"}} onChange={(event)=>setdob(event.target.value)} label="Date Of Birth" variant="outlined" />
      </div>
      <div>
      <TextField id="outlined-basic" sx={{width:"50vw"}} onChange={(event)=>setStandard(event.target.value)} label="Standard" variant="outlined" />
      </div>
      <Button  variant="contained" onClick={()=>handlesubmit()} >Submit</Button>
    </Box>
    <Button variant="outlined"  sx={{color:"black", margin:"16px"}} onClick={()=>navigate(-1)} startIcon={<KeyboardBackspaceIcon />}>
  Back
</Button>
   </div>
  )
}

export default AddDetails