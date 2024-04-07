
import { useState } from 'react';
import './App.css';
import CreateEmployee from './Components/CreateEmployee';
import EmployeeList from './Components/EmployeeList';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Footer from './Components/Footer';
import UpdateEmployee from './Components/UpdateEmployee';

function App() {
 
  return (
    <div className="App">
<BrowserRouter>
<ul>
  <li>
    <Link  to="/create">CreateEmployee</Link>
  </li>
  <li>
    <Link to="/list">EmployeeList</Link>
  </li>
</ul>
<Routes>
  <Route path="/list" element={<EmployeeList/>}/>
  <Route path="/create" element={<CreateEmployee/>}/>
  <Route path='/update/:id' element={<UpdateEmployee/>}/>
</Routes>
<Footer/>
</BrowserRouter>
    </div>
  );
}

export default App;
