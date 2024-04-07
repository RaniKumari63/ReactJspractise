
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateStudent from './Components/CreateStudent';
import StudentList from './Components/StudentList';
import UpdateStudent from './Components/UpdateStudent';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <ul>
      <li>
        <Link to='/create'>CreateStudent</Link>
      </li>
      <li>
        <Link to='/list'>StudentList</Link>
      </li>
    </ul>
    <Routes>
      <Route path='/create' element={<CreateStudent/>}/>
      <Route path='/list' element={<StudentList/>}/>
      <Route path='/update/:id' element={<UpdateStudent/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
