import { React, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment';

export default function ReturnBook() {
  const paperstyle={padding:'50px 20px', width:600, margin:"20px auto"}
  const [duesClear, setDuesClear]=useState([])
  const [bookId,setBookId]=useState('')

  const navigate = useNavigate();
  const handleBack=(e)=>{
    e.preventDefault()
    navigate(`/student/homepage`)
  }

  const handleReturn=(e)=>{
    e.preventDefault()
    const studentId=1;
    const bookId = 1;
    const returnBook = {
      student:{
        studentId:studentId
      },
      book:{
        bookId:bookId
      },
      returnedDate:moment(new Date())
    }
    fetch(`http://localhost:8080/book/returnBook/${studentId}/${bookId}`,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(returnBook)
    })
  }

  return (
    <Container>
    <h1>Return Book</h1>
    <Paper elevation={3} style={paperstyle}>
      {
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={duesClear}>
        <TextField id="outlined-basic" label="Book ID" variant="outlined" fullWidth 
          value={bookId}
          onChange={(e)=>setBookId(e.target.value)}
        />
        <Button variant="contained" size='large' onClick={handleReturn}>Return</Button>
        </Paper>
      }
      <Button variant="contained" size='large' onClick={handleBack}>Back</Button>

    </Paper>
    </Container>
  );
}