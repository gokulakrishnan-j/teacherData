import React, { useEffect } from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import{useParams,useNavigate} from 'react-router-dom'

function EditDetails() {
  let params=useParams();
  const {id} =params
  let navigate =useNavigate();
  const [userdata,setuserData]=useState('')
 


  useEffect(()=>{
    

    fetch(`https://632161eafd698dfa29f6a0c4.mockapi.io/student/${id}`)
    .then((data)=>data.json())
    .then((value)=>setuserData(value))

},[])

   
    const addUser=(value)=>{
      setuserData({...userdata,...value})
console.log({...userdata,...value})

    }

    const movieList={
      name:userdata.name,
      age:userdata.age,
      dob:userdata.dob,
      standard:userdata.standard
    }
    console.log(movieList)

    
    var handlesubmit=(id)=>{
      

      fetch(`https://632161eafd698dfa29f6a0c4.mockapi.io/student/${id}`,{
           method:"PUT",
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
        <TextField id="outlined-basic" value= {userdata.name}  sx={{width:"50vw"}} onChange={(event)=>addUser({name : event.target.value })} label="Name" variant="outlined" />
        </div>
        <div>
        <TextField id="outlined-basic" value= {userdata.age}   sx={{width:"50vw"}} onChange={(event)=>addUser({age : event.target.value})} label="Age" variant="outlined" />
        </div>
        <div>
        <TextField id="outlined-basic" value= {userdata.dob}   sx={{width:"50vw"}} onChange={(event)=>addUser({dob : event.target.value})} label="Date Of Birth" variant="outlined" />
        </div>
        <div>
        <TextField id="outlined-basic" value= {userdata.standard}    sx={{width:"50vw"}} onChange={(event)=>addUser({standard : event.target.value})} label="Standard" variant="outlined" />
        </div>
        <Button  variant="contained" onClick={()=>{handlesubmit(id)
        
        }
        } >SAVE</Button>
      </Box>
      <Button variant="outlined"  sx={{color:"black", margin:"16px"}} onClick={()=>navigate(-1)} startIcon={<KeyboardBackspaceIcon />}>
  Back
</Button>
     </div>
    )
}

export default EditDetails