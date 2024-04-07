
import './App.css';
import Home from './Component/Home';
import RestaurantCreate from './Component/RestaurantCreate';
import RestaurantDetail from './Component/RestaurantDetail';
import RestaurantList from './Component/RestaurantList';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import RestaurantSearch from './Component/RestaurantSearch';
import RestaurantUpdate from './Component/RestaurantUpdate';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffe, faHome, faList, faPlusCircle, faSearch, faSignOutAlt, faUser, faUserEdit} from '@fortawesome/free-solid-svg-icons'
import Login from './Component/Login';
function App() {
 
  return (


    <div className="App">
      <BrowserRouter>
        <ul>
          <li>
            <Link to='/'><FontAwesomeIcon  icon={faHome}/>Home</Link>

          </li>
          <li>
            <Link to='/list'><FontAwesomeIcon  icon={faList}/>List</Link>

          </li>
          <li>
                <Link to='/create'><FontAwesomeIcon  icon={faPlusCircle}/>Create</Link>
              
            </li>
            <li>
                <Link to='/search'><FontAwesomeIcon  icon={faSearch}/>Search</Link>
              
            </li>
           
            <li>
                <Link to='/update'><FontAwesomeIcon  icon={faUserEdit}/>Update</Link>
              
            </li>
            <li>
                <Link to='/login'><FontAwesomeIcon  icon={faUser}/>Login</Link>
              
            </li>
            <li>
                <Link to='/logout'><FontAwesomeIcon  icon={faSignOutAlt}/>Logout</Link>
              
            </li>
        </ul>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/list' element={<RestaurantList/>}/>
          <Route path='/create' element={<RestaurantCreate/>}/>
          <Route path='/search' element={<RestaurantSearch/>}/>
          <Route path='/details/:id' element={<RestaurantDetail/>} />
          <Route path='/update' element={<RestaurantUpdate/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
