import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from './components/MainContainer';
import TaskProvider from './providers/TaskProvider';
import Tabs from './components/Tabs';
import Wrapper from './components/MainContainer';

function App() {
  return (
    <div className="">
      <TaskProvider>
        <Wrapper>
          <Tabs/>
        </Wrapper>
      </TaskProvider>
    </div>
  );
}

export default App;
