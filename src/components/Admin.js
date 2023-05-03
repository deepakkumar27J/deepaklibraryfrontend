import { React, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';
import {useNavigate } from 'react-router-dom';
import moment from 'moment';

export function GetAllStudents() {
    const paperstyle={padding:'50px 20px', width:600, margin:"20px auto"}
    const [students, setStudents]=useState([])
  
    const navigate = useNavigate();
    const handleBack=(e)=>{
      e.preventDefault()
      navigate(`/admin/homepage`)
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
      <h1>All Students</h1>
      <Paper elevation={3} style={paperstyle}>
        {students.map(student=>(
          <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={student.id}>
            Name:{"  "+student.firstName+" "+student.lastName}<br/>
            Email:{"  "+student.emailId}<br/>
            Phone:{"  "+student.phoneNumber}<br/>
            DateOfBirth:{"  "+moment(new Date(student.dob)).utc(false).format('DD-MM-YYYY')}<br/>
            </Paper>
        ))}
        <Button variant="contained" size='large' onClick={handleBack}>Back</Button>
  
      </Paper>
      </Container>
    );
}

export function AdminHome() {
    const paperstyle={padding:'50px 20px', width:600, margin:"20px auto"}
  
    const navigate = useNavigate();
  
    const handleViewBooks=(e)=>{
      e.preventDefault()
      navigate(`/admin/books`)
    }
    const handleBorrowedBooks=(e)=>{
      e.preventDefault()
      navigate(`/admin/borrowedBooks`)
    }
    const handleAllStudents=(e)=>{
      e.preventDefault()
      navigate(`/admin/students`)
    }
    const handleAddBook=(e)=>{
      e.preventDefault()
      navigate(`/admin/addBook`)
    }

    const handleOverDues=(e)=>{
        e.preventDefault()
        navigate(`/admin/overDues`)
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
        <Button variant="contained" color='error' size='large' onClick={handleAllStudents}>View All Students</Button>
        </Paper>
        <Paper square style={paperstyle} >
        <Button variant="contained" size='large' onClick={handleAddBook}>Add New Book</Button>
        </Paper>
        <Paper square style={paperstyle} >
        <Button variant="contained" size='large' onClick={handleOverDues}>Check Over Dues</Button>
        </Paper>
      </Box>
      </Paper>
      </Container>
    );
}

export function AllBorrowedBooks() {
    const paperstyle={padding:'50px 20px', width:600, margin:"20px auto"}
    const [booksBorrowed, setBooks]=useState([])
  
    const navigate = useNavigate();
    const handleBack=(e)=>{
      e.preventDefault()
      navigate(`/admin/homepage`)
    }
  
    useEffect(()=>{
      fetch(`http://localhost:8080/book/allBorrowedBooks`)
      .then(res=>res.json())
      .then((result)=>{
        setBooks(result);
      }
      )
    },[])
    return (
      <Container>
      <h1>All Borrowed Books</h1>
      <Paper elevation={3} style={paperstyle}>
        {booksBorrowed.map(book=>(
            <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={book.id}>
                Name:{"  "+book.book.bookName}<br/>
                borrowDate:{ " "+moment(new Date(book.borrowDate)).utc(false).format('DD-MM-YYYY')}<br/>
                returnDate:{ " "+moment(new Date(book.returnDate)).utc(false).format('DD-MM-YYYY')}<br/>
            </Paper>
        ))}
      <Button variant="contained" size='large' onClick={handleBack}>Back</Button>
      </Paper>
      </Container>
    );
}

export function AllOverDueBooks() {
    const paperstyle={padding:'50px 20px', width:600, margin:"20px auto"}
    let [books, setBooks]=useState([])
  
    const navigate = useNavigate();
    const handleBack=(e)=>{
      e.preventDefault()
      navigate(`/admin/homepage`)
    }
  
    useEffect(()=>{
      fetch(`http://localhost:8080/book/allOverDueBooks`)
      .then(res=>res.json())
      .then((result)=>{
        setBooks(result);
      }
      )
    },[])
    return (
      <Container>
      <h1>Over Due Books</h1>
      <Paper elevation={3} style={paperstyle}>
        {books.map(book=>(
            <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={book.id}>
                Name:{"  "+book.book.bookName}<br/>
                borrowDate:{ " "+moment(new Date(book.borrowDate)).utc(false).format('DD-MM-YYYY')}<br/>
                returnDate:{ " "+moment(new Date(book.returnDate)).utc(false).format('DD-MM-YYYY')}<br/>
            </Paper>
        ))}
      <Button variant="contained" size='large' onClick={handleBack}>Back</Button>
      </Paper>
      </Container>
    );
}

export function AllBooks() {
    const paperstyle={padding:'50px 20px', width:600, margin:"20px auto"}
    const [books, setBooks]=useState([])
  
    const navigate = useNavigate();
    const handleBack=(e)=>{
      e.preventDefault()
      navigate(`/admin/homepage`)
    }
  
    useEffect(()=>{
      fetch("http://localhost:8080/book/getAll")
      .then(res=>res.json())
      .then((result)=>{
        setBooks(result);
      }
      )
    },[])
    return (
      <Container>
      <h1>All Books</h1>
      <Paper elevation={3} style={paperstyle}>
        {books.map(book=>(
          <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={book.bookId}>
            Id:{book.id}<br/>
            Name:{"  "+book.bookName}<br/>
            </Paper>
        ))}
        <Button variant="contained" size='large' onClick={handleBack}>Back</Button>
  
      </Paper>
      </Container>
    );
}

export function AddBook() {
    const paperstyle={padding:'50px 20px', width:600, margin:"20px auto"}
    const [bookName,setBookName]=useState('')
  
    const navigate = useNavigate();
    const handleClick=(e)=>{
      e.preventDefault()
      const book={bookName}
      fetch("http://localhost:8080/book/create",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(book)
      }).then((result)=>{
        if(result.status ==200)
          navigate(`/admin/homepage`)
        else 
          alert('Could not be added!')
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
        <h1 style={{color:"gray"}}><u>Add Book</u></h1>
        <TextField id="outlined-basic" label="Book Name" variant="outlined" fullWidth
        value={bookName}
        onChange={(e)=>setBookName(e.target.value)}
        />
        <Button variant="contained" onClick={handleClick}>Add</Button>
      </Box>
      </Paper>
      </Container>
    );
}