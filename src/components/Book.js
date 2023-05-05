import { React, useEffect, useState} from 'react';
import { Container, Paper, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export function Book() {
  const paperstyle={padding:'50px 20px', width:600, margin:"20px auto"}
  const [books, setBooks]=useState([])

  const navigate = useNavigate();
  const handleClick=(e)=>{
    const borrowDate = new Date();
    const returnDate = new Date();
    returnDate.setDate(returnDate.getDate()+20);
    const borrow = {
      student:{
        studentId:localStorage.getItem('id')
      },
      book:{
        bookId:localStorage.getItem('bookId')
      },
      borrowDate:borrowDate,
      returnDate:returnDate,
      returnedDate:""
    }
    fetch(`http://localhost:8082/book/borrowBook2/${localStorage.getItem('id')}/${localStorage.getItem('bookId')}`,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(borrow)
    }).then(async (result)=>{
      if(result.status==200){
          alert('Successfully borrowed Book : '+localStorage.getItem('bookName'));
      } else {
        alert('Book is already borrowed by you.');
      }
    })
  }
  const handleBack=(e)=>{
    e.preventDefault()
    navigate(`/student/homepage`)
  }

  useEffect(()=>{
    fetch("http://localhost:8082/book/getAll")
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
          <Button variant="contained" onClick={()=>{
            localStorage.setItem('bookId', book.id)
            localStorage.setItem('bookName', book.bookName)
            handleClick()
          }}>Borrow Book</Button>
          </Paper>
      ))}
      <Button variant="contained" size='large' onClick={handleBack}>Back</Button>

    </Paper>
    </Container>
  );
}

export function BookDetail() {
  const paperstyle={padding:'50px 20px', width:600, margin:"20px auto"}
  const [book, setBook]=useState([])

  const handleClick=(e)=>{
    e.preventDefault()
    const studentId = 11;
    const bookId = 1;
    const borrow = {
      student:{
        studentId:studentId
      },
      book:{
        bookId:bookId
      },
      borrowDate:"1998-03-12",
      returnDate:"1998-04-12",
      returnedDate:""
    }
    fetch(`http://localhost:8082/book/borrowBook2/${studentId}/${bookId}`,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(borrow)
    }).then(()=>{
      console.log("Book borrowed")
    })
  }

  useEffect(()=>{
    fetch("http://localhost:8082/book/getBook"+"?id="+3)
    .then(res=>res.json())
    .then((result)=>{
      setBook(result);
    }
    )
  },{})
  return (
    <Container>
    <h1>Book Detail</h1>
    <Paper elevation={3} style={paperstyle}>
      {
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={book.bookId}>
          id:{book.id}<br/>
          Name:{"  "+book.bookName}<br/>
          <Button variant="contained" onClick={handleClick}>Borrow</Button>
        </Paper>
        
      }

    </Paper>
    </Container>
  );
}