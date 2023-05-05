import { React, useEffect, useState} from 'react';
import { Container, Paper, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment';

export default function BorrowedBooks() {
  const paperstyle={padding:'50px 20px', width:600, margin:"20px auto"}
  const [books, setBooks]=useState([])

  const navigate = useNavigate();
  const handleBack=(e)=>{
    e.preventDefault()
    navigate(`/student/homepage`)
  }

  useEffect(()=>{
    fetch(`http://localhost:8082/book/borrowedBooks/${localStorage.getItem('id')}`)
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
      {books.map(book=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={book.id}>
          ID:{"  "+book.book.id}<br/>
          Name:{"  "+book.book.bookName}<br/>
          borrowDate:{ " "+moment(new Date(book.borrowDate)).utc(false).format('DD-MM-YYYY')}<br/>
          returnDate:{ " "+moment(new Date(book.returnDate)).utc(false).format('DD-MM-YYYY')}<br/>
          overDue:{moment(book.returnDate).isAfter(moment(new Date()))? "No":"Yes"}
          </Paper>
      ))}
    <Button variant="contained" size='large' onClick={handleBack}>Back</Button>
    </Paper>
    </Container>
  );
}