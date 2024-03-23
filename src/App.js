import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './Components/Users';

function App() {
  return (
    <BrowserRouter>
    
     <Routes>
        <Route path='/' element={<Login />} ></Route>
        <Route path='/user' element={<Users/>} />
        
     </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
