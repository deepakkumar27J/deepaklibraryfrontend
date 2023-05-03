import './App.css';
import Appbar from './components/Appbar';
import {StudentRegister, UpdateStudent, Student, StudentHome} from './components/Student';
import {Book, BookDetail} from './components/Book';
import BorrowedBooks from './components/BorrowHistory';
import ReturnBook from './components/Return';
import { Routes, Route } from 'react-router-dom';
import { AdminHome, GetAllStudents, AllBorrowedBooks, AllOverDueBooks, AllBooks, AddBook } from './components/Admin';

function App() {
  return (
    <div className="App">
    <Appbar/>
    <Routes>
      <Route path='/' element={<Student/>}/>
      <Route path='/student/borrwedHistory' element={<BorrowedBooks/>}/>
      <Route path='/student/return' element={<ReturnBook/>}/>
      <Route path='/student/books' element={<Book/>}/>
      <Route path='/student/editProfile' element={<UpdateStudent/>}/>
      <Route path='/student/homepage' element={<StudentHome/>}/>

      <Route path='/admin/students' element={<GetAllStudents/>}/>
      <Route path='/admin/borrowedBooks' element={<AllBorrowedBooks/>}/>
      <Route path='/admin/overDues' element={<AllOverDueBooks/>}/>
      <Route path='/admin/books' element={<AllBooks/>}/>
      {/* <Route path='/viewProfile' element={<Course/>}/> */}
      <Route path='/admin/addBook' element={<AddBook/>}/>
      <Route path='/admin/homepage' element={<AdminHome/>}/>
    </Routes>
    </div>
  );
}

export default App;
