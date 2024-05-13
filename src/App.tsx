import React from 'react';
import './App.css';
import TaskProvider from './context/TaskContext';
import Tabs from './components/Tabs';
import Wrapper from './components/MainContainer';
import {Routes, Route, Navigate} from 'react-router-dom'
import { useAuthContext } from './context/AuthContext';
import Login from './pages/login';
import Signup from './pages/signup';

function App() {
  const {user} = useAuthContext()

  return (
    <div className="">
        <Wrapper>
              <Routes>
              <Route path='/' element={user ? <Tabs /> : <Navigate to={"/login"} />} />
              <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
              <Route path='/signup' element={user ? <Navigate to='/' /> : <Signup />} />
              </Routes>
        </Wrapper>
    </div>
  );
}

export default App;
