import './App.css';
import Appbar from './components/Appbar';
import LoggedInAppbar from './components/LoggedInAppbar';
import {StudentRegister, UpdateStudent, Student, StudentHome} from './components/Student';
import {Book, BookDetail} from './components/Book';
import BorrowedBooks from './components/BorrowHistory';
import ReturnBook from './components/Return';
import { Routes, Route } from 'react-router-dom';
import { AdminHome, GetAllStudents, AllBorrowedBooks, AllOverDueBooks, AllBooks, AddBook } from './components/Admin';

function App() {
  return (
    <div className="App">
    {/* <Appbar/> */}
    <Routes>
      <Route path='/' element={[<Appbar/>,<Student/>]}/>
      <Route path='/student/borrwedHistory' element={[<LoggedInAppbar/>,<BorrowedBooks/>]}/>
      <Route path='/student/return' element={[<LoggedInAppbar/>,<ReturnBook/>]}/>
      <Route path='/student/books' element={[<LoggedInAppbar/>,<Book/>]}/>
      <Route path='/student/editProfile' element={[<LoggedInAppbar/>,<UpdateStudent/>]}/>
      <Route path='/student/homepage' element={[<LoggedInAppbar/>,<StudentHome/>]}/>

      <Route path='/admin/students' element={[<LoggedInAppbar/>,<GetAllStudents/>]}/>
      <Route path='/admin/borrowedBooks' element={[<LoggedInAppbar/>,<AllBorrowedBooks/>]}/>
      <Route path='/admin/overDues' element={[<LoggedInAppbar/>,<AllOverDueBooks/>]}/>
      <Route path='/admin/books' element={[<LoggedInAppbar/>,<AllBooks/>]}/>
      {/* <Route path='/viewProfile' element={<Course/>}/> */}
      <Route path='/admin/addBook' element={[<LoggedInAppbar/>,<AddBook/>]}/>
      <Route path='/admin/homepage' element={[<LoggedInAppbar/>,<AdminHome/>]}/>
    </Routes>
    </div>
  );
}

export default App;
