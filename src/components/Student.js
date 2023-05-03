import { React, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Course, CourseDetail } from './Book';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment';

export function Student() {
  const paperstyle={padding:'50px 20px', width:600, margin:"20px auto"}
  const [emailId,setEmail]=useState('')
  const[password, setPassword]=useState('')
  const [students, setStudents]=useState([])

  const navigate = useNavigate();
  const handleClick=(e)=>{
    e.preventDefault()
    const student={emailId, password}
    console.log(student);
    fetch("http://localhost:8080/student/login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)
    }).then((result)=>{
      console.log("Logged in", result.status);
      if(result.status ==200){
        console.log("email------ ",student.emailId);
        if(student.emailId=="admin")
          navigate(`/admin/homepage`)
        navigate(`/student/homepage`)
      }
      else 
        alert('Invalid Credentials')
    })
  }

  const handleRegister=(e)=>{
    e.preventDefault()
    navigate(`/register`)
  }

  useEffect(()=>{
    fetch("http://localhost:8080/student/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setStudents(result);
    }
    )
  },[])
  return (
    <Container>
      <Paper elevation={3} style={paperstyle}>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <h1 style={{color:"gray"}}><u>Login</u></h1>
      <TextField id="outlined-basic" label="Email or Username" variant="outlined" fullWidth 
      value={emailId}
      onChange={(e)=>setEmail(e.target.value)}
      />
      <TextField id="outlined-basic" label="Password" type='password' autoComplete='current-password' variant="outlined" fullWidth
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
      <Button variant="contained" onClick={handleClick}>Login</Button>
      <br></br>
      <Link variant="out-lined" onClick={handleRegister}>Create Account</Link>
    </Box>
    </Paper>
    </Container>
  );
}


export function StudentHome() {
  const paperstyle={padding:'50px 20px', width:600, margin:"20px auto"}

  const navigate = useNavigate();

  const handleViewBooks=(e)=>{
    e.preventDefault()
    navigate(`/student/books`)
  }
  const handleBorrowedBooks=(e)=>{
    e.preventDefault()
    navigate(`/student/borrwedHistory`)
  }
  const handleReturn=(e)=>{
    e.preventDefault()
    navigate(`/student/return`)
  }
  const handleProfile=(e)=>{
    e.preventDefault()
    navigate(`/student/editProfile`)
  }

  return (
    <Container>
      <Paper elevation={3} style={paperstyle}>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <h1 style={{color:"gray"}}><u>Dashboard</u></h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Paper square style={paperstyle} >
      <Button variant="contained" size='large' onClick={handleViewBooks}>View Books</Button>
      </Paper>
      <Paper square style={paperstyle} >
      <Button variant="contained" color='success' size='large' onClick={handleBorrowedBooks}>View Borrowed Books</Button>
      </Paper>
      <Paper square style={paperstyle} >
      <Button variant="contained" color='error' size='large' onClick={handleReturn}>Return Book</Button>
      </Paper>
      <Paper square style={paperstyle} >
      <Button variant="contained" size='large' onClick={handleProfile}>View Profile</Button>
      </Paper>
    </Box>
    </Paper>
    </Container>
  );
}

export function StudentRegister() {
  const paperstyle={padding:'50px 20px', width:600, margin:"20px auto"}
  const [emailId,setEmail]=useState('')
  const [firstName,setFirstName]=useState('')
  const [lastName,setLastName]=useState('')
  const [phoneNumber,setPhoneNumber]=useState('')
  const [yearIntake,setYearIntake]=useState('')
  const [dob,setDob]=useState('')
  const[password, setPassword]=useState('')

  const navigate = useNavigate();
  const handleClick=(e)=>{
    e.preventDefault()
    const student={emailId, password, firstName, lastName, phoneNumber, yearIntake, dob}
    console.log(student.dob);
    fetch("http://localhost:8080/student/create",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)
    }).then((result)=>{
      if(result.status ==200)
        navigate(`/homepage`)
      else 
        alert('Email already in use')
    })
  }
  return (
    <Container>
      <Paper elevation={3} style={paperstyle}>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <h1 style={{color:"gray"}}><u>Register</u></h1>
      <TextField id="outlined-basic" label="Email or Username" variant="outlined" fullWidth 
      value={emailId}
      onChange={(e)=>setEmail(e.target.value)}
      />
      <TextField id="outlined-basic" label="First Name" variant="outlined" fullWidth
      value={firstName}
      onChange={(e)=>setFirstName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Last Name" variant="outlined" fullWidth
      value={lastName}
      onChange={(e)=>setLastName(e.target.value)}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Date of Birth" 
        value={dob}
        onChange={(e)=>setDob(e)}/>
      </DemoContainer>
    </LocalizationProvider>
      <TextField id="outlined-basic" label="Phone Number" variant="outlined" fullWidth
      value={phoneNumber}
      onChange={(e)=>setPhoneNumber(e.target.value)}
      />
      <TextField id="outlined-basic" label="Year Intake" variant="outlined" fullWidth
      value={yearIntake}
      onChange={(e)=>setYearIntake(e.target.value)}
      />
      <TextField id="outlined-basic" label="Password" type='password' autoComplete='current-password' variant="outlined" fullWidth
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
      <Button variant="contained" onClick={handleClick}>Register</Button>
    </Box>
    </Paper>
    </Container>
  );
}

export function UpdateStudent() {
  const paperstyle={padding:'50px 20px', width:600, margin:"20px auto"}
  const [firstName, setFirstName]=useState('')
  const [lastName, setLastName]=useState('')
  const [phoneNumber, setPhoneNumber]=useState('')
  const[password, setPassword]=useState('')
  const [student, setStudent] = useState([])

  const handleClick=(e)=>{
    e.preventDefault()
    const _student={
      password: password? password:student.password,
      phoneNumber: phoneNumber,
      firstName: firstName,
      lastName: lastName
    }
    console.log(_student);
    fetch("http://localhost:8080/student/updateProfile",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(_student)
    }).then(()=>{
      console.log("student updated")
    })
  }

  useEffect(()=>{
    const _student={emailId:"deepak6@deepak.com", password:"fsdgj"}
    fetch("http://localhost:8080/student/login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(_student)
    }).then(res=>res.json())
    .then((result)=>{
      setStudent(result)
    })
  },{})
  return (
    <Container>
      <Paper elevation={3} style={paperstyle}>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <h1 style={{color:"gray"}}><u>Edit Profile</u></h1>
      <TextField id="updateFirstName" label="First Name" variant="outlined" fullWidth
      type='text'
      name='First Name'
      InputLabelProps={{shrink:true}}
      value={student.firstName || ''}
      onChange={(e)=>setFirstName(e.target.value)}
      />
      <TextField label="Last Name" fullWidth
      value={student.lastName || ''}
      onChange={(e)=>setLastName(e.target.value)}
      />
      <TextField id="updatePhoneNumber" label="Phone Number" fullWidth
      value={student.phoneNumber || ''}
      onChange={(e)=>setPhoneNumber(e.target.value)}
      />
      <TextField id="updatePassword" label="Password" type='password' autoComplete='current-password' fullWidth
      value={''}
      onChange={(e)=>setPassword(e.target.value)}
      />
      <Button variant="contained" onClick={handleClick}>Update</Button>
    </Box>
    </Paper>
    </Container>
  );
}
