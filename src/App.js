import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Add from './components/Add';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
function App() {

  const [users,setUsers]=useState([])
  useEffect(()=>
  {
      axios.get('http://localhost:8083/users')
      .then(res=>{
          setUsers(res.data)
      })
  },[])
  return (
    <div className="App" >
  
      <Router>
        <Routes>
          <Route path="/"  element={ <Home users={users}/>}/>
          <Route path="/create"  element={<Add setUsers={setUsers}/>}/>
        </Routes>
          
      </Router>

    </div>
  );
}

export default App;
