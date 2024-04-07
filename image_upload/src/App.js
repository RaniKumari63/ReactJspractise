
import './App.css';
import {BrowserRouter,Link,Routes,Route} from 'react-router-dom'
import Create from './Components/Create';
import List from './Components/List';
import Update from './Components/Update';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ul>
        <li>
      <Link to='/create'>CreateProduct</Link>
    
      </li>
      <li>
      <Link to='/list'>ProductList</Link>
      </li>
      </ul>
      <Routes>
        <Route path='/create' element={<Create/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/update' element={<Update/>}/>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
