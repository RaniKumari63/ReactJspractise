import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Contact from './Components/Contact';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {FaCoffee, faContactBook, faHome, faMagnifyingGlass, faRegistered, faSignIn, faUser, faWrench} from '@fortawesome/free-solid-svg-icons'
import Employee from './Components/Employee';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
      <ul>
        <li>
          <Link to="/"><FontAwesomeIcon icon={faHome}/>Home</Link></li>
         <li> <Link to="/contactus"><FontAwesomeIcon icon={faContactBook}/>ContactUs</Link></li>
         <li><Link to="/aboutus"><FontAwesomeIcon icon={faUser}/>AboutUs</Link></li>
        <li> <Link to="/service"><FontAwesomeIcon icon={faWrench}/>Services</Link></li>
         <li> <Link to="/login"><FontAwesomeIcon icon={faSignIn}/>Login</Link></li>
         <li><Link to="/signup"><FontAwesomeIcon icon={faRegistered}/>SignUp</Link></li>
        
      </ul>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contactus" element={<Contact/>}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
        <Route path="/service" element={<Services/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/employee" element={<Employee/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
